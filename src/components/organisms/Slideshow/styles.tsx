import styled from "styled-components";

interface IStylesProps {
  margin?: string;
  transform?: string;
  background?: string;
}

export const SlideshowContainer = styled.div`
  position: relative;
`;

export const SlidesToShowContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin: ${({ margin }: IStylesProps) => margin};
`;

export const SlideshowInner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  height: 100%;
  transform: ${({ transform }: IStylesProps) => transform};
  display: flex;
`;

export const SlideshowIndicators = styled.div<{ width: string }>`
  display: flex;
  justify-content: center;
  width: ${(props) => props.width};
  margin-top: 2%;
`;

export const Indicator = styled.div<{ activeItem: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #d0d0d0;
  background-color: ${(props) => props.activeItem};
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 45%;
  padding: 0.5%;
  cursor: pointer;
  background: ${({ background }: IStylesProps) => (background) ? background : 'rgba(243, 248, 250, 0.2)'};
  border-radius: 50%;
  display: flex;
`;
