import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { AtomSelect } from "./index";

describe("[React] AtomSelect", () => {
  it("Rendered component", () => {
    const body = {
      items: ["1", "2", "3"],
      value: "test-value",
    };
    const component = render(<AtomSelect {...body} />);
    expect(component).toBeTruthy();
  });

  it("Rendered component width", () => {
    const body = {
      items: ["1", "2", "3"],
      value: "test-value",
      width: "100%",
    };
    const component = render(<AtomSelect {...body} />);
    expect(component).toBeTruthy();
  });

  it("Rendered component height", () => {
    const body = {
      items: ["1", "2", "3"],
      value: "test-value",
      height: "100%",
    };
    const component = render(<AtomSelect {...body} />);
    expect(component).toBeTruthy();
  });

  it("Rendered component disabled", () => {
    const body = {
      items: ["1", "2", "3"],
      value: "Select one",
      disabled: true,
    };
    const component = render(<AtomSelect {...body} />);
    const select = component.getByText("Select one");
    expect(component).toBeTruthy();
    expect(select).toHaveStyle({ borderWidth: "" });
  });

  it("Clicking select", () => {
    const mockHandler = jest.fn();
    const body = {
      items: ["1", "2", "3"],
      value: "Select one",
      onChangeValue: mockHandler,
    };
    const component = render(<AtomSelect {...body} />);
    const select = component.getByText("Select one");
    fireEvent.click(select);

    const option = component.getByText(body.items[0]);
    fireEvent.click(option);
    component.getByText(body.items[0]);
  });

  it("Rendered component placeholder", () => {
    const body = {
      items: ["1", "2", "3"],
      value: "test-value",
      isValuePlaceHolder: true,
    };
    const component = render(<AtomSelect {...body} />);
    expect(component).toBeTruthy();
  });
});
