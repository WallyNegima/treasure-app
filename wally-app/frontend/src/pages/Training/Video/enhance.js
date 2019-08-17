import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount } from "ducks";
import detectFaces from "utils/faceApi";

const makeblob = dataURL => {
  var BASE64_MARKER = ";base64,";
  if (dataURL.indexOf(BASE64_MARKER) == -1) {
    var parts = dataURL.split(",");
    var contentType = parts[0].split(":")[1];
    var raw = decodeURIComponent(parts[1]);
    return new Blob([raw], { type: contentType });
  }
  var parts = dataURL.split(BASE64_MARKER);
  var contentType = parts[0].split(":")[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;

  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
};
const useEnhance = () => {
  const [imgUrl, updateImgUrl] = useState("ooooooooooo");
  const [timer, updateTimer] = useState(null);
  const dispatch = useDispatch();
  const countSelector = state => state.count;
  const count = useSelector(countSelector);

  const autoCount = async () => {
    const video = (window.video = document.querySelector("video"));
    const canvas = (window.canvas = document.querySelector("canvas"));
    canvas.width = 240;
    canvas.height = 180;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    detectFaces(makeblob(canvas.toDataURL("image/png"))).then(faceNum => {
      if (faceNum > 0) {
        dispatch(incrementCount());
      }
    });
  };

  useEffect(() => {
    // すでにタイマーがあれするー
    if (timer) {
      return;
    }
    const video = (window.video = document.querySelector("video"));
    const canvas = (window.canvas = document.querySelector("canvas"));
    canvas.width = 240;
    canvas.height = 180;

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

    // ループしてカウント
    let t = setInterval(autoCount, 2500);

    updateTimer(t);
    return () => clearInterval(t);
  }, []);

  return { imgUrl, detectFaces, updateImgUrl };
};

export default useEnhance;
