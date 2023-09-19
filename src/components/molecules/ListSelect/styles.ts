import styled from "styled-components";
interface IStylesProps {
  direction?: "column" | "row";
}

export const StyledButtonGroup = styled.div<IStylesProps>`
  flex-direction: ${({ direction }: IStylesProps) => direction};
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const ContainerButton = styled.div<IStylesProps>`
  display: flex};
  justify-content: center;
    
  button.toggled-button {
    border: 2px solid transparent;
    background-color: white;
    color: black;;
  }; 
`;
