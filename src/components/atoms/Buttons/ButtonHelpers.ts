import { theme } from "data/dataMx";
import { ButtonColor, ButtoniconTypeDesign, CustomColor } from "./ButtonProps";

export const getColorFromTheme = (customColor: CustomColor) => {
  switch (customColor) {
    case "light":
      return "neutral700";
    default:
      return "neutral100";
  }
};

export const getOnPrincipalColorFromTheme = (customColor: CustomColor) => {
  switch (customColor) {
    case "light":
      return theme.neutral200;
    case "dark":
    case "neutral":
      return theme.neutral700;
    default:
      return theme[`${customColor}300`];
  }
};

export const getPrincipalColorFromTheme = (customColor: CustomColor) => {
  switch (customColor) {
    case "dark":
      return "neutral700";

    case "light":
      return "neutral100";
    case "neutral":
      return "neutral500";
    default:
      return customColor;
  }
};

export const getColorFromButtonIcon = (
  color: ButtonColor,
  customColor: CustomColor,
  typeButtonIcon: ButtoniconTypeDesign
) => {
  if (typeButtonIcon != "default") {
    if (color == "custom") {
      return getPrincipalColorFromTheme(customColor);
    } else {
      return color;
    }
  } else {
    return getColorFromTheme(customColor);
  }
};

export const getOnColorFromButtonIcon = (
  color: ButtonColor,
  customColor: CustomColor,
  typeButtonIcon: ButtoniconTypeDesign
) => {
  if (typeButtonIcon != "default") {
    if (color == "custom") {
      return getOnPrincipalColorFromTheme(customColor);
    } else {
      return theme[`${color}300`];
    }
  } else {
    return theme[getColorFromTheme(customColor)];
  }
};
