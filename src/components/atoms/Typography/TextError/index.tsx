import {
  TextError,
} from "./styles";
import { ITypographyProps } from "../TypographyProps";
import parse from "html-react-parser";

export const AtomTextError = ({
  text,
  align = "center",
}: ITypographyProps) => {

  return (
    <>
      <TextError
        align={align}
      >
        {parse(text)}
      </TextError>
    </>
  );
};