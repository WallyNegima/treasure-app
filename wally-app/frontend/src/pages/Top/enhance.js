import useReactRouter from "use-react-router";

import api from "utils/api";

const useEnhance = () => {
  const { history } = useReactRouter();

  const postWorkLog = () => {
    api.post("/work_logs").then(resp => {
      console.debug(resp.data);
      history.push("/training");
    });
  };
  return {
    postWorkLog
  };
};

export default useEnhance;
