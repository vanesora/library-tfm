import React, { useContext } from "react";
import { ITypographyProps } from "react/atoms/Typography/TypographyProps";
import { Overline } from "./styles";
import { ThemeContext } from "context/context";
import parse from "html-react-parser";

const overlineType = {
  xlarge: {
    sizeValue: "10px",
    letterSpacing: "1.5px",
    lineHeight: "13px",
  },
  large: {
    sizeValue: "10px",
    letterSpacing: "1.5px",
    lineHeight: "13px",
  },
  medium: {
    sizeValue: "10px",
    letterSpacing: "1.5px",
    lineHeight: "13px",
  },
  small: {
    sizeValue: "10px",
    letterSpacing: "1.5px",
    lineHeight: "13px",
  },
  xsmall: {
    sizeValue: "10px",
    letterSpacing: "1.5px",
    lineHeight: "13px",
  },
};

export const AtomOverline = ({
  text,
  align = "center",
  color,
  styles = {},
  weight = "bold",
}: ITypographyProps) => {
  const { fontFamily, palette } = useContext(ThemeContext);
  return (
    <Overline
      size={overlineType.large.sizeValue}
      align={align}
      color={color ? palette[color] : palette.neutral700}
      font={fontFamily.main[weight]}
      lineHeight={overlineType.large.lineHeight}
      letterSpacing={overlineType.large.letterSpacing}
      styles={styles}
    >
      {parse(text)}
    </Overline>
  );
};
