import React from "react";
import Button from "components/commons/Button";
import { Container, Count, ButtonWrapper } from "./styles";
import useEnhance from "./enhance";
const Top = () => {
  const { postWorkDetail, count, updateCount } = useEnhance();
  return (
    <Container>
      <Count>{count}回</Count>
      <ButtonWrapper>
        <Button onClickHandler={() => updateCount(count + 1)}>
          懸垂インクリメント！
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClickHandler={() => postWorkDetail(count)}>
          限界突破！懸垂を終了する
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Top;
