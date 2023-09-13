import React, { useContext } from "react";
import { ITypographyProps } from "../TypographyProps";
import { ThemeContext } from "context/context";
import { Truncate } from "./styles";
import parse from "html-react-parser";

export interface ITruncateProps extends ITypographyProps {
  /** Limit of number of lines to truncate the text */
  numberOfLineTruncate?: number;
}

const truncateTypes = {
  xlarge: {
    sizeValue: "24px",
  },
  large: {
    sizeValue: "20px",
  },
  medium: {
    sizeValue: "16px",
  },
  small: {
    sizeValue: "14px",
  },
  xsmall: {
    sizeValue: "12px",
  },
};

export const AtomTruncate = ({
  text,
  align = "center",
  size,
  color,
  weight = "regular",
  numberOfLineTruncate = 1,
  styles = {},
}: ITruncateProps) => {
  const { fontFamily, palette } = useContext(ThemeContext);
  return (
    <Truncate
      align={align}
      font={fontFamily.main[weight]}
      size={truncateTypes[size].sizeValue}
      color={color ? palette[color] : palette.neutral700}
      lineClamp={numberOfLineTruncate}
      styles={styles}
    >
      {parse(text)}
    </Truncate>
  );
};
