import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import parse from "html-react-parser";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Italic from "@tiptap/extension-italic";
import { generateHTML } from "@tiptap/html";
import { useSelector } from "react-redux";

import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import { images, stables } from "../../constants";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";
import { getSinglePost, getAllPosts } from "../../services/index/posts";
import ArticleDetailSkeleton from "./components/ArticleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);
  const userState = useSelector((state) => state.user);

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["blog", slug],
    onSuccess: (data) => {
      setBreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: "Article title", link: `/blog/${data.slug}` },
      ]);
      // console.log(data);
      setBody(
        parse(
          generateHTML(data?.body, [Bold, Italic, Text, Paragraph, Document])
        )
      );
    },
  });

  const { data: postsData } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
  });

  return (
    <MainLayout>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message={error} />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col p-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            {/* route like data */}
            <BreadCrumbs data={breadCrumbsData} />
            {/* blog img */}
            <img
              src={
                data?.photo
                  ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                  : images.samplePostImage
              }
              alt={data?.title}
              className="rounded-xl w-full"
            />
            {/* blog category */}
            <div className="mt-4 flex gap-2">
              {data?.categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/blog?category=${category.name}`}
                  className="text-primary text-sm font-roboto inline-block md:text-base"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            {/* blog heading */}
            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
              {data?.title}
            </h1>
            {/* content */}
            <div className="mt-4 prose prose-sm sm:prose-base">
              {/* <p>{JSON.stringify(body)}</p> */}
              {body}
            </div>
            {/* comment section */}
            <CommentsContainer
              className="mt-10"
              loggedInUserId={userState?.userInfo?._id}
              comments={data?.comments}
              postSlug={slug}
            />
          </article>
          <div>
            {/* latest posts */}
            <SuggestedPosts
              className="mt-8 lg:mt-0 lg:max-w-xs"
              header="Latest Article"
              posts={postsData?.data}
              tags={tagsData}
            />
            <div className="mt-7">
              <h2 className="font-roboto text-dark-hard font-medium mb-4 md:text-xl">
                Share on:
              </h2>
              <SocialShareButtons
                url={encodeURI("https://www.facebook.com/arif.nayan28/")}
                title={encodeURIComponent("Help children get education")}
              />
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default ArticleDetailPage;
