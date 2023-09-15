import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AtomButtonMenu } from ".";

describe("Btn Default", () => {
  test("Render button", () => {
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      type: "button",
      width: "144px",
    } as const;
    render(<AtomButtonMenu {...body} />);
    screen.getByText(body.text);
  });
});
