import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";
import { AtomIcon } from "./index";
import { theme } from "data/dataMx";

describe("Icon Atom", () => {
  const icon = "diamond";
  const size = 15;

  test("Render Icon", () => {
    render(<AtomIcon icon={icon} size={size} />);

    const iconElement = document.querySelector("svg") as SVGSVGElement;
    expect(iconElement).not.toBeNull();
  });

  it("Should have the correct height", () => {
    render(<AtomIcon icon={icon} size={size} />);

    const iconElement = document.querySelector("svg") as SVGSVGElement;
    expect(iconElement.getAttribute("height")).toBe(`${size}`);
  });

  it("Should have correct color if color prop is passed", () => {
    const testColor = "secondary500";
    render(<AtomIcon icon={icon} size={size} color={testColor} />);

    const iconElement = document.querySelector("svg") as SVGSVGElement;
    expect(iconElement.getAttribute("fill")).toBe(theme[testColor]);
  });

  it("Should have theme color neutral700 if no color prop is passed", () => {
    render(<AtomIcon icon={icon} size={size} />);

    const iconElement = document.querySelector("svg") as SVGSVGElement;
    expect(iconElement.getAttribute("fill")).toBe(theme?.neutral700);
  });
});
