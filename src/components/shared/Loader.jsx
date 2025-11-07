import React from "react";

import "./Loader.css";

import { TextShimmer } from "../../../components/motion-primitives/text-shimmer";

const Loader = (props) => {
  return (
    <div className="loader__wrapper">
      <TextShimmer className="font-mono text-sm" duration={1}>
        {props.loaderMessage}
      </TextShimmer>
    </div>
  );
};

export default Loader;
