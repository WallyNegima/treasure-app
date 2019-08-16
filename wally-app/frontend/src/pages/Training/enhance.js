import { useState } from "react";
import useReactRouter from "use-react-router";
import api from "utils/api";

const useEnhance = () => {
  const { history } = useReactRouter();

  const postWorkDetail = count => {
    api
      .post(`/work_logs/1/work_details`, {
        count
      })
      .then(() => {
        history.push("/result");
      })
      .catch(e => {
        console.debug(e);
      });
  };

  const [count, updateCount] = useState(0);
  return {
    postWorkDetail,
    count,
    updateCount
  };
};

export default useEnhance;
