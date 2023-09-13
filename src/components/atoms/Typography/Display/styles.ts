import { colors } from "data/dataMx";
import styled, { CSSObject } from "styled-components";

export interface IStylesProps {
  align: string;
  color: colors;
  font: string;
  styles?: CSSObject;
}

export const DisplayXlarge = styled.h1`
  ${({ styles }) => styles}
  font-family: ${({ font }: IStylesProps) => font};
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: 0.005em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const DisplayLarge = styled.h1`
  ${({ styles }) => styles}
  font-family: ${({ font }: IStylesProps) => font};
  font-size: 46px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0.005em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const DisplayMedium = styled.h2`
  ${({ styles }) => styles}
  font-family: ${({ font }: IStylesProps) => font};
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0.005em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const DisplaySmall = styled.h3`
  ${({ styles }) => styles}
  font-family: ${({ font }: IStylesProps) => font};
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 0.005em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;

export const DisplayXSmall = styled.h4`
  ${({ styles }) => styles}
  font-family: ${({ font }: IStylesProps) => font};
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0.005em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;
`;
