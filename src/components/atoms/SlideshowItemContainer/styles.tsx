import styled from "styled-components";
import { colors } from "data/dataMx";

interface IStylesProps {
  itemWidth: string;
  borderRadius?: string;
  margin?: string;
  bgColor?: colors;
}

export const SlideshowItemWrapper = styled.div`
    min-width: ${({ itemWidth }: IStylesProps) => itemWidth};
    display: inline-flex;
    white-space: normal;
    border-radius: ${({ borderRadius }: IStylesProps) => borderRadius};;
    margin: ${({ margin }: IStylesProps) => margin};
    touch-action: pan-y;
    background-color: ${({ bgColor }: IStylesProps) => bgColor};
`;
