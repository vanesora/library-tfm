/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext } from "react";
import {
  HeadlineXLarge,
  HeadlineLarge,
  HeadlineMedium,
  HeadlineSmall,
  HeadlineXSmall,
} from "./styles";
import { ISetup, IFontWeight } from "interfaces";
import { ITypographyProps } from "../TypographyProps";
import { ThemeContext } from "context/context";
import parse from "html-react-parser";

export const AtomHeadline = ({
  align = "center",
  size,
  text,
  color,
  weight = "thin",
  styles = {},
}: ITypographyProps): JSX.Element => {
  const { palette } = useContext(ThemeContext);
  const { fontFamily } = useContext(ThemeContext);
  const font: string = fontFamily.main[weight as keyof IFontWeight];

  switch (size) {
    case "xlarge":
      return (
        <HeadlineXLarge
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </HeadlineXLarge>
      );
    case "large":
      return (
        <HeadlineLarge
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </HeadlineLarge>
      );
    case "medium":
      return (
        <HeadlineMedium
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </HeadlineMedium>
      );
    case "small":
      return (
        <HeadlineSmall
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </HeadlineSmall>
      );
    case "xsmall":
      return (
        <HeadlineXSmall
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </HeadlineXSmall>
      );
  }
};
