import styled from "styled-components";
import { colors, theme } from "data/dataMx";

interface IStylesProps {
  colorBorder: colors;
  height: string;
  isBorder: boolean;
  width: string;
}

export const FilterCategory = styled.div`
  cursor: pointer;
  border-radius: 10px;
  height: ${({ height }: IStylesProps) => `calc(${height} + 4px)`};
  width: ${({ width }: IStylesProps) => `calc(${width} + 4px)`};
  border: ${({ isBorder, colorBorder }: IStylesProps) =>
    `2px solid ${isBorder ? colorBorder : theme.transparent}`};
`;
