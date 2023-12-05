import { FiSearch } from "react-icons/fi";

import { images } from "../../../constants";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col p-5 lg:flex-row">
      {/* hero section text */}
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl font-bold text-center text-dark-light md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Read the most interesting blogs
        </h1>
        <p className="text-dark-soft mt-4 text-center md:text-xl lg:text-left lg:text-base xl:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
          similique maiores omnis quae at corrupti nostrum a praesentium.
        </p>
        {/* hero section searchbox */}
        <div className="flex flex-col gap-y-2.5 mt-10 relative lg:mt-6 xl:mt-10">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              type="text"
              placeholder="Search Articles"
              className="placeholder:font-bold placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none font-semibold text-dark-light shadow-[rgba(12,_38,_76,_0.19)_0px_9px_20px] md:py-4"
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Search
          </button>
        </div>
        <div className="flex flex-col mt-4 lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-soft font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interface
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
          </ul>
        </div>
      </div>
      {/* hero image */}
      <div className="hidden lg:block lg:1/2">
        <img
          src={images.HeroImage}
          alt="users reading articles"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
