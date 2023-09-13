import React, { useContext } from "react";
import { ThemeContext } from "context/context";
import { GeneralStyledButton } from "./styles";
import { IProps } from "../ButtonProps";
import { IFontWeight } from "interfaces";

export const AtomButtonDefault = ({
  disabled,
  onClick,
  color,
  text,
  type,
  width = "144px",
  customColor = "tertiary",
  size = "small",
  styles = {},
  ...props
}: IProps) => {
  const { fontFamily, palette } = useContext(ThemeContext);

  const font: string = fontFamily.main["regular" as keyof IFontWeight];
  return (
    <GeneralStyledButton
      colorPalette={palette}
      disabled={disabled}
      onClick={onClick}
      color={color}
      width={width}
      type={type}
      customColor={customColor}
      font={font}
      size={size}
      styles={styles}
      {...props}
    >
      {text}
    </GeneralStyledButton>
  );
};
