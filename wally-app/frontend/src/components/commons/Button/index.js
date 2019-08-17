import React from "react";

import { ButtonContainer } from "./styles";

const Button = ({ onClickHandler, children, twitter }) => {
  return (
    <ButtonContainer twitter={twitter} onClick={onClickHandler}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
