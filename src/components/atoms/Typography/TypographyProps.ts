
export type IAlign = "left" | "center" | "right";
export type ISize = "large" | "medium" | "small";

export interface ITypographyProps {
  /** Align text horizontally */
  align?: IAlign;
  /** Color of text */
  color?: string;
  /** Text font size */
  size?: ISize;
  /** Text to display in the component, you can insert line breaks using string with backquote by entering enter key */
  text: string;
}
