import React from "react";
import { GeneralStyledButton } from "./styles";
import { IPropsButtonSubMenu } from "../ButtonProps";
import { AtomSubtitle } from "../../Typography/Subtitle";

export const AtomButtonSubMenu = ({
  disabled,
  onClick,
  text,
  type,
  width = "144px",
  size = "small",
  selected=false,
  ...props
}: IPropsButtonSubMenu) => {

  return (
    <GeneralStyledButton
      disabled={disabled}
      onClick={onClick}
      width={width}
      type={type}
      size={size}
      selected={selected}
      {...props}
    > <AtomSubtitle text={text} align="center" color={selected? '#262626' : '#ffffff'}/>
    </GeneralStyledButton>
  );
};
