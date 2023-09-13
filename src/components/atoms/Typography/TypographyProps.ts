import { keysTheme } from "data/dataMx";
import { CSSObject } from "styled-components";

export type IAlign = "left" | "center" | "right";
export type ISize = "xlarge" | "large" | "medium" | "small" | "xsmall";
export type ITyphography = "Body" | "Display" | "Label" | "Title";
export type IWeightFont =
  | "thin"
  | "extralight"
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export interface ITypographyProps {
  /** Align text horizontally */
  align?: IAlign;
  /** Color of text */
  color?: keysTheme;
  /** Text font size */
  size: ISize;
  /** CSS properties for HTML, these styles cannot change the styles of the already defined component */
  styles?: CSSObject;
  /** Text to display in the component, you can insert line breaks using string with backquote by entering enter key */
  text: string;
  /** Text weight */
  weight?: IWeightFont;
  /** Click action */
  onClick?: (e?: any) => void;
}
