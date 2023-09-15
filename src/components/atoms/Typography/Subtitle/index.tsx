/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useMemo } from "react";
import { ITypographyProps } from "../TypographyProps";
import { Subtitle } from "./styles";
import parse from "html-react-parser";

export const AtomSubtitle = ({
  align = "center",
  size,
  text,
  color,
}: ITypographyProps) => {

  const currentSize = useMemo(() => {
    let newSize = "";
    switch (size) {
      case "large":
        newSize = "25px";
        break;
      case "medium":
        newSize = "18px";
        break;
      case "small":
        newSize = "16px";
        break;
      default:
        newSize = "25px";
        break;
    }
    return newSize;
  }, [size]);
  

  return (
    <>
      <Subtitle
        align={align}
        color={color ?? 'black'}
        size={currentSize}
      >
        {parse(text)}
      </Subtitle>
    </>
  );
};
