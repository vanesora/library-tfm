import React, { useContext } from "react";
import {
  BodyXLarge,
  BodyLarge,
  BodyMedium,
  BodySmall,
  BodyXsmall,
} from "./styles";
import { IFontWeight } from "interfaces";
import { ITypographyProps } from "../TypographyProps";
import { ThemeContext } from "context/context";
import parse from "html-react-parser";

export const AtomBody = ({
  size,
  text,
  color,
  weight = "thin",
  align = "center",
  styles = {},
  onClick,
}: ITypographyProps) => {
  const { fontFamily, palette } = useContext(ThemeContext);
  const font: string = fontFamily.main[weight as keyof IFontWeight];

  switch (size) {
    case "xlarge":
      return (
        <BodyXLarge
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </BodyXLarge>
      );
    case "large":
      return (
        <BodyLarge
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </BodyLarge>
      );
    case "medium":
      return (
        <BodyMedium
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
          onClick={onClick}
        >
          {parse(text)}
        </BodyMedium>
      );
    case "small":
      return (
        <BodySmall
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </BodySmall>
      );
    case "xsmall":
      return (
        <BodyXsmall
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </BodyXsmall>
      );
  }
};
