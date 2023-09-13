/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext } from "react";
import { ISetup, IFontWeight } from "interfaces";
import { ITypographyProps } from "../TypographyProps";
import {
  SubtitleXLarge,
  SubtitleLarge,
  SubtitleMedium,
  SubtitleSmall,
  SubtitleXSmall,
} from "./styles";
import { ThemeContext } from "context/context";
import parse from "html-react-parser";

export const AtomSubtitle = ({
  align = "center",
  size,
  text,
  color,
  weight = "thin",
  styles = {},
}: ITypographyProps): JSX.Element => {
  const { fontFamily } = useContext(ThemeContext);
  const { palette } = useContext(ThemeContext);
  const font: string = fontFamily.main[weight as keyof IFontWeight];

  switch (size) {
    case "xlarge":
      return (
        <SubtitleXLarge
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </SubtitleXLarge>
      );
    case "large":
      return (
        <SubtitleLarge
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </SubtitleLarge>
      );
    case "medium":
      return (
        <SubtitleMedium
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </SubtitleMedium>
      );
    case "small":
      return (
        <SubtitleSmall
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </SubtitleSmall>
      );
    case "xsmall":
      return (
        <SubtitleXSmall
          color={color ? palette[color] : palette.neutral700}
          font={font}
          align={align}
          styles={styles}
        >
          {parse(text)}
        </SubtitleXSmall>
      );
  }
};
