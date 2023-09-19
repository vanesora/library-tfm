import styled from "styled-components";
import {
  ButtonColor,
  ButtonSize,
  ButtonHeight,
} from "../ButtonProps";

interface IStylesProps {
  color: ButtonColor;
  customColor: string;
  size: ButtonSize;
}
export const GeneralStyledBtn = styled.button<IStylesProps>`
  cursor: pointer;
  position:relative ;
  align-items: center;
  background-color: ${({ color, customColor }: IStylesProps) =>
    color === "custom"
      ? customColor
      : color === "primary"
      ? '#090088'
      : 'white'};
  border-radius: 50%;
  border: 1px solid;
  border-color: ${({ color }: IStylesProps) =>
  color === "custom"
    ? 'white'
    : color === "primary"
    ? 'white'
    : '#090088'}; 
  display: flex;
  font-size: ${({ size }: IStylesProps) =>
    size === "small" ? "12px" : "16px"};
  font-weight: 700;
  height: ${({ size }: IStylesProps) =>
    ButtonHeight[size]};
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 16px;
  width: ${({ size }: IStylesProps) =>
  ButtonHeight[size]};
  padding: 0;
  color: ${({ color }: IStylesProps) =>
  color === "custom"
    ? 'white'
    : color === "primary"
    ? 'white'
    : '#090088'};



  &:disabled {
    background-color: #767171;
    border: 1px solid #6c6767;
    color: white;
  }
`;

export const IconContainer = styled.div `
     position: absolute; 
     left: 0; 
     right: 0; 
     margin-left: auto; 
     margin-right: auto; 
     align-items: center;
`;
