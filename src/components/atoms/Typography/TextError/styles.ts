import styled from "styled-components";

export interface IStylesProps {
  align: string;
}

export const TextError = styled.p<IStylesProps>`
  display: block;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  text-align: ${({ align }) => align?? 'left'};
  color: #ff7300;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;
