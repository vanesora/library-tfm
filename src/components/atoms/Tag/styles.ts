import styled from "styled-components";
import { colors } from "data/dataMx";
import { IPalette } from "interfaces/index";

interface IStylesProps {
  backgroundColor?: colors;
  width?: number;
  height: number;
  colorPalette: IPalette;
}

export const TagContainer = styled.div`
  background-color: ${({ backgroundColor, colorPalette }: IStylesProps) =>
    backgroundColor || colorPalette.neutral100};
  border-radius: 64px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ backgroundColor, colorPalette }: IStylesProps) =>
      backgroundColor || colorPalette.neutral700};
  color: ${({ colorPalette }: IStylesProps) => colorPalette.neutral100};
  font-size: 16px;
  font-weight: 700;
  height: ${({ height }: IStylesProps) => height + "px"};
  letter-spacing: 0.1px;
  line-height: 16px;
  width: ${({ width }: IStylesProps) => width && width + "px"};
  padding: 5px 6px;
`;
export const IconContainer = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;
