import axios from "axios";

const api = axios.create({
  headers: {
    "Ocp-Apim-Subscription-Key": "7ad51d27a3ef4603be2d617acb66cd93",
    "Content-Type": "application/octet-stream"
  }
});

const detectFaces = async url => {
  const baseUrl =
    "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,emotion";

  return await api
    .post(baseUrl, url)
    .then(async resp => {
      return await resp.data.length;
    })
    .catch(e => {
      console.debug(e);
    });
};

export default detectFaces;
