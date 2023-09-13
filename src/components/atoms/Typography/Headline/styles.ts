import styled, { CSSObject } from "styled-components";
import { colors, mxSetup } from "data/dataMx";

const {
  mediaQuery: { tablet, mobile },
} = mxSetup;

export interface IStylesProps {
  align: string;
  color: colors;
  font: string;
  styles?: CSSObject;
}

export const HeadlineXLarge = styled.h4`
  ${({ styles }) => styles};
  font-family: ${({ font }: IStylesProps) => font};
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: ${tablet.max} ) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const HeadlineLarge = styled.h4`
  ${({ styles }) => styles};
  font-family: ${({ font }: IStylesProps) => font};
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: ${mobile.max} ) {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }

  @media (min-width: ${tablet.min}) and (max-width: ${tablet.max} ) {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const HeadlineMedium = styled.h5`
  ${({ styles }) => styles};
  font-family: ${({ font }: IStylesProps) => font};
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: ${mobile.max} ) {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  @media (min-width: ${tablet.min}) and (max-width: ${tablet.max} ) {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const HeadlineSmall = styled.h6`
  ${({ styles }) => styles};
  font-family: ${({ font }: IStylesProps) => font};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: ${mobile.max} ) {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: ${tablet.min}) and (max-width: ${tablet.max} ) {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const HeadlineXSmall = styled.h6`
  ${({ styles }) => styles};
  font-family: ${({ font }: IStylesProps) => font};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: ${mobile.max} ) {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
  }

  @media (min-width: ${tablet.min}) and (max-width: ${tablet.max} ) {
    font-weight: 500;
    line-height: 20px;
  }
`;
