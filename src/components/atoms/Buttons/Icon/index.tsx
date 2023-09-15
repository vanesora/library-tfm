import React from "react";
import { GeneralStyledBtn, IconContainer } from "./styles";
import {
  ButtonHeight,
  IconAlign,
  IProps,
} from "../ButtonProps";
import { AtomIcon } from "../../Icon";


export const AtomButtonIcon = ({
  disabled,
  onClick,
  color,
  text,
  type,
  icon,
  customColor = "black",
  size = "small",
  ...props
}: IProps) => {

  return (
    <GeneralStyledBtn
      disabled={disabled}
      onClick={onClick}
      color={color?? 'primary'}
      type={type}
      customColor={customColor}
      size={size}
      {...props}
    >
      <AtomIcon
            icon={icon?? ''}
            size={size}
            color={color === 'secondary'? '#090088' : 'white'}
          />
    </GeneralStyledBtn>
  );
};
