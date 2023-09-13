import { IPalette } from "interfaces/index";
import styled, { CSSObject } from "styled-components";

interface IStylesProps {
  styles?: CSSObject;
}

interface IStyledHeaderProps {
  colorPalette: IPalette;
}

export const StyledAccordion = styled.div`
  width: 100%;
  ${({ styles }: IStylesProps) => styles};
  display: flex;
  flex-direction: column;
`;

export const StyledPanel = styled.div`
  margin-bottom: 16px;
  
  ${({ styles }: IStylesProps) => styles};
  
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);
  
  :last-child{
    margin-bottom: 0;
  }
`;

export const StyledHeader = styled.div<IStyledHeaderProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  background-color: ${({ colorPalette }) => colorPalette.neutral100};
  padding: 16px;
  min-height: 64px;
  border: 0;
  border-bottom-width: 1px;
  border-color: ${({ colorPalette }) => colorPalette.neutral300};
  border-style: solid;
`;

export const StyledHeaderText = styled.div`
  flex: 1;
`;

export const StyledContainer = styled.div`
  ${({ styles }: IStylesProps) => styles};
  padding: 16px 16px 16px 16px;
`;
