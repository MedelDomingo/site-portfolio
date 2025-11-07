import React from "react";
import { Link } from "react-router-dom";
import Footer from "../sections/Footer/Footer";
import ContactMe from "../sections/ContactMe/ContactMe";

function MainLayout({ children }) {
  return (
    <>
      <div className="sm:min-h-[300px] xl:px-0 py-5 px-5 md:max-w-[760px] m-auto text-left">
        {children}
        <ContactMe />
        <div className="back-home-btn py-10 flex items-center">
          <svg
            className="w-6 h-6 mr-[10px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
          <Link to={"/"}>Back to Home</Link>
        </div>
      </div>
      <div className="page-footer-section">
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
