import {
  Paragraph,
} from "./styles";
import { ITypographyProps } from "../TypographyProps";
import parse from "html-react-parser";
import { useMemo } from "react";

export const AtomParagraph = ({
  size,
  text,
  color,
  align = "center",
}: ITypographyProps) => {

  const currentSize = useMemo(() => {
    let newSize = "";
    switch (size) {
      case "large":
        newSize = "16px";
        break;
      case "medium":
        newSize = "14px";
        break;
      case "small":
        newSize = "10px";
        break;
      default:
        newSize = "16px";
        break;
    }
    return newSize;
  }, [size]);
  

  return (
    <>
      <Paragraph
        align={align}
        color={color ?? 'black'}
        size={currentSize}
      >
        {parse(text)}
      </Paragraph>
    </>
  );
};
