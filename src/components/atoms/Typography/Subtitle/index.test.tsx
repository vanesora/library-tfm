/* eslint-disable no-debugger */
import React from "react";
import "@testing-library/jest-dom";
import { AtomSubtitle } from "./index";
import { ITypographyProps } from "../TypographyProps";
import { render, screen } from "@testing-library/react";

describe("[React] AtomSubtitle", () => {
  it("Render component", () => {
    const props = {
      size: "large",
      align: "center",
      text: "Text",
      color: "blue",
    } as const;

    render(<AtomSubtitle {...props} />);

    expect(screen).toBeTruthy();
  });
  it("Render component size large", () => {
    const props = {
      size: "large",
      align: "center",
      text: "Text",
      styles: {},
    } as const;

    render(<AtomSubtitle {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "font-size": "25px" });
  });
  it("Render component size medium", () => {
    const props = {
      size: "medium",
      align: "center",
      text: "Text",
      color: "blue",
    } as const;

    render(<AtomSubtitle {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "font-size": "18px" });
  });
  it("Render component size small", () => {
    const props = {
      size: "small",
      align: "center",
      text: "Text",
      color: "blue",
    } as const;

    render(<AtomSubtitle {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "font-size": "16px" });
  });
 
  it("Render component no color provided", () => {
    const props: ITypographyProps = {
      size: "large",
      align: "center",
      text: "Text",
    } as const;

    render(<AtomSubtitle {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ color: "black" });
  });
  it("Render component color", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
      color: "blue",
    };
    render(<AtomSubtitle {...props} />);

    const element = screen.getByText(props.text);
    expect(element).toHaveStyle({ color: "blue" });
  });

  it("Render component align left", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
      align: "left",
    };
    render(<AtomSubtitle {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "left" });
  });

  it("Render component align center", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
      align: "center",
    };
    render(<AtomSubtitle {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "center" });
  });

  it("Render component align right", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
      align: "right",
    };
    render(<AtomSubtitle {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "right" });
  });

 
});
