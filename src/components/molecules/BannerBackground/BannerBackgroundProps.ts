import { keysTheme } from "data/dataMx";
import { ButtonColor, CustomColor } from "react/atoms/Buttons/ButtonProps";
import { IAlign } from "react/components/atoms/Typography/TypographyProps";
import { CSSObject } from "styled-components";

export interface IBannerBackgroundProps {
  /** Banner Title */
  title: string;
  /** Title Text Color Banner */
  textColor: keysTheme;
  /** Text Align */
  textAlign?: IAlign;
  /** Banner Width */
  height?: string;
  /** Icon name */
  iconName?: string;
  /** Banner Description */
  description?: string;
  /** Banner Background color or Gradient */
  background?: Array<keysTheme>;
  /** Banner Image Background */
  backgroundImage?: string;
  /** Text Banner Button, if it exist button appear */
  buttonText?: string;
  /** Banner Button Background */
  buttonBackground?: ButtonColor;
  /** Banner Button Custom Background */
  buttonBackgroundCustom?: CustomColor;
  /** Banner Button Click */
  onClick?: () => void;
  /** Custom styles */
  style?: CSSObject;
}
