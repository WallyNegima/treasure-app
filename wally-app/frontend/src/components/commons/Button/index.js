import React from "react";

import { ButtonContainer } from "./styles";

const Button = ({ onClickHandler, children }) => {
  return <ButtonContainer onClick={onClickHandler}>{children}</ButtonContainer>;
};

export default Button;
