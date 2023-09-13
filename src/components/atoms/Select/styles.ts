import styled, { CSSObject } from "styled-components";
import { IPalette } from "interfaces/index";

interface IStylesProps {
  font?: string;
  disabled?: boolean;
  width?: string;
  height?: string;
  placeholderColor?: boolean;
  hasError?: boolean;
  readOnly?: boolean;
  styles?: CSSObject;
  colorPalette?: IPalette;
}

interface IStylesPropsOptions {
  selectHeight: string;
}

export const Value = styled.div`
  ${({ styles }) => styles};
  font-family: ${({ font }: IStylesProps) => font};
  color: ${({ disabled, placeholderColor, colorPalette }: IStylesProps) =>
    disabled || placeholderColor
      ? colorPalette?.neutral500
      : colorPalette?.neutral700};
`;

export const Options = styled.div`
  margin-top: ${({ selectHeight }: IStylesPropsOptions) => selectHeight};
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(116, 134, 141, 0.2);
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  padding: 16px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 8px;
  padding-left: 40px;
  label {
    cursor: pointer;
    transition: all ease .2s;
  }
  &:hover {
    background-color: ${({ colorPalette }: IStylesProps) =>
      colorPalette?.neutral200};
  }
`;

export const SelectContainer = styled.div`
  border-radius: 8px;
  cursor: ${({ disabled }: IStylesProps) => disabled && "default"};
  background-color: ${({ disabled, readOnly, colorPalette }: IStylesProps) =>
    disabled
      ? colorPalette?.neutral300
      : readOnly
      ? colorPalette?.transparent
      : colorPalette?.neutral100};
  //box
  display: flex;
  align-items: center; 
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
  padding: 0 16px;
`;

export const Select = styled.div`
  ${({ styles }) => styles};
  cursor: ${({ disabled }: IStylesProps) => !disabled && "pointer"};
  position: relative;
  width: ${({ width }: IStylesProps) => width};
  height: ${({ height }: IStylesProps) => height};
  border: 1px solid;
  border-color:${({
    disabled,
    hasError,
    readOnly,
    placeholderColor,
    colorPalette,
  }: IStylesProps) =>
    disabled
      ? colorPalette?.neutral300
      : hasError
      ? colorPalette?.secondary400
      : readOnly
      ? colorPalette?.transparent
      : placeholderColor
      ? colorPalette?.neutral500
      : colorPalette?.neutral400};
  border-radius: 8px;
`;

export const AllScreen = styled.div`
  position: fixed;
  z-index: 98;
  color: ${({ colorPalette }: IStylesProps) => colorPalette?.neutral100};
  background-color: ${({ colorPalette }: IStylesProps) =>
    colorPalette?.transparent};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
