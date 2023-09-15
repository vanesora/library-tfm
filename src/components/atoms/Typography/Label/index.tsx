import React, { useContext, useMemo } from "react";
import {
  Label,
} from "./styles";
import { ITypographyProps } from "../TypographyProps";
import parse from "html-react-parser";

export const AtomLabel = ({
  text,
  color,
  align = "center",
}: ITypographyProps) => {

  return (
    <>
      <Label
        align={align}
        color={color ?? 'black'}
      >
        {parse(text)}
      </Label>
    </>
  );
};
