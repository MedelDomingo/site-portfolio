import React from "react";
import Button from "../../components/Button";

const BannerDetails = (props) => {
  return (
    <div className="banner-details-wrapper text-center md:text-left py-16 md:py-4 px-4 md:px-0">
      <h1 className="font-bold text-[16px] pb-4">{props.name}</h1>
      <p>Front End Engineer</p>
      <p className="py-4 ">
        A passionate Front End Web Developer with 10 years of experience in the
        IT industry, including 3 years specializing in building robust,
        user-focused web applications.
      </p>
      <a
        href="../../assets/docs/medel_cv.pdf"
        download="medel_cv.pdf"
        type="application/pdf"
        target="_blank"
        className="relative text-center focus:outline-none focus:ring-4 h-10 focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:ring-2 focus-visible:outline-hidden focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-950 cursor-pointer px-4 py-2 text-sm text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
      >
        Download CV
      </a>
    </div>
  );
};

function BannerSection() {
  return (
    <div
      id="banner-section"
      className="sm:min-h-[300px] md:py-12 md:px-4 md:max-w-[760px] m-auto text-left border-gray-200 border-b-1"
    >
      <BannerDetails name="Hi! I'm Medel L. Domingo" />
    </div>
  );
}

export default BannerSection;
