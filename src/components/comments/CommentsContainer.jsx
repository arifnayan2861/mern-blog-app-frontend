import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { createNewComment } from "../../services/index/comments";

const CommentsContainer = ({
  className,
  loggedInUserId,
  comments,
  postSlug,
}) => {
  const [affectedComment, setAffectedComment] = useState(null);
  const userState = useSelector((state) => state.user);
  // console.log(comments, mainComments);
  console.log(userState.userInfo);

  const { mutate: mutateNewComment, isLoading: isLoadingNewComment } =
    useMutation({
      mutationFn: ({ token, desc, slug, parent, replyOnUser }) => {
        return createNewComment({ token, desc, slug, parent, replyOnUser });
      },
      onSuccess: () => {
        toast.success(
          "Your comment is up for review! Please wait while the Admin takes action. Thank you!"
        );
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  //   add comment functionality
  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    mutateNewComment({
      desc: value,
      parent,
      replyOnUser,
      token: userState.userInfo.token,
      slug: postSlug,
    });
    setAffectedComment(null);
  };

  //   update comment functionality
  const updateCommentHandler = (value, commentId) => {
    setAffectedComment(null);
  };

  //   delete comment functionality
  const deleteCommentHandler = (commentId) => {};

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) => addCommentHandler(value)}
        loading={isLoadingNewComment}
      />
      <div className="space-y-4 mt-8">
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            loggedInUserId={loggedInUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
