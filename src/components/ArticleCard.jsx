import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";

import { images, stables } from "../constants";

const ArticleCard = ({ post, className }) => {
  return (
    // blog image
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <Link to={`/blog/${post.slug}`}>
        <img
          src={
            post.photo
              ? stables.UPLOAD_FOLDER_BASE_URL + post.photo
              : images.samplePostImage
          }
          alt="title"
          className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
        />
      </Link>

      {/* blog image heading */}
      <div className="p-5">
        <Link to={`/blog/${post.slug}`}>
          <h2 className="font-roboto font-bold text-xl text-dark-light md:text-2xl lg:text-[28px]">
            {post.title}
          </h2>
          <p className="mt-3 text-dark-soft text-sm md:text-lg">
            {post.caption}
          </p>
        </Link>
        {/* profile of user */}
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            {/* img of user */}
            <img
              src={
                post.user.avatar
                  ? stables.UPLOAD_FOLDER_BASE_URL + post.user.avatar
                  : images.userImage
              }
              alt="profile img of user"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              {/* user name */}
              <h4 className="font-bold italic text-dark-light text-sm md:text-base">
                {post.user.name}
              </h4>
              <div className="flex items-center gap-x-2 md:gap-x-2.5">
                <span
                  className={`${
                    post.user.verified ? "bg-[#36B37E]" : "bg-red-700"
                  } w-fit bg-opacity-20 p-1.5 rounded-full`}
                >
                  <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                </span>
                <span className="italic text-dark-soft text-xs md:text-sm">
                  {post.user.verified ? "Verified" : "Unverified"} Writer
                </span>
              </div>
            </div>
          </div>
          {/* blog date */}
          <span className="font-bold text-dark-soft italic text-sm md:text-base">
            {new Date(post.createdAt).getDate()}{" "}
            {new Date(post.createdAt).toLocaleString("default", {
              month: "long",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
