import React, { useContext, useMemo } from "react";
import { Title } from "./styles";
import { ITypographyProps } from "../TypographyProps";


export const AtomTitle = ({
  size,
  text,
  color,
  align = "left",
}: ITypographyProps): JSX.Element => {

  const currentSize = useMemo(() => {
    let newSize = "";
    switch (size) {
      case "large":
        newSize = "60px";
        break;
      case "medium":
        newSize = "32px";
        break;
      case "small":
        newSize = "20px";
        break;
      default:
        newSize = "60px";
        break;
    }
    return newSize;
  }, [size]);

  return (
    <>
      <Title
        align={align}
        color={color ?? 'black'}
        size={currentSize}
      >
        {text}
      </Title>
    </>
  );
};
