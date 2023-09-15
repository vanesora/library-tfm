import React from "react";
import "@testing-library/jest-dom";
import { AtomButtonIcon } from "./index";
import { render, screen } from "@testing-library/react";
import { convertHexToRGBA } from "../mockTest/functions";
import { IProps } from "../ButtonProps";

describe("Button AtomButtonIcon", () => {
  test("Render button icon with text", () => {
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      type: "button",
      icon: "diamond",
    } as const;
    render(<AtomButtonIcon {...body} />);
    screen.getByText(body.text);
  });
  
});
