import React, { Fragment } from "react";
import useEnhance from "./enhance";

const Video = () => {
  useEnhance();
  return (
    <Fragment>
      <video playsInline autoPlay />
      {/* <button onClick={getCanvas}>撮影</button> */}
      <canvas style={{ display: "none" }} />
      {/* <button onClick={increment}>でてくと</button> */}
    </Fragment>
  );
};

export default Video;
