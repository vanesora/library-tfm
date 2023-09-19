import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { AtomToggle } from "./index";

describe("[React] AtomToggle", () => {
  test("Render Toggle", () => {
    const props = {
      isChecked: false,
      disabled: false,
      size: "small",
      onToggle: jest.fn(),
    } as const;

    render(<AtomToggle {...props} />);

    expect(screen).toBeTruthy();
  });

  
});
