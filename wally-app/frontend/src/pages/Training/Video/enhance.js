import { useEffect } from "react";

const getCanvas = () => {
  const video = (window.video = document.querySelector("video"));
  const canvas = (window.canvas = document.querySelector("canvas"));
  canvas.width = 480;
  canvas.height = 360;
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
};

const useEnhance = () => {
  useEffect(() => {
    const video = (window.video = document.querySelector("video"));
    const canvas = (window.canvas = document.querySelector("canvas"));
    canvas.width = 480;
    canvas.height = 360;

    const constraints = {
      audio: false,
      video: true
    };

    function handleSuccess(stream) {
      console.debug("success!!");
      window.stream = stream;
      video.srcObject = stream;
    }

    function handleError(error) {
      console.log(
        "navigator.MediaDevices.getUserMedia error: ",
        error.message,
        error.name
      );
    }

    const devices =
      navigator.mediaDevices ||
      (navigator.mozGetUserMedia || navigator.webkitGetUserMedia
        ? {
            getUserMedia: function(c) {
              return new Promise(function(y, n) {
                (
                  navigator.mozGetUserMedia || navigator.webkitGetUserMedia
                ).call(navigator, c, y, n);
              });
            }
          }
        : null);

    if (!navigator.mediaDevices) {
      console.log("getUserMedia() not supported.");
      return;
    }

    devices
      .getUserMedia(constraints)
      .then(handleSuccess)
      .catch(handleError);
  });
  return { getCanvas };
};

export default useEnhance;
