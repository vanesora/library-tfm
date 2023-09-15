import React from "react";
import "@testing-library/jest-dom";
import { AtomParagraph } from "./index";
import { ITypographyProps } from "../TypographyProps";
import { render, screen } from "@testing-library/react";

describe("[React] AtomBody", () => {
  it("Render component", () => {
    const props: ITypographyProps = {
      size: "large",
      text: "otrotexto",
      color: "black",
      align: "center",
    } as const;
    render(<AtomParagraph {...props} />);
    screen.getByText(props.text);
  });


  it("Render component size medium", () => {
    const props = {
      size: "medium",
      text: "testText",
      color: "black",
      align: "center",
      styles: {},
    } as const;
    render(<AtomParagraph {...props} />);
    const element = screen.getByText(props.text);
    expect(element).toHaveStyle({ "font-size": "14px" });
  });
  it("Render component size small", () => {
    const props = {
      size: "small",
      text: "testText",
      color: "black",
      align: "center",
      styles: {},
    } as const;
    render(<AtomParagraph {...props} />);
    const element = screen.getByText(props.text);
    expect(element).toHaveStyle({ "font-size": "12px" });
  });
  it("Render component color", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
      color: "blue",
    };
    render(<AtomParagraph {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ color: 'blue' });
  });


  it("Render component align left", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
      align: "left",
    };
    render(<AtomParagraph {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "left" });
  });

  it("Render component align center", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
      align: "center",
    };
    render(<AtomParagraph {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "center" });
  });

  it("Render component align right", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
      align: "right",
    };
    render(<AtomParagraph {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "right" });
  });
});
