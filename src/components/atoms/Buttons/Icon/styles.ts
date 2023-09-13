import styled, { CSSObject } from "styled-components";
import {
  ButtonColor,
  CustomColor,
  ButtonSize,
  ButtonHeight,
  ButtoniconTypeDesign,
} from "../ButtonProps";
import {
  getColorFromButtonIcon,
  getOnColorFromButtonIcon,
  getOnPrincipalColorFromTheme,
  getPrincipalColorFromTheme,
} from "../ButtonHelpers";
import { IPalette } from "interfaces/index";

interface IStylesProps {
  color: ButtonColor;
  width?: string;
  customColor: CustomColor;
  typeButtonIcon: ButtoniconTypeDesign;
  font: string;
  size: ButtonSize;
  styles?: CSSObject;
  shape: "square" | "default" | "circle";
  haveText: boolean;
  colorPalette: IPalette;
}
interface IStylesIconProps {
  haveText: boolean;
  marginLeft?: string;
  marginRight?: string;
}

export const GeneralStyledBtn = styled.button`
  cursor: pointer;
  position:relative ;
  align-items: center;
  background-color: ${({
    color,
    customColor,
    typeButtonIcon,
    colorPalette,
  }: IStylesProps) =>
    typeButtonIcon != "default"
      ? colorPalette.transparent
      : color === "custom"
      ? colorPalette[getPrincipalColorFromTheme(customColor)]
      : color === "primary"
      ? colorPalette.primary
      : colorPalette.secondary};
  border-radius: ${({ shape }: IStylesProps) =>
    shape === "default" ? "4px" : shape === "circle" ? "90px" : "0"};
  border: ${({
    color,
    customColor,
    typeButtonIcon,
    colorPalette,
  }: IStylesProps) =>
    typeButtonIcon == "ghost"
      ? "none"
      : "2px solid " +
        (color === "custom"
          ? colorPalette[getPrincipalColorFromTheme(customColor)]
          : color === "primary"
          ? colorPalette.primary
          : colorPalette.secondary)};
  display: flex;
  font-size: ${({ size }: IStylesProps) =>
    size === "small" ? "12px" : "16px"};
  font-weight: 700;
  font-family: ${({ font }: IStylesProps) => font};
  height: ${({ size, haveText, shape, width }: IStylesProps) =>
    ButtonHeight[size]};
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 16px;
  width: ${({ haveText, shape, size, width }: IStylesProps) =>
    width ||
    (haveText
      ? "fit-content"
      : shape === "circle" && size === "small"
      ? "48px"
      : "64px")};
  padding: ${({ haveText }: IStylesProps) => (haveText ? "8px 24px" : "0")};
  color: ${({ color, customColor, typeButtonIcon }: IStylesProps) =>
    getColorFromButtonIcon(color, customColor, typeButtonIcon)};
  ${({ styles }) => styles}

   &:hover {
    background-color: ${({
      color,
      customColor,
      typeButtonIcon,
      colorPalette,
    }: IStylesProps) =>
      typeButtonIcon != "default"
        ? colorPalette.transparent
        : color === "custom"
        ? getOnPrincipalColorFromTheme(customColor)
        : color === "primary"
        ? colorPalette.primary300
        : colorPalette.secondary300};
    border-color: ${({
      color,
      customColor,
      typeButtonIcon,
      colorPalette,
    }: IStylesProps) =>
      typeButtonIcon == "ghost"
        ? colorPalette.transparent
        : color === "custom"
        ? getOnPrincipalColorFromTheme(customColor)
        : color === "primary"
        ? colorPalette.primary300
        : colorPalette.secondary300};
    color: ${({ color, customColor, typeButtonIcon }: IStylesProps) =>
      getOnColorFromButtonIcon(color, customColor, typeButtonIcon)};
    svg{
      fill: ${({ color, customColor, typeButtonIcon }: IStylesProps) =>
        getOnColorFromButtonIcon(color, customColor, typeButtonIcon)};
    }
  }

  &:focus-visible {
    border: ${({ colorPalette }: IStylesProps) =>
      `4px solid ${colorPalette.tertiary100}`};
    color: ${({ color, customColor, typeButtonIcon }: IStylesProps) =>
      getOnColorFromButtonIcon(color, customColor, typeButtonIcon)};
    svg{
      fill: ${({ color, customColor, typeButtonIcon }: IStylesProps) =>
        getOnColorFromButtonIcon(color, customColor, typeButtonIcon)};
    }
    outline: none;
  }

  &:disabled {
    background-color: ${({ colorPalette }: IStylesProps) =>
      colorPalette.neutral200};
    border-radius: ${({ shape }: IStylesProps) =>
      shape === "default" ? "4px" : shape === "circle" ? "90px" : "0"};
    border:${({ colorPalette }: IStylesProps) =>
      `1px solid ${colorPalette.neutral400}`};
    color: ${({ colorPalette }: IStylesProps) => colorPalette.neutral500};
    svg{
      fill: ${({ colorPalette }: IStylesProps) => colorPalette.neutral500};
    }
  }
`;

export const IconContainer = styled.div`
  ${({ haveText, marginLeft, marginRight }: IStylesIconProps) =>
    haveText
      ? `
      margin-left: ${marginLeft || "5px"};
      margin-right: ${marginRight || "5px"};
    `
      : `
     position: absolute; 
     left: 0; 
     right: 0; 
     margin-left: auto; 
     margin-right: auto; 
     align-items: center;
  `}
`;
