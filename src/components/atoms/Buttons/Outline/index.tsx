import { ThemeContext } from "context/context";
import React, { useContext } from "react";
import { IProps } from "../ButtonProps";
import { GeneralStyledBtn } from "./styles";
import { IFontWeight } from "interfaces";

export const AtomButtonOutline = ({
  disabled,
  onClick,
  color,
  text,
  type,
  width = "144px",
  customColor = "tertiary",
  size = "small",
  styles = {},
  selected = false,
  ...props
}: IProps) => {
  const { fontFamily, palette } = useContext(ThemeContext);
  const font: string = fontFamily.main["regular" as keyof IFontWeight];

  return (
    <GeneralStyledBtn
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
    </GeneralStyledBtn>
  );
};
