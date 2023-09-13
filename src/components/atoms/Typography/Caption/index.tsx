/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext } from "react";
import { CaptionStyle } from "./styles";
import { ITypographyProps } from "react/atoms/Typography/TypographyProps";
import { ThemeContext } from "context/context";
import parse from "html-react-parser";

const captionTypes = {
  xlarge: {
    sizeValue: "16px",
    letterSpacing: "0.5px",
    lineHeight: "20px",
  },
  large: {
    sizeValue: "14px",
    letterSpacing: "0.5px",
    lineHeight: "18px",
  },
  medium: {
    sizeValue: "12px",
    letterSpacing: "0.5px",
    lineHeight: "15px",
  },
  small: {
    sizeValue: "10px",
    letterSpacing: "0.5px",
    lineHeight: "13px",
  },
  xsmall: {
    sizeValue: "8px",
    letterSpacing: "0.5px",
    lineHeight: "10px",
  },
};

export const AtomCaption = ({
  size,
  text,
  weight = "bold",
  color,
  align = "left",
  styles = {},
}: ITypographyProps): JSX.Element => {
  const { fontFamily } = useContext(ThemeContext);
  const { palette } = useContext(ThemeContext);
  const fontFamilyName = fontFamily.main[weight];
  return (
    <>
      <CaptionStyle
        align={align}
        color={color ? palette[color] : palette.neutral700}
        size={captionTypes[size].sizeValue}
        letterSpacing={captionTypes[size].letterSpacing}
        lineHeight={captionTypes[size].lineHeight}
        font={fontFamilyName}
        styles={styles}
        weight={fontFamily.weight[fontFamilyName].toString()}
      >
        {parse(text)}
      </CaptionStyle>
    </>
  );
};
