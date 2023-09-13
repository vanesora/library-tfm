import { keysTheme, theme } from "../../../../data/dataMx";
import { ICustomColor, IPropsStyleLink } from "./index.interface";

export const convertCustomTheme = (
  customColor: ICustomColor,
  isHover: boolean
): keysTheme => {
  switch (customColor) {
    case "light":
      return isHover ? "neutral300" : "neutral200";
    case "dark":
    case "neutral":
      return isHover ? "neutral700" : "neutral600";
    default:
      return `${customColor}${isHover ? "400" : "300"}`;
  }
};

export const colorHover = () => {
  return ({ color, customColor }: IPropsStyleLink) =>
    color === "custom"
      ? theme[convertCustomTheme(customColor, true)]
      : theme[`${color}300`];
};
