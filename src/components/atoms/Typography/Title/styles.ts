import styled from "styled-components";

interface IStylesProps {
  align: string;
  color: string;
  size: string
}

export const Title = styled.h1<IStylesProps>`
  font-size: ${({ size }: IStylesProps) => size};
  font-style: normal;
  font-weight: 700;
  text-align: ${({ align }: IStylesProps) => align};
  color: ${({ color }: IStylesProps) => color};
  white-space: break-spaces;

  @media (max-width: 700px ) {
    font-weight: 300;
    font-size: 40px;
    line-height: 32px;
  }

  @media (max-width: 400px  ) {
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
  }
`;
