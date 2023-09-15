import React from "react";
import "@testing-library/jest-dom";
import { AtomButtonDefault } from "./index";
import { render, screen } from "@testing-library/react";

describe("Btn Default", () => {
  test("Render button", () => {
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      type: "button",
      width: "144px",
    } as const;
    render(<AtomButtonDefault {...body} />);
    screen.getByText(body.text);
  });
 
});
