import styled, { CSSObject } from "styled-components";
import { colors } from "data/dataMx";

export interface IStylesProps {
  align: string;
  color: colors;
  font: string;
  size: string;
  letterSpacing: string;
  lineHeight: string;
  styles?: CSSObject;
}

export const Overline = styled.p`
  ${({ styles }) => styles};
  color: ${(props) => props.color};
  font-weight: 600;
  font-style: normal;
  font-family: ${({ font }: IStylesProps) => font};
  font-size: ${({ size }: IStylesProps) => size};
  letter-spacing: ${({ letterSpacing }: IStylesProps) => letterSpacing};
  line-height: ${({ lineHeight }: IStylesProps) => lineHeight};
  text-align: ${({ align }: IStylesProps) => align};
  text-transform: uppercase;
  white-space: break-spaces;
`;
