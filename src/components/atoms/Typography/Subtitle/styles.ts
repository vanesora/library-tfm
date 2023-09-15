import styled from "styled-components";

export interface IStylesProps {
  align: string;
  color: string;
  size: string
}

export const Subtitle = styled.h2<IStylesProps>`
  font-size: ${({ size }: IStylesProps) => size};
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: 700px ) {
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
  }

  @media (max-width: 400px  ) {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
  }
`;
