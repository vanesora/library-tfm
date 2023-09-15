import React from "react";
import "@testing-library/jest-dom";
import { AtomButtonSubMenu } from "./index";
import { render, screen } from "@testing-library/react";
import { IProps } from "../ButtonProps";

describe("Btn Default", () => {
  test("Render button", () => {
    const body = {
      disabled: false,
      text: "Accept",
      type: "button",
      width: "144px",
    } as const;
    render(<AtomButtonSubMenu {...body} />);
    screen.getByText(body.text);
  });
 
});
