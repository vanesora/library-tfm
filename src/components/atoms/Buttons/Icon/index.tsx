import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "context/context";
import { AtomIcon } from "react/atoms/Icon";
import { GeneralStyledBtn, IconContainer } from "./styles";
import {
  ButtonHeight,
  ButtoniconTypeDesign,
  IconAlign,
  IProps,
} from "../ButtonProps";
import { getColorFromButtonIcon } from "../ButtonHelpers";
import { IFontWeight } from "interfaces";

export interface IIconButtonProps extends IProps {
  /** Name icon in button */
  icon: string;
  /** Position icon in button */
  iconAlign?: IconAlign;
  /* If there is text, it is possible to add a margin to the left of the icon (default 5px) */
  iconMarginLeft?: string;
  /* If there is text, it is possible to add a margin to the right of the icon (default 5px) */
  iconMarginRight?: string;
  /** How the color looks */
  typeButtonIcon?: ButtoniconTypeDesign;
  /** Shape of button border */
  shape?: "square" | "default" | "circle";
}

export const AtomButtonIcon = ({
  disabled,
  onClick,
  color,
  text,
  type,
  width = ButtonHeight.small,
  icon,
  iconAlign = "right",
  iconMarginLeft,
  iconMarginRight,
  customColor = "tertiary",
  typeButtonIcon = "default",
  size = "small",
  styles = {},
  shape = "default",
  ...props
}: IIconButtonProps) => {
  const [haveText, setHaveText] = useState<boolean>(false);
  const { fontFamily, palette } = useContext(ThemeContext);
  const font: string = fontFamily.main["regular" as keyof IFontWeight];

  useEffect(() => {
    setHaveText(text !== "" && text != undefined);
  }, [text]);

  return (
    <GeneralStyledBtn
      colorPalette={palette}
      disabled={disabled}
      onClick={onClick}
      color={color}
      width={width}
      type={type}
      customColor={customColor}
      typeButtonIcon={typeButtonIcon}
      font={font}
      size={size}
      styles={styles}
      shape={shape}
      haveText={haveText}
      {...props}
    >
      {iconAlign === "left" && (
        <IconContainer
          haveText={haveText}
          marginLeft={iconMarginLeft}
          marginRight={iconMarginRight}
        >
          <AtomIcon
            icon={icon}
            size={size == "large" ? 24 : size == "medium" ? 18 : 15}
            color={getColorFromButtonIcon(color, customColor, typeButtonIcon)}
          />
        </IconContainer>
      )}
      {text}
      {iconAlign === "right" && (
        <IconContainer
          haveText={haveText}
          marginLeft={iconMarginLeft}
          marginRight={iconMarginRight}
        >
          <AtomIcon
            icon={icon}
            size={size == "large" ? 24 : size == "medium" ? 18 : 15}
            color={getColorFromButtonIcon(color, customColor, typeButtonIcon)}
          />
        </IconContainer>
      )}
    </GeneralStyledBtn>
  );
};
