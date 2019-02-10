import React from "react";
import Bird from "./lod.gif";
const Loader = props => {
  return (
    <div className="loader">
      <img alt="loading" src={Bird} />
    </div>
  );
};

export default Loader;
