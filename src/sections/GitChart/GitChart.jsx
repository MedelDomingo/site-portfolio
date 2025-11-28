import React from "react";

const GitChart = (props) => {
  return (
    <section className="text-center md:text-left p-4 md:py-12 md:max-w-[760px] m-auto md:px-4 border-gray-200 border-b-1">
      <h3 className="text-[16px] font-bold pb-10">{props.year}</h3>
      <img
        src="http://ghchart.rshah.org/737E82/MedelDomingo"
        alt="2025 Github Chart"
        className="w-[100%]"
      />
    </section>
  );
};

export default GitChart;
