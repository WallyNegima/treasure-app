import React from "react";
import Button from "components/commons/Button";
import { Container, Count } from "./styles";
import useEnhance from "./enhance";
const Top = () => {
  const { postWorkDetail, count, updateCount } = useEnhance();
  return (
    <Container>
      <Count>{count}回</Count>
      <Button onClickHandler={() => updateCount(count + 1)}>
        懸垂インクリメント！
      </Button>
      <Button onClickHandler={() => postWorkDetail(count)}>
        限界突破！懸垂を終了する
      </Button>
    </Container>
  );
};

export default Top;
