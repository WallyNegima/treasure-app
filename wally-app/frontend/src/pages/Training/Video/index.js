import React, { Fragment } from "react";
import useEnhance from "./enhance";
const Video = () => {
  const { getCanvas } = useEnhance();
  return (
    <Fragment>
      <video playsInline autoPlay />
      <button onClick={getCanvas}>撮影</button>
      <canvas />
    </Fragment>
  );
};

export default Video;
