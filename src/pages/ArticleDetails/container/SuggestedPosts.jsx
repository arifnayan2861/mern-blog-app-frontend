import { Link } from "react-router-dom";
import { images, stables } from "../../../constants";

const SuggestedPosts = ({ className, header, posts = [], tags }) => {
  // console.log(posts);
  return (
    <div
      className={`w-full rounded-lg p-4 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      {/* header */}
      <h2 className="text-dark-hard font-roboto font-bold md:text-xl">
        {header}
      </h2>
      {/* posts */}
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((item) => (
          <div
            key={item?._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img
              src={
                item?.image
                  ? stables.UPLOAD_FOLDER_BASE_URL + item.image
                  : images.samplePostImage
              }
              alt={item.title}
              className="aspect-square object-cover rounded-lg w-1/5"
            />
            <div>
              <h3 className="md:text-base font-roboto text-sm text-dark-hard font-medium lg:text-lg">
                <Link to={`/blog/${item.slug}`}>{item.title}</Link>
              </h3>
              <span className="text-xs opacity-60">{item?.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
      {/* tags */}
      <h2 className="font-roboto font-medium text-dark-hard mt-8 md:text-xl">
        Tags
      </h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {tags.map((item, index) => (
          <Link
            key={index}
            to="/"
            className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPosts;
