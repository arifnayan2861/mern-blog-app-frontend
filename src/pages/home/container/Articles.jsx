import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import ArticleCard from "../../../components/ArticleCard";
import { getAllPosts } from "../../../services/index/posts";

const Articles = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {!isLoading &&
          !isError &&
          data.map((post) => (
            <ArticleCard
              key={post._id}
              post={post}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
            />
          ))}
      </div>
      <button className="mx-auto font-semibold flex items-center gap-x-2 text-primary border-2 border-primary rounded-full px-5 py-3 hover:bg-primary hover:text-white transition-all duration-300">
        <span>More Articles</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
    </section>
  );
};

export default Articles;
