import React, { useContext } from "react";
import { IPropsButtonDefault } from "../ButtonProps";
import { GeneralStyledButton } from "./styles";
import { AtomIcon } from "../../Icon";
import { AtomParagraph } from "../../Typography/Paragraph";

export const AtomButtonDefault = ({
  onClick,
  color='primary',
  text,
  type,
  width = "144px",
  customColor = "black",
  size = "small",
  icon,
  position = 'left',
  ...props
}: IPropsButtonDefault) => {

  return (
    <GeneralStyledButton
      onClick={onClick}
      color={color}
      width={width}
      type={type}
      customColor={customColor}
      size={size}
      {...props}
    >
      {icon && position === 'left' && <AtomIcon
        icon={icon}
        size={size}
        color={color === 'secondary'? '#090088' : 'white'}
      />}
      <AtomParagraph text={text} align="left" size="large" color={color === 'secondary'? '#090088' : 'white'}/>
      {icon && position === 'right' && <AtomIcon
        icon={icon}
        size={size}
        color={color === 'secondary'? '#090088' : 'white'}
      />}
    </GeneralStyledButton>
  );
};
