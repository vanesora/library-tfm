import React, { FunctionComponent, useContext } from "react";
import { StyledHr } from "./styles";
import { keysTheme } from "data/dataMx";
import { ThemeContext } from "context/context";

export interface IDividerProps {
  isInvisible?: boolean;
  height?: string;
  color?: keysTheme;
}

export const AtomDivider: FunctionComponent<IDividerProps> = ({
  isInvisible = false,
  height = "4px",
  color = "neutral400",
}) => {
  const { palette } = useContext(ThemeContext);
  const dividerColor = isInvisible ? "transparent" : color;

  return <StyledHr height={height} color={palette[dividerColor]} />;
};
