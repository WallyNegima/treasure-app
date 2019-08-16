import React from "react";
import Button from "components/commons/Button";
import { Container, Count } from "./styles";
const Top = () => {
  return (
    <Container>
      <Count>1回</Count>
      <Button>限界突破！懸垂を終了する</Button>
    </Container>
  );
};

export default Top;
