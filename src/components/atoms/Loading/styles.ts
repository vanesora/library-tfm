import styled from "styled-components";
import { colors, theme } from "data/dataMx";
import { IPalette } from "interfaces/index";

interface IStylesProps {
  color?: colors;
  size?: number;
  transparent?: boolean;
  colorPalette: IPalette;
}

export const Load = styled.div`
  position: fixed;
  z-index: 100;
  color: ${({ colorPalette }: IStylesProps) => colorPalette.neutral100};
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ transparent, colorPalette }: IStylesProps) =>
    transparent == true ? colorPalette.transparent : "rgba(20, 20, 20, 0.5)"};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
