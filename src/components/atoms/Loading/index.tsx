import React, { FunctionComponent, useContext } from "react";
import { AtomImage } from "../Image";
import { Load } from "./styles";
import loader from "assets/images/loader_web.gif";
import { ThemeContext } from "context/context";

export interface ILoadingProps {
  transparent?: boolean;
  width?: string;
  height?: string;
}

export const AtomLoading: FunctionComponent<ILoadingProps> = ({
  transparent = true,
  width = "184px",
  height = "184px",
}) => {
  const { palette } = useContext(ThemeContext);

  return (
    <Load transparent={transparent} colorPalette={palette}>
      <AtomImage
        alt={"Loading"}
        imgWidth={width}
        imgHeight={height}
        src={loader}
      />
    </Load>
  );
};
