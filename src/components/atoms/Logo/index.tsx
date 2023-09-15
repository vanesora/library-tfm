import React, { useMemo } from "react";
import logo from "../../../assets/images/logo.png";
import logoText from "../../../assets/images/logoTexto.png";
import { Img } from "./styles";
export type ILogoSize = "small" | "medium" | "large";

export interface ILogoProps {
  /** Logo Size */
  size: ILogoSize;
  /** Logo Type */
  type: "line" | "complete";
  /** Logo Action Click */
  onClick?: ()=>{};
}

export const AtomLogo = ({ size = "small", type = "complete", onClick }: ILogoProps) => {

  const currentSize = useMemo(() => {
    let newSize = "";
    switch (size) {
      case "large":
        newSize = "200px";
        break;
      case "medium":
        newSize = "120px";
        break;
      case "small":
        newSize = "40px";
        break;
      default:
        newSize = "40px";
        break;
    }
    return newSize;
  }, [size]);

  const selectType = () => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "line":
        return (
          <Img
            src={logoText}
            alt="logo"
            imgHeight={currentSize}
            onClick={onClick}
          />
        );
      case "complete":
        return (
          <Img
            src={logo}
            alt="logo"
            imgHeight={currentSize}
            onClick={onClick}
          />
        );
     
    }
  };

  return <>{selectType()}</>;
};
