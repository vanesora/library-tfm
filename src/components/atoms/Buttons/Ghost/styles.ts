import styled, { CSSObject } from "styled-components";
import {
  ButtonColor,
  CustomColor,
  ButtonSize,
  ButtonHeight,
} from "../ButtonProps";
import {
  getOnPrincipalColorFromTheme,
  getPrincipalColorFromTheme,
} from "../ButtonHelpers";
import { IPalette } from "interfaces/index";

interface IStylesProps {
  color: ButtonColor;
  width?: string;
  customColor: CustomColor;
  font: string;
  size: ButtonSize;
  colorPalette: IPalette;
  styles?: CSSObject;
}

export const GeneralStyledBtn = styled.button`
  ${({ styles }) => styles}
  cursor: pointer;
  align-items: center;
  background-color: ${({ colorPalette }: IStylesProps) =>
    colorPalette.transparent};
  border-radius: 4px;
  border: none;
  color: ${({ color, customColor, colorPalette }: IStylesProps) =>
    color === "custom"
      ? colorPalette[getPrincipalColorFromTheme(customColor)]
      : colorPalette[color]};
  display: flex;
  font-size: ${({ size }: IStylesProps) =>
    size === "small" ? "12px" : "16px"};
  font-weight: 700;
  font-family: ${({ font }: IStylesProps) => font};
  height: ${({ size }: IStylesProps) => ButtonHeight[size]};
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 16px;
  width: ${({ width }: IStylesProps) => width};
  padding: 8px 24px;

  &:hover {
    color: ${({ color, customColor, colorPalette }: IStylesProps) =>
      color === "custom"
        ? getOnPrincipalColorFromTheme(customColor)
        : color === "primary"
        ? colorPalette.primary300
        : colorPalette.secondary300};
  }

  &:focus-visible {
    border: ${({ colorPalette }: IStylesProps) =>
      `4px solid ${colorPalette.tertiary100}`};
    color: ${({ color, customColor, colorPalette }: IStylesProps) =>
      color === "custom"
        ? getOnPrincipalColorFromTheme(customColor)
        : color === "primary"
        ? colorPalette.primary300
        : colorPalette.secondary300};
    outline: none;
  }

  &:disabled {
    background-color: ${({ colorPalette }: IStylesProps) =>
      colorPalette.neutral200};
    border-radius: 4px;
    border:${({ colorPalette }: IStylesProps) =>
      `1px solid ${colorPalette.neutral400}`};
    color: ${({ colorPalette }: IStylesProps) => colorPalette.neutral500};
  }
`;
