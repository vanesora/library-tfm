import styled from "styled-components";
import { IPalette } from "interfaces";
interface IStylesProps {
  direction?: "column" | "row";
  groupStyle?: "normal" | "toggle";
  colorPalette?: IPalette;
}
interface IContainerStylesProps {
  selected?: boolean;
  width?: string;
}

export const StyledButtonGroup = styled.div`
  flex-direction: ${({ direction }: IStylesProps) => direction};
  width: 100%;
  height: 100%;
  justify-content: ${({ groupStyle }: IStylesProps) =>
    groupStyle === "normal" ? "space-between" : "start"};
`;

export const ContainerButton = styled.div`
  display: ${({ groupStyle }: IStylesProps) =>
    groupStyle === "normal" ? "flex" : "block"};
  justify-content: center;
    
  button.toggled-button {
    border: 2px solid transparent;
    background-color: white;
    color: black;
    margin-right: ${({ groupStyle }: IStylesProps) =>
      groupStyle === "normal" ? "none" : "16px"};
    margin-bottom: ${({ groupStyle }: IStylesProps) =>
      groupStyle === "normal" ? "none" : "16px"};
  }; 
  button.toggled-button_selected {
    border: ${({ colorPalette }: IStylesProps) =>
      "2px solid" + colorPalette?.primary};
    background-color: transparent;
    color: black;
    margin-right: ${({ groupStyle }: IStylesProps) =>
      groupStyle === "normal" ? "none" : "16px"};
    margin-bottom: ${({ groupStyle }: IStylesProps) =>
      groupStyle === "normal" ? "none" : "16px"};
  };
`;
