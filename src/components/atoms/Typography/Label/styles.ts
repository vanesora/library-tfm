import styled from "styled-components";

export interface IStylesProps {
  align: string;
  color: string;
}

export const Label = styled.label<IStylesProps>`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  white-space: break-spaces;
`;
