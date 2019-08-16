import React from "react";
import Button from "components/commons/Button";
import { Container, TitleWrapper, Title, ButtonWrapper } from "./styles";

const Top = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>懸垂やろうぜ</Title>
      </TitleWrapper>
      <ButtonWrapper>
        <Button>懸垂を始める</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Top;
