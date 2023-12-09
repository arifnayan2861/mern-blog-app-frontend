import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";

import { images, stables } from "../../constants";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  loggedInUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies,
}) => {
  const isUserLoggedIn = Boolean(loggedInUserId);

  const commentBelongsToUser = loggedInUserId === comment.user._id;

  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;

  const repliedCommentId = parentId ? parentId : comment._id;

  const replyOnUserId = comment.user._id;

  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      {/* photo of user */}
      <img
        src={
          comment?.user?.avatar
            ? stables.UPLOAD_FOLDER_BASE_URL + comment.user.avatar
            : images.userImage
        }
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      />
      {/* name & date of comment */}
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs lg:text-sm">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-soft">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        {/* comment */}
        {!isEditing && (
          <p className="font-opensans mt-[10px] text-dark-soft">
            {comment.desc}
          </p>
        )}
        {isEditing && (
          <CommentForm
            btnLabel="Update"
            formSubmitHandler={(value) => updateComment(value, comment._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          />
        )}
        <div className="flex items-center gap-x-3 text-dark-soft font-roboto text-sm my-3">
          {/* comment reply btn */}
          {isUserLoggedIn && (
            <button
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }
              className="flex items-center space-x-2 hover:text-primary"
            >
              <FiMessageSquare className="w-4 h-auto" />
              <span>Reply</span>
            </button>
          )}
          {commentBelongsToUser && (
            <>
              {/* comment edit btn */}
              <button
                onClick={() =>
                  setAffectedComment({ type: "editing", _id: comment._id })
                }
                className="flex items-center space-x-2 hover:text-primary"
              >
                <FiEdit2 className="w-4 h-auto" />
                <span>Edit</span>
              </button>
              {/* comment delete btn */}
              <button
                onClick={() => deleteComment(comment._id)}
                className="flex items-center space-x-2 hover:text-primary"
              >
                <FiTrash className="w-4 h-auto" />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            formSubmitHandler={(value) =>
              addComment(value, repliedCommentId, replyOnUserId)
            }
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}
        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                addComment={addComment}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                comment={reply}
                deleteComment={deleteComment}
                loggedInUserId={loggedInUserId}
                replies={[]}
                updateComment={updateComment}
                parentId={comment._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
