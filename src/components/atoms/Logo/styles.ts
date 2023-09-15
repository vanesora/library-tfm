import styled from "styled-components";

interface StyledProps {
  imgHeight: string;
}

export const Img = styled.img<StyledProps>`
  height: ${({ imgHeight }: StyledProps) => imgHeight};
`;
