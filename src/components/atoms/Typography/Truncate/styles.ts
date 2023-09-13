import styled, { CSSObject } from "styled-components";
import { colors } from "data/dataMx";

interface IStylesProps {
  align: string;
  color: colors;
  font: string;
  size: string;
  lineClamp: number;
  styles?: CSSObject;
}

export const Truncate = styled.p`
  ${({ styles }) => styles};
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  font-family: ${({ font }: IStylesProps) => font};
  font-size: ${({ size }: IStylesProps) => size};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ lineClamp }: IStylesProps) => lineClamp};
  overflow: hidden;
  white-space: break-spaces;
`;
