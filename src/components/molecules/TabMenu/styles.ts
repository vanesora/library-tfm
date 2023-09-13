import { colors } from "data/dataMx";
import { IPalette } from "interfaces/index";
import styled from "styled-components";

interface ITabContainerStylesProps {
  tabWidth: string;
  tabHeight: string;
  borderColor: colors;
  isSelected: boolean;
  isSubMenu: boolean;
  space: string;
  colorPalette: IPalette;
}

export const TabMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TabContainer = styled.div`
  width: ${({ tabWidth }: ITabContainerStylesProps) => tabWidth};
  height: ${({ tabHeight }: ITabContainerStylesProps) => tabHeight};
  display: flex;
  border-color: ${({
    borderColor,
    isSelected,
    colorPalette,
  }: ITabContainerStylesProps) =>
    isSelected ? borderColor : colorPalette.transparent};
  border-bottom-style: solid;
  border-bottom-width: ${({ isSubMenu }: ITabContainerStylesProps) =>
    isSubMenu ? "4px" : "2px"};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: ${({ space }: ITabContainerStylesProps) => space};
`;

export const TabMenuParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
