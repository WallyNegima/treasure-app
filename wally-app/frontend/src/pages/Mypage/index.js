import React from "react";
import Logs from "./logs";
import { Container } from "./styles";
import useEnhance from "./enhance";

const Mypage = () => {
  const { logs } = useEnhance();
  return (
    <Container>
      <Logs logs={logs} />
    </Container>
  );
};

export default Mypage;
