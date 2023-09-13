import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";
import { AtomLogo, logoSizes } from ".";
import { ILogoTheme, ILogoSize, ILogoText } from "./types";

describe("[React] AtomLogo", () => {
  test("Render logo", () => {
    const body = {
      size: "large" as ILogoSize,
      logoTheme: "monocromatic" as ILogoTheme,
      text: "sided" as ILogoText,
    };
    render(<AtomLogo {...body} />);

    const iconElement = document.querySelector("svg") as SVGSVGElement;
    expect(iconElement).not.toBeNull();
  });

  test("Render logo without text", () => {
    const body = {
      size: "large" as ILogoSize,
      logoTheme: "monocromatic" as ILogoTheme,
    };
    render(<AtomLogo {...body} />);

    const iconElement = document.querySelector("svg") as SVGSVGElement;
    expect(iconElement).not.toBeNull();
  });

  test("Render logo light centered", () => {
    const body = {
      size: "large" as ILogoSize,
      logoTheme: "light" as ILogoTheme,
      text: "centered" as ILogoText,
    };
    render(<AtomLogo {...body} />);

    const iconElement = document.querySelector("svg") as SVGSVGElement;
    expect(iconElement).not.toBeNull();
  });

  test("Render logo dark sided", () => {
    const body = {
      size: "large" as ILogoSize,
      logoTheme: "dark" as ILogoTheme,
      text: "sided" as ILogoText,
    };
    render(<AtomLogo {...body} />);

    const iconElement = document.querySelector("svg") as SVGSVGElement;
    expect(iconElement).not.toBeNull();
  });

  test("Should have the correct height", () => {
    const body = {
      size: "large" as ILogoSize,
      logoTheme: "monocromatic" as ILogoTheme,
      text: "sided" as ILogoText,
    };
    render(<AtomLogo {...body} />);

    const iconElement = document.querySelector("svg") as SVGSVGElement;
    expect(iconElement.getAttribute("height")).toBe(
      `${logoSizes[body.text][body.size].height}`
    );
  });
});
