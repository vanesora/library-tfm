
export type ITypeIcon = "noIcon" | "Left" | "Right" | "LeftRight";
export type IColor = "primary" | "secondary" | "custom";

export interface IPropsStyleLink {
  color: IColor;
  customColor?: string;
  disabled: boolean;
  typeIcon: ITypeIcon;
}
