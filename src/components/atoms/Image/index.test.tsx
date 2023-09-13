import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, fireEvent } from "@testing-library/react";
import { AtomImage } from "./index";

describe("ImageAtom", () => {
  it("Render image if send src", () => {
    render(
      <AtomImage
        src={"https://via.placeholder.com/350"}
        alt={"image"}
        imgWidth={"56px"}
        imgHeight={"56px"}
      />
    );

    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toBe("https://via.placeholder.com/350");
  });

  it("Render image if do not send src", () => {
    render(
      <AtomImage src={""} alt={"image"} imgWidth={"56px"} imgHeight={"56px"} />
    );

    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("/default.png");
  });

  it("Render image onError", () => {
    render(
      <AtomImage src="" alt={"image"} imgWidth={"56px"} imgHeight={"56px"} />
    );

    const displayedImage = document.querySelector("img") as HTMLImageElement;

    fireEvent.error(displayedImage);

    expect(displayedImage.src).toContain("/default.png");
  });

  it("Render image with width", () => {
    const component = render(
      <AtomImage src={""} alt={"image"} imgWidth={"56px"} imgHeight={"56px"} />
    );

    const displayedImage = component.getByAltText("image");
    expect(displayedImage).toHaveStyleRule("width", "56px");
  });

  it("Render image with height", () => {
    const component = render(
      <AtomImage src={""} alt={"image"} imgWidth={"56px"} imgHeight={"56px"} />
    );

    const displayedImage = component.getByAltText("image");
    expect(displayedImage).toHaveStyleRule("width", "56px");
  });

  it("Render image with alt", () => {
    render(
      <AtomImage
        src={""}
        alt={"test-alt"}
        imgWidth={"56px"}
        imgHeight={"56px"}
      />
    );

    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.alt).toBe("test-alt");
  });

  it("Render image styles", () => {
    render(
      <AtomImage
        src={""}
        alt={"test-alt"}
        imgWidth={"56px"}
        imgHeight={"56px"}
        styles={{ marginLeft: "19px" }}
      />
    );

    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.alt).toBe("test-alt");
  });
});
