import React from "react";

import Button from "components/commons/Button";
import { Container, TitleWrapper, Title, ButtonWrapper } from "./styles";
import useEnhance from "./enhance";

const Top = () => {
  const { postWorkLog } = useEnhance();

  return (
    <Container>
      <TitleWrapper>
        <Title>懸垂やろうぜ</Title>
      </TitleWrapper>
      <ButtonWrapper>
        <Button onClickHandler={postWorkLog}>懸垂を始める</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Top;
