import React from "react";
import MainLayout from "../layout/MainLayout";
import WebsitePortfolio from "../components/WebsitePortfolio";

import gengoImg from "../assets/images/portfolios/gengo_img.jpg";

import "../pages/Jobs.css";

function JobFullStackPage() {
  return (
    <MainLayout>
      <div className="img-content-wrapper pb-10 px-4">
        <div className="content-container text-center md:text-left">
          <div className="header-wrapper mb-5">
            <h1 className="font-bold">Front End Engineer</h1>{" "}
            <span>2020 - 2025</span>
          </div>
          <ul className="jobs-list-items">
            <li>
              Develop and implement custom ReactJS components to improve UI
              functionality and design.
            </li>
            <li>
              Enhance website UI by integrating ReactJS components with existing
              WordPress-based systems.
            </li>
            <li>
              Maintain and enhance the front-end of our web application using
              ReactJS.
            </li>
            <li>
              Conduct code reviews to ensure high-quality, maintainable code.
            </li>
            <li>
              Work closely with stakeholders to understand requirements and
              implement UI improvements.
            </li>
            <li>
              Troubleshoot and resolve front-end issues to maintain system
              performance and reliability.
            </li>
            <li>
              Collaborate with designers to refine and optimize the user
              interface, ensuring alignment with UX best practices.
            </li>
          </ul>
        </div>
      </div>
      <WebsitePortfolio
        portType="modal"
        sectionTitle="Sample Works"
        portImg={gengoImg}
        workSamples="https://gengo.com/order/"
        portName="Lionbridge Gengo Translation"
        portDescription="Optimized for speed, Gengo helps you instantly connect your content with the right translator. The easy-to-use interface captures all essential information about your translation requirements to provide you with the right quality and hassle-free experience."
        portShortDescription="Online, Self-service Translation Platform for Reliable Translations by Human Translators"
      />
    </MainLayout>
  );
}

export default JobFullStackPage;
