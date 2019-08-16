import { useState } from "react";
import { useSelector } from "react-redux";
import useReactRouter from "use-react-router";
import api from "utils/api";

const useEnhance = () => {
  const { history } = useReactRouter();
  const workLogIdSelector = state => state.workLogId;
  const workLogId = useSelector(workLogIdSelector);

  const postWorkDetail = count => {
    api
      .post(`/work_logs/${workLogId}/work_details`, {
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
    updateCount,
    workLogId
  };
};

export default useEnhance;
