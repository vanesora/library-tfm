import styled from "styled-components";

interface IStylesProps {
  backgroundImage?: boolean;
  image?: string;
  textPosition?: string;
  backgroundColor?: string;
}

export const Banner = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: ${({ textPosition }: IStylesProps) =>
      textPosition === "right" ? "row-reverse" : "row"};
  }
`;

export const BannerImage = styled.figure`
  margin: 0;
  img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const BannerContent = styled.div`
  align-items: ${({ textPosition }: IStylesProps) =>
  textPosition === "right" ? "flex-start" : "flex-end"};
  display: flex;
  flex-direction: column;
  padding-right: ${({ textPosition }: IStylesProps) =>
  textPosition === "right" ? "15%" : "0"};
  padding-left: ${({ textPosition }: IStylesProps) =>
  textPosition === "right" ? "0" : "15%"};
  label {
    padding-top: 10px;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    text-align: ${({ textPosition }: IStylesProps) =>
      textPosition === "right" ? "left" : "right"};
  }
  @media screen and (max-width: 767px) {
    text-align: left;
    align-items: "flex-start";
    padding:0;
    label {
      text-align: left;
    }
  }
`;

export const BannerContentTitle = styled.div`
  float: left;
  max-width: 300px;
  align-items: ${({ textPosition }: IStylesProps) =>
  textPosition === "right" ? "flex-start" : "flex-end"};
  display: flex;
  flex-direction: column;
  h4 {
    margin: 5px 0;
  }
  @media screen and (min-width: 768px) {
    float: ${({ textPosition }: IStylesProps) =>
      textPosition === "right" ? "left" : "right"};
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    width: 100%;
  }
`;


export const BannerContentDivider = styled.div`
  max-width: 100px;
  width: 100px;

  @media screen and (max-width: 767px) {
    max-width: 100%;
    width: 100%;
  }
`;
