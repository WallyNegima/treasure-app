import { useDispatch, useSelector } from "react-redux";
import useReactRouter from "use-react-router";
import { overwriteCount } from "ducks";
import api from "utils/api";

const useEnhance = () => {
  const { history } = useReactRouter();
  const dispatch = useDispatch();
  const workLogIdSelector = state => state.workLogId;
  const workLogId = useSelector(workLogIdSelector);
  const countSelector = state => state.count;
  const count = useSelector(countSelector);

  const postWorkDetail = count => {
    api
      .post(`/work_logs/${workLogId}/work_details`, {
        count
      })
      .then(() => dispatch(overwriteCount(count)))
      .then(() => {
        history.push("/result");
      })
      .catch(e => {
        console.debug(e);
      });
  };

  return {
    postWorkDetail,
    count,
    workLogId
  };
};

export default useEnhance;
