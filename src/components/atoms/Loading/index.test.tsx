import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { AtomLoading } from "./index";

describe("[React] AtomLoading", () => {
  it("Rendered component", () => {
    const component = render(<AtomLoading />);
    const container = component.container.querySelector(
      "div"
    ) as HTMLDivElement;
    const containerStyle = window.getComputedStyle(container);
    const backgroundColor = containerStyle.backgroundColor;
    expect(backgroundColor).toBe("transparent");
  });

  it("Rendered component with transparent style", () => {
    const component = render(<AtomLoading transparent={false} />);
    const container = component.container.querySelector(
      "div"
    ) as HTMLDivElement;
    const containerStyle = window.getComputedStyle(container);
    const backgroundColor = containerStyle.backgroundColor;
    expect(backgroundColor).toBe("rgba(20, 20, 20, 0.5)");
  });

  it("Rendered component with color and size", () => {
    const component = render(<AtomLoading width={"50px"} height={"50px"} />);
    const container = component.container.querySelector(
      "div"
    ) as HTMLDivElement;
    const containerStyle = window.getComputedStyle(container);
    const backgroundColor = containerStyle.backgroundColor;
    expect(backgroundColor).toBe("transparent");
  });
});
