import React from "react";
import { Link } from "react-router-dom";

function AboutSection() {
  const experiences = [
    {
      worktitle: "Server Administrator",
      numberofyears: "2015 - 2016",
      company: "Henderson Blake",
      jobDetails: "Maintaining servers on websites",
      url: "job-3",
    },
    {
      worktitle: "Project Manager & Web Developer",
      numberofyears: "2016 - 2020",
      company: "Sytian IT Productions",
      jobDetails:
        "Handling woocommerce websites and product catalog websites and developers",
      url: "job-2",
    },
    {
      worktitle: "Software Engineer (Front-End)",
      numberofyears: "2020 - Present",
      company: "Gengo Lionbridge",
      jobDetails:
        "Creating marketing campaigns and website pages using wordpress and maintaining website as per client request",
      url: "job-1",
    },
  ];

  const workExperiences = experiences
    .sort()
    .reverse()
    .map((item, index) => (
      <Link to={item.url} key={index}>
        <div className="content-wrapper my-2 py-4 px-4 flex justify-between items-center border-1 dark:border-gray-200 border-gray-200 rounded-xl w-full rounded-[5px] bg-white p-4 dark:bg-zinc-800 hover:bg-gray-100 transition-all">
          <div className="title-company-wrapper">
            <h2 className="text-[16px] font-bold">{item.worktitle}</h2>
            <p className="text-[14px]">{item.company}</p>
          </div>
          <div className="year text-right text-[12px]">
            <p>{item.numberofyears}</p>
          </div>
        </div>
      </Link>
    ));

  return (
    <div
      id="about-section"
      className="text-left py-4 md:py-12 md:max-w-[760px] m-auto md:px-4 border-gray-200 border-b-1"
    >
      <h2 className="text-[16px] font-bold text-center md:text-left">
        Work Experiences
      </h2>
      <div className="mt-[24px] px-4 md:px-0">{workExperiences}</div>
    </div>
  );
}

export default AboutSection;
