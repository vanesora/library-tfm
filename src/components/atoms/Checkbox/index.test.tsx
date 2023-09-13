import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AtomCheckbox } from "./index";

describe("[React] AtomCheckbox", () => {
  it("redered component", () => {
    const body = {
      checked: false,
    };
    const component = render(<AtomCheckbox {...body} />);
    expect(component).toBeTruthy();
  });
  it("onChange value", () => {
    const mockHandler = jest.fn();
    const body = {
      checked: false,
      onChange: mockHandler,
      disabled: false,
    };
    const component = render(<AtomCheckbox {...body} />);
    const checkbox = component.container.querySelector(
      "input"
    ) as HTMLInputElement;
    fireEvent.click(checkbox, { target: { checked: true } });
    expect(mockHandler).toHaveBeenCalled();
  });

  it("onClick value", () => {
    const mockHandler = jest.fn();
    const body = {
      checked: false,
      onChange: mockHandler,
      disabled: false,
      onClick: mockHandler,
    };
    const component = render(<AtomCheckbox {...body} />);
    const checkbox = component.container.querySelector(
      "label"
    ) as HTMLLabelElement;
    fireEvent.click(checkbox, { target: { checked: true } });
    expect(mockHandler).toHaveBeenCalled();
  });

  it("onClick value", () => {
    const mockHandler = jest.fn();
    const body = {
      checked: true,
      onChange: mockHandler,
      disabled: false,
      onClick: mockHandler,
      styles: { marginLeft: "19px" },
    };
    const component = render(<AtomCheckbox {...body} />);
    const checkbox = component.container.querySelector(
      "label"
    ) as HTMLLabelElement;
    fireEvent.click(checkbox, { target: { checked: true } });
    expect(mockHandler).toHaveBeenCalled();
  });
});
