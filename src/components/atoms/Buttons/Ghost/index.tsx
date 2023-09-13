import React, { useContext } from "react";
import { ThemeContext } from "context/context";
import { IProps } from "../ButtonProps";
import { GeneralStyledBtn } from "./styles";
import { IFontWeight } from "interfaces";

export const AtomButtonGhost = ({
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
    <GeneralStyledBtn
      disabled={disabled}
      colorPalette={palette}
      onClick={onClick}
      color={color}
      type={type}
      width={width}
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
