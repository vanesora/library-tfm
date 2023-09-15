import React from "react";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";
import { AtomIcon } from "./index";
describe("Icon Atom", () => {
  const icon = "diamond";
  const size = 'large';

  test("Render Icon", () => {
    render(<AtomIcon icon={icon} size={size} />);

    const iconElement = screen.getByRole("svg");
    expect(iconElement).not.toBeNull();
  });

  it("Should have the correct height", () => {
    render(<AtomIcon icon={icon} size={size} />);

    const iconElement = screen.getByRole("svg");
    expect(iconElement.getAttribute("height")).toBe(`${size}`);
  });

  it("Should have correct color if color prop is passed", () => {
    const testColor = "red";
    render(<AtomIcon icon={icon} size={size} color={testColor} />);

    const iconElement = screen.getByRole("svg");
    expect(iconElement.getAttribute("fill")).toBe('red');
  });

  it("Should have theme color neutral700 if no color prop is passed", () => {
    render(<AtomIcon icon={icon} size={size} />);

    const iconElement = screen.getByRole("svg");
    expect(iconElement.getAttribute("fill")).toBe('black');
  });
});
