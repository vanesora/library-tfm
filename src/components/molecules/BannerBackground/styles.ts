import styled, { CSSObject } from "styled-components";

interface IStylesProps {
  background?: string;
  flexAlign?: string;
  height?: string;
  style?: CSSObject;
}

export const Banner = styled.section`
  border-radius: 8px;
  ${({ background }: IStylesProps) => background};
  padding: 16px;
  position: relative;
  overflow: hidden;
  height: ${({ height }: IStylesProps) => height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ style }: IStylesProps) => style};
`;

export const BannerImage = styled.figure`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const BannerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content:  ${({ flexAlign }: IStylesProps) => flexAlign};
  margin-bottom: 8px;
  position: relative;

  h5 {
    margin: 0;
  }
  svg {
    margin-right: 4px;
  }
`;

export const BannerDescription = styled.div`
  position: relative;
`;

export const BannerButton = styled.div`
  display: flex;
  justify-content: ${({ flexAlign }: IStylesProps) => flexAlign};
  margin: 16px 0 0;
  position: relative;

  button {
    height: 32px;
    width: auto;
    min-width: 144px;
  }
`;
