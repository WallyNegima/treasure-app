import useReactRouter from "use-react-router";
import { useDispatch } from "react-redux";
import { overwriteWorkLogId } from "ducks";
import api from "utils/api";

const useEnhance = () => {
  const dispatch = useDispatch();
  const { history } = useReactRouter();

  const postWorkLog = () => {
    api.post("/work_logs").then(resp => {
      dispatch(overwriteWorkLogId(resp.data.id));
      history.push("/training");
    });
  };
  return {
    postWorkLog
  };
};

export default useEnhance;
