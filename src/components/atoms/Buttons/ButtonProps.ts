export type ButtonColor = "primary" | "secondary" | "custom"
export type ButtonType = "button" | "submit" | "reset";
export type IconAlign = "left" | "right";
export type ButtonSize = "small" | "medium" | "large";

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Enable or disable the button */
  disabled: boolean;
  /** Click action */
  onClick?: (e?: any) => void;
  /** Type of color */
  color?: ButtonColor;
  /** Text of button */
  text: string;
  /** This property specifies the button type HTML */
  type: ButtonType;
  /** Size of component + measurement unit */
  width?: string;
  /** Custom color from color palette */
  customColor?: string;
  /** Size Button */
  size?: ButtonSize;
  /** Selected Button Menu */
  selected?: boolean;
  /** Icon in Button*/
  icon?: string;
  /** Position Icon */
  position?: IconAlign;
}

export const ButtonHeight = {
  small: "32px",
  medium: "43px",
  large: "62px",
};
