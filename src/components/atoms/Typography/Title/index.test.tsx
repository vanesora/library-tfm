import React from "react";
import "@testing-library/jest-dom";
import { AtomTitle } from "./index";
import { ITypographyProps } from "../TypographyProps";
import { render, screen } from "@testing-library/react";

describe("[React] AtomTitle", () => {
  it("render component", () => {
    const body: ITypographyProps = {
      size: "large",
      text: "Caption Text",
      color: "blue",
      align: "left",
    };
    render(<AtomTitle {...body} />);
    const element = screen.getByText(body.text);

    expect(element).toBeTruthy();
  });
  it("Render component color", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
      color: "blue",
    };
    render(<AtomTitle {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ color: "blue" });
  });

  it("Render component align left", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
      align: "left",
    };
    render(<AtomTitle {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "left" });
  });

  it("Render component align center", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
      align: "center",
    };
    render(<AtomTitle {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "center" });
  });

  it("Render component align right", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
      align: "right",
    };
    render(<AtomTitle {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "right" });
  });
});
