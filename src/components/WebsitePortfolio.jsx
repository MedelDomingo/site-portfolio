import React from "react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "../../components/motion-primitives/morphing-dialog";

const WebsitePortfolio = ({
  sectionTitle,
  workSamples,
  portImg,
  portName,
  portDescription,
  portShortDescription,
  portType,
}) => {
  const samples = workSamples
    ? workSamples.split(",").map((s) => s.trim())
    : [];

  return (
    <div className="py-5 border-gray-200 border-b-1 border-t-1 md:px-4 pb-10">
      <h2 className="py-5 font-bold">{sectionTitle}</h2>
      <ul>
        {samples.map((sample, index) => (
          <li
            className="transition-all ease duration-200 rounded-[3px] inline-block m-[5px] border-1 border-gray-200 hover:bg-gray-100 dark:text-zinc-900"
            key={index}
          >
            {(portType == "modal" && (
              <MorphingDialog
                transition={{
                  type: "spring",
                  bounce: 0.05,
                  duration: 0.25,
                }}
              >
                <MorphingDialogTrigger
                  style={{
                    borderRadius: "12px",
                  }}
                  className="flex max-w-[270px] flex-col overflow-hidden "
                >
                  <MorphingDialogImage
                    src={portImg}
                    alt={portName}
                    className="h-48 w-full object-cover"
                  />
                  <div className="flex grow flex-row items-end justify-between px-3 py-5">
                    <div>
                      <h3 className="font-semibold pb-2">
                        <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                          {portName}
                        </MorphingDialogTitle>
                      </h3>
                      <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                        {portShortDescription}
                      </MorphingDialogSubtitle>
                    </div>
                  </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                  <MorphingDialogContent className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]">
                    <MorphingDialogImage
                      src={portImg}
                      alt={portName}
                      className="h-full w-full"
                    />
                    <div className="p-6">
                      <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                        {portName}
                      </MorphingDialogTitle>
                      <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400 mt-2">
                        {portShortDescription}
                      </MorphingDialogSubtitle>
                      <MorphingDialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: 100 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: 100 },
                        }}
                      >
                        <p className="my-4 text-zinc-500 dark:text-zinc-500 text-[14px]">
                          {portDescription}
                        </p>
                        <a
                          className="mt-2 inline-flex text-zinc-500 underline"
                          href={workSamples}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {workSamples}
                        </a>
                      </MorphingDialogDescription>
                    </div>
                    <MorphingDialogClose className="text-zinc-50" />
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            )) || (
              <a
                className="p-[10px] flex items-center justify-center"
                href={`https://${sample}`}
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
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebsitePortfolio;
