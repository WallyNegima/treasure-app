import React from "react";
import Button from "components/commons/Button";
import { Container, TitleWrapper, Title, ButtonWrapper } from "./styles";
import useEnhance from "./enhance";

const Top = () => {
  const { goToTopPage, count } = useEnhance();
  return (
    <Container>
      <TitleWrapper>
        <Title>
          懸垂回数は{count}回！！！
          <br />
          お疲れさまでした！！！
        </Title>
      </TitleWrapper>
      <ButtonWrapper>
        <Button>Tweetする！！</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClickHandler={goToTopPage}>TOPに戻る</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Top;
