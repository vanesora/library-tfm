import React from "react";
import "@testing-library/jest-dom";
import { AtomTextError } from "./index";
import { ITypographyProps } from "../TypographyProps";
import { render, screen } from "@testing-library/react";

describe("[React] AtomBody", () => {
  it("Render component", () => {
    const props: ITypographyProps = {
      text: "otrotexto",
      align: "center",
    } as const;
    render(<AtomTextError {...props} />);
    screen.getByText(props.text);
  });


  it("Render component align left", () => {
    const props: ITypographyProps = {
      text: "testText",
      align: "left",
    };
    render(<AtomTextError {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "left" });
  });

  it("Render component align center", () => {
    const props: ITypographyProps = {
      text: "testText",
      align: "center",
    };
    render(<AtomTextError {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "center" });
  });

  it("Render component align right", () => {
    const props: ITypographyProps = {
      text: "testText",
      align: "right",
    };
    render(<AtomTextError {...props} />);

    const element = screen.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "right" });
  });
});
