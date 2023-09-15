import React from "react";
import "@testing-library/jest-dom";
import { AtomLabel } from "./index";
import { ITypographyProps } from "../TypographyProps";
import { render, screen } from "@testing-library/react";

describe("[React] AtomLabel", () => {
  it("Render component", () => {
    const props = {
      align: "center",
      text: "Text",
      color: "blue",
    } as const;

    render(<AtomLabel {...props} />);
    const element = screen.getByText(props.text);

    expect(element).toBeTruthy();
  });

  it("Render component with no align, color & weight provided", () => {
    const props: ITypographyProps = {
      size: "large",
      text: "Text",
    } as const;
    render(<AtomLabel {...props} />);
    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "center" });
    expect(element).toHaveStyle({ color: "black" });
  });

  it("Render component color", () => {
    const props: ITypographyProps = {
      text: "testText",
      color: "blue",
    };
    
    render(<AtomLabel {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ color: "blue" });
  });
});
