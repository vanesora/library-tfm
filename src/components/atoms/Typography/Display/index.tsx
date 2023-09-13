import React, { useContext } from "react";
import {
  DisplayXlarge,
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  DisplayXSmall,
} from "./styles";
import { IFontWeight, ISetup } from "interfaces";
import { ITypographyProps } from "../TypographyProps";
import { ThemeContext } from "context/context";
import parse from "html-react-parser";

export const AtomDisplay = ({
  size,
  text,
  weight = "thin",
  align = "center",
  color,
  styles = {},
}: ITypographyProps) => {
  const { fontFamily, palette } = useContext(ThemeContext);
  const font: string = fontFamily.main[weight as keyof IFontWeight];

  switch (size) {
    case "xlarge":
      return (
        <DisplayXlarge
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </DisplayXlarge>
      );
    case "large":
      return (
        <DisplayLarge
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </DisplayLarge>
      );
    case "medium":
      return (
        <DisplayMedium
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </DisplayMedium>
      );
    case "small":
      return (
        <DisplaySmall
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </DisplaySmall>
      );
    case "xsmall":
      return (
        <DisplayXSmall
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </DisplayXSmall>
      );
  }
};
