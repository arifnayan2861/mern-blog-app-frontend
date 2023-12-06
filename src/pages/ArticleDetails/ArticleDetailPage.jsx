import { Link } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: "/blog/1" },
];

const postsData = [
  {
    _id: "1",
    img: images.Post1Image,
    title: "Help Children Get Better",
    createdAt: "2023-01-12",
  },
  {
    _id: "2",
    img: images.Post1Image,
    title: "Help Children Get Better",
    createdAt: "2023-01-12",
  },
  {
    _id: "3",
    img: images.Post1Image,
    title: "Help Children Get Better",
    createdAt: "2023-01-12",
  },
  {
    _id: "4",
    img: images.Post1Image,
    title: "Help Children Get Better",
    createdAt: "2023-01-12",
  },
];

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
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col p-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          {/* route like data */}
          <BreadCrumbs data={breadCrumbsData} />
          {/* blog img */}
          <img
            src={images.Post1Image}
            alt="laptop"
            className="rounded-xl w-full"
          />
          {/* blog category */}
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            EDUCATION
          </Link>
          {/* blog heading */}
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help Children Get Better Education
          </h1>
          {/* content */}
          <div className="mt-4 text-dark-light">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              nostrum in voluptates! Dolore soluta vel fugit dolorem eius quidem
              non. Optio accusamus consectetur dicta eaque autem amet aliquid
              hic velit. in voluptates! Dolore soluta vel fugit dolorem eius
              quidem non. Optio accusamus consectetur dicta eaque autem amet
              aliquid hic velit.
            </p>
          </div>
          {/* comment section */}
          <CommentsContainer className="mt-10" loggedInUserId="a" />
        </article>
        <div>
          {/* latest posts */}
          <SuggestedPosts
            className="mt-8 lg:mt-0 lg:max-w-xs"
            header="Latest Article"
            posts={postsData}
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
    </MainLayout>
  );
};

export default ArticleDetailPage;
