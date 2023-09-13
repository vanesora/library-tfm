import React from "react";
import { AtomImage } from "react/atoms/Image";
import { Container, TextContainer } from "./styles";

export interface IImageWithTextProps {
  containerWidth?: string;
  containerHeight?: string;
  imgHeight?: string;
  imgWidth?: string;
  children?: any;
  isTextOver?: boolean;
  bottomMargin?: string;
  imgSrc: string;
  imgAlt: string;
}

export const MoleculeImageWithText = ({
  containerWidth = "auto",
  containerHeight = "auto",
  bottomMargin = "0px",
  isTextOver = false,
  imgHeight = "150px",
  imgWidth = "150px",
  imgSrc,
  imgAlt,
  children,
}: IImageWithTextProps) => {
  return (
    <Container height={containerHeight} width={containerWidth}>
      <AtomImage
        src={imgSrc}
        alt={imgAlt}
        imgHeight={imgHeight}
        imgWidth={imgWidth}
      />
      <TextContainer bottomMargin={bottomMargin} isTextOver={isTextOver}>
        {children}
      </TextContainer>
    </Container>
  );
};
