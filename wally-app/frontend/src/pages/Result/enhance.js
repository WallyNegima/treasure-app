import useReactRouter from "use-react-router";
import { useSelector } from "react-redux";

const useEnhance = () => {
  const { history } = useReactRouter();
  const countSelector = state => state.count;
  const count = useSelector(countSelector);

  const goToTopPage = () => history.push("/");

  return {
    goToTopPage,
    count
  };
};

export default useEnhance;
