import React from "react";
import Cards from "../../components/Cards";

function SampleWorks() {
  return (
    <div
      id="sample-works-section"
      className="py-4 md:py-12 md:max-w-[760px] m-auto md:px-4 border-gray-200 border-b-1"
    >
      <h2 className="text-[16px] font-bold text-center md:text-left">
        Latest Projects
      </h2>
      <div className="card-section-works">
        <Cards />
      </div>
    </div>
  );
}

export default SampleWorks;
