import styled from "styled-components";
import {
  ButtonSize,
  ButtonHeight,
} from "../ButtonProps";

interface IStylesProps {
  width: string;
  size: ButtonSize;
  selected: boolean;
}

export const GeneralStyledButton = styled.button<IStylesProps>`
  cursor: pointer;
  align-items: center;
  background-color: ${({ selected }: IStylesProps) =>
  selected? '#ffffff' : '#262626'};
  border-radius: 10px 10px 0 0;
  border: none;
  display: flex;
  height: ${({ size }: IStylesProps) => ButtonHeight[size]};
  justify-content: center;
  width: ${({ width }: IStylesProps) => width};
  padding: 0;
  color: ${({ selected }: IStylesProps) =>
  selected? '#262626' : '#ffffff'}
`;
