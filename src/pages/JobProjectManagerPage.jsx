import React from "react";
import MainLayout from "../layout/MainLayout";
import WebsitePortfolio from "../components/WebsitePortfolio";

export default function JobProjectManagerPage() {
  return (
    <MainLayout>
      <div className="img-content-wrapper  border-gray-200 border-b-1 pb-10 px-4">
        <div className="content-container text-center md:text-left">
          <div className="header-wrapper mb-5">
            <h1 className="font-bold">Project Manager & Web Developer</h1>{" "}
            <span>2016 - 2020</span>
          </div>
          <ul className="jobs-list-items">
            <li>
              Developed and enhanced responsive websites from PSD designs to
              HTML using Bootstrap, ensuring cross-platform compatibility and
              optimized user interfaces.
            </li>
            <li>
              Built dynamic web interfaces with jQuery and AngularJS, improving
              user engagement and functionality.
            </li>
            <li>
              Created reusable WordPress themes and templates, streamlining team
              development workflows.
            </li>
            <li>
              Managed multiple projects concurrently under tight deadlines,
              delivering high-quality outcomes.
            </li>
            <li>
              Led teams as a project manager, guiding them to meet client
              standards and achieve project objectives.
            </li>
          </ul>
        </div>
      </div>
      <WebsitePortfolio
        sectionTitle="PH Projects"
        workSamples="apofloors.com, bluehorizons.travel, asianeyeinstitute.com"
      />
      <WebsitePortfolio
        sectionTitle="AU Projects"
        workSamples="rawandrice.com.au, www.ucapital.com.au, woofersworld.com.au, datatools.com.au, aussieoutdoorliving.com.au, www.tfo.com.au, www.letsbemates.com.au, appleseedgardening.com.au, gunnebo.com.au, cbsfoodtech.com.au, motiv8sports.com.au, www.1300smiles.com.au"
      />
    </MainLayout>
  );
}
