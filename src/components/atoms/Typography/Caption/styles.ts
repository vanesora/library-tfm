import styled, { CSSObject } from "styled-components";
import { colors } from "data/dataMx";

interface IStylesProps {
  align: string;
  color: colors;
  font?: string;
  letterSpacing: string;
  lineHeight: string;
  size: string;
  styles?: CSSObject;
  underline?: boolean;
  weight?: string;
}

export const CaptionStyle = styled.label`
  ${({ styles }) => styles}
  color: ${({ color }: IStylesProps) => color};
  display: block;
  font-weight: ${({ weight }: IStylesProps) => weight};;
  font-family: ${({ font }: IStylesProps) => font};
  font-size: ${({ size }: IStylesProps) => size};
  letter-spacing: ${({ letterSpacing }: IStylesProps) => letterSpacing};
  line-height: ${({ lineHeight }: IStylesProps) => lineHeight};
  text-align: ${({ align }: IStylesProps) => align};
  white-space: break-spaces;
`;
