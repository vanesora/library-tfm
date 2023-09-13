import styled from "styled-components";
import { colors } from "data/dataMx";

interface IStyleProps {
  color: colors;
  height: string;
}

export const StyledHr = styled.hr<IStyleProps>`
  border: ${({ height }: IStyleProps) => `${height}`} solid ${({
  color,
}: IStyleProps) => color};
`;
