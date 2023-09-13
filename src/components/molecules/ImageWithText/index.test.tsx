import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MoleculeImageWithText } from "./index";
import "jest-styled-components";
import { AtomCaption } from "react/atoms/Typography/Caption/index";

describe("[React] MoleculeImageWithText", () => {
  it("Render Image With Text component", () => {
    const component = render(
      <MoleculeImageWithText
        imgSrc="https://via.placeholder.com/150"
        imgAlt="imgAlt"
        imgHeight={"150px"}
        imgWidth={"150px"}
        containerHeight={"150px"}
        containerWidth={"150px"}
      >
        <AtomCaption
          size="xlarge"
          align="center"
          text="Some Text"
          color={"neutral700"}
          weight="bold"
        />
      </MoleculeImageWithText>
    );

    const displayedImage = document.querySelector("img") as HTMLImageElement;
    const displayedText = component.getByText("Some Text");
    expect(displayedText).toBeInTheDocument();
    expect(displayedImage.src).toBe("https://via.placeholder.com/150");
  });

  it("Render Image With Text with text over", () => {
    const component = render(
      <MoleculeImageWithText
        imgSrc="https://via.placeholder.com/150"
        imgAlt="imgAlt"
        isTextOver={true}
      >
        <AtomCaption
          size="xlarge"
          align="center"
          text="Some Text"
          color={"neutral700"}
          weight="bold"
        />
      </MoleculeImageWithText>
    );

    const textContainer = component.getByText("Some Text").closest("div");
    expect(textContainer).toHaveStyleRule("position", "absolute");
  });

  it("Render Image With Text text over and margin bottom", () => {
    const component = render(
      <MoleculeImageWithText
        imgSrc="https://via.placeholder.com/150"
        imgAlt="imgAlt"
        isTextOver={true}
        bottomMargin={"10px"}
      >
        <AtomCaption
          size="xlarge"
          align="center"
          text="Some Text"
          color={"neutral700"}
          weight="bold"
        />
      </MoleculeImageWithText>
    );

    const textContainer = component.getByText("Some Text").closest("div");
    expect(textContainer).toHaveStyleRule("bottom", "10px");
  });
});
