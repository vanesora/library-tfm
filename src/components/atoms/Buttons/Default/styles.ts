import styled from "styled-components";
import { ButtonColor, ButtonSize, ButtonHeight } from "../ButtonProps";

interface IStylesProps {
  color: ButtonColor;
  width: string;
  customColor: string;
  size: ButtonSize;
}

export const GeneralStyledButton = styled.button<IStylesProps>`
  cursor: pointer;
  align-items: center;
  background-color: ${({ color, customColor }: IStylesProps) =>
    color === "custom"
      ? customColor
      : color === "primary"
      ? '#090088'
      : 'white'};
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ color }: IStylesProps) =>
  color === "custom"
    ? 'white'
    : color === "primary"
    ? 'white'
    : '#090088'}; 
  display: flex;
  font-weight: 700;
  height: ${({ size }: IStylesProps) => ButtonHeight[size]};
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 16px;
  width: ${({ width }: IStylesProps) => width};
  padding: 8px 24px;
  color: ${({ color }: IStylesProps) =>
  color === "custom"
    ? 'white'
    : color === "primary"
    ? 'white'
    : '#090088'};

  &:disabled {
    background-color: #767171;
    border-radius: 4px;
    border: 1px solid #6c6767;
    color: white;
  }
`;
