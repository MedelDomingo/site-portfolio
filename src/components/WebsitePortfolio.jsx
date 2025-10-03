import React from "react";

export default function WebsitePortfolio({ sectionTitle, workSamples }) {
  const samples = workSamples
    ? workSamples.split(",").map((s) => s.trim())
    : [];
  return (
    <div className="py-5">
      <h2 className="py-5 font-bold">{sectionTitle}</h2>
      <ul>
        {samples.map((sample, index) => (
          <li
            className="transition-all ease duration-200 rounded-[3px] inline-block m-[5px] border-1 border-gray-200 hover:bg-gray-100 dark:text-zinc-900"
            key={index}
          >
            <a
              className="p-[10px] flex items-center justify-center"
              href={sample}
              target="_blank"
              rel="noopener noreferrer"
            >
              {sample}
              <svg
                className="w-6 h-6 pl-[5px] text-gray-800 dark:text-white"
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
                  d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
