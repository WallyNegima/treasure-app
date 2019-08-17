import useReactRouter from "use-react-router";

const useEnhance = () => {
  const { history } = useReactRouter();

  return { history };
};

export default useEnhance;
