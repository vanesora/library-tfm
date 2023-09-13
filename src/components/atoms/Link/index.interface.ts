import { IPalette } from "interfaces/index";
import { CSSObject } from "styled-components";

export type ITypeIcon = "noIcon" | "Left" | "Right" | "LeftRight";
export type IColor = "primary" | "secondary" | "custom";
export type ICustomColor =
  | "tertiary"
  | "quaternary"
  | "quinary"
  | "senary"
  | "dark"
  | "light"
  | "neutral";
export type ITypeLink = "default" | "section";

export interface IPropsStyleLink {
  color: IColor;
  customColor: ICustomColor;
  disabled: boolean;
  colorPalette: IPalette;
  styles: CSSObject;
}
