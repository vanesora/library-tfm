import styled from "styled-components";

export interface IStylesProps {
  align: string;
  color: string;
  size: string;
}

export const Paragraph = styled.span<IStylesProps>`
  display: block;
  font-size: ${({ size }) => size?? '16px'};
  font-style: normal;
  font-weight: 500;
  text-align: ${({ align }) => align?? 'left'};
  color: ${({ color }) => color};
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;
