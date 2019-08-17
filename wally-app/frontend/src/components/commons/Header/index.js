import React from "react";
import { Container, Log, Menu } from "./styles";
import useEnhance from "./enhance";

const Header = () => {
  const { history } = useEnhance();

  return (
    <Container>
      <Log>懸垂やろうぜ</Log>
      <Menu onClick={() => history.push("/mypage")}>マイページ</Menu>
    </Container>
  );
};

export default Header;
