import styled from "styled-components";

interface IStylesProps {
  width?: string;
}

export const InputDateContainer = styled.div`
  display: flex;
  margin-top: 5px;
  width: ${({ width }: IStylesProps) => width || "100%"};
`;

export const SelectorContainer = styled.div`
  width: 100%;
  padding-right: 15px;
`;
