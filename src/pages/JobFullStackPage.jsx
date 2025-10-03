import React from "react";
import MainLayout from "../layout/MainLayout";
import WebsitePortfolio from "../components/WebsitePortfolio";

import "../pages/Jobs.css";

function JobFullStackPage() {
  return (
    <MainLayout>
      <div className="img-content-wrapper border-gray-200 border-b-1 pb-10">
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
        sectionTitle="Sample Works"
        workSamples="https://gengo.com/order/"
      />
    </MainLayout>
  );
}

export default JobFullStackPage;
