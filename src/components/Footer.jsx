import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

import { images } from "../constants";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 p-5 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        {/* product section */}
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-soft font-bold">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Landing page</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Referral Program</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        {/* services section */}
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-soft font-bold">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Themes</a>
            </li>
            <li>
              <a href="/">UI/UX</a>
            </li>
            <li>
              <a href="/">Illustrations</a>
            </li>
          </ul>
        </div>
        {/* company section */}
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-dark-soft font-bold">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        {/* more section */}
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-soft font-bold">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Catalog</a>
            </li>
          </ul>
        </div>
        {/* logo & social section */}
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img
            src={images.Logo}
            alt="logo"
            className="mx-auto brightness-0 invert md:mx-0"
          />
          <p className="text-sm text-dark-soft text-center mt-4 md:text-left md:text-base lg:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisic
          </p>
          {/* socials */}
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="/">
                <AiOutlineTwitter className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineFacebook className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineInstagram className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineYoutube className="w-6 h-auto" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
