import { images } from "../../../constants";

const CTA = () => {
  return (
    <section className="relative bg-dark-hard px-5">
      <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
        <div className="col-span-12 lg:col-span-6">
          {/* heading */}
          <h2 className="text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
            Get our stories delivered from us to your inbox weekly
          </h2>
          {/* search box */}
          <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
            <input
              type="text"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg w-full placeholder:text-dark-soft"
            />
            <button className="px-4 py-3 rounded-lg w-full bg-primary text-white font-semibold md:w-fit md:whitespace-nowrap">
              Get Started
            </button>
          </div>
          {/* description */}
          <p className="text-dark-soft text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
            <span className="font-bold text-[#B3BAC5] italic md:not-italic md:font-normal md:text-dark-soft">
              Lorem ipsum dolor sit amet{" "}
            </span>
            consectetur adipisicing elit. Sit cumque vero tempore ex alias
            quidem autem magnam dicta! Vel
          </p>
        </div>
        <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:order-last lg:col-span-6">
          <div className="w-3/4 mx-auto relative">
            <div className="w-full bg-white p-3 x-[1] relative rounded-xl">
              <img
                src={images.CtaImage}
                alt="title"
                className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
              />
              {/* blog image heading */}
              <div className="p-5">
                <h2 className="font-roboto font-bold text-xl text-dark-light md:text-2xl lg:text-[28px]">
                  Future of Work
                </h2>
                <p className="mt-3 text-dark-soft text-sm md:text-lg">
                  Majority of people will work in jobs that don't exist today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
