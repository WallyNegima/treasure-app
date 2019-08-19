import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReactRouter from "use-react-router";
import { useSelector } from "react-redux";
import { overwriteCount, overwriteWorkLogId } from "ducks";

const openShareWindow = url => {
  // windowNameは使用しないのでnullを指定する.
  return window.open(
    url,
    null,
    "width=600,height=500,menubar=no,toolbar=no,scrollbars=yes"
  );
};
const shareLink = "https://voyagegroup.com/internship/treasure/";
const shareText = count => {
  return (
    `懸垂を${count}回やりました！！！` +
    "\n" +
    "今日も筋トレ明日も筋トレ！！！\n"
  );
};
const useEnhance = () => {
  const { history } = useReactRouter();
  const countSelector = state => state.count;
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  const goToTopPage = () => history.push("/");

  const shareByTwitter = () => {
    openShareWindow(
      `http://twitter.com/share?url=${shareLink}&text=${shareText(
        count
      )}&hashtags=voyage_intern, オフィスで筋トレ`
    );
  };

  const resetCount = () => {
    dispatch(overwriteCount(0));
    dispatch(overwriteWorkLogId(null));
  };

  useEffect(() => {
    return () => resetCount();
  }, []);

  return {
    goToTopPage,
    shareByTwitter,
    count
  };
};

export default useEnhance;
