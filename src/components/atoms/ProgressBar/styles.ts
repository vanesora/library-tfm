import styled from "styled-components";
import { colors } from "data/dataMx";

interface IStylesPropsProgressBar {
  background: colors;
  height: string;
}

export const ContentProgress = styled.div`
  background: ${({ background }: IStylesPropsProgressBar) => background};
  border-radius: 10px;
  height: ${({ height }: IStylesPropsProgressBar) => height};
  margin-bottom: 16px;
  margin-top: 6px;
  width: 100%;
  position: relative;
`;

export const Progress = styled.span``;
