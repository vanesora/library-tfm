import { IPalette } from "interfaces/index";
import styled from "styled-components";

interface IContainerProps {
  size: string;
}

interface ITextStyleProps {
  fontSize: string;
  font: string;
  colors: IPalette;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;
  height: ${({ size }: IContainerProps) => size};
  width: ${({ size }: IContainerProps) => size};
`;

export const TimeSpan = styled.span`
color: ${({ colors }: ITextStyleProps) => colors.neutral700};
  font-family: ${({ font }: ITextStyleProps) => font};
  font-size: ${({ fontSize }: ITextStyleProps) => fontSize};
`;
