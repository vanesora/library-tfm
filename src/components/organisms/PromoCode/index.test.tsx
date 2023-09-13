import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { OrganismPromoCode } from "./index";

describe("[React] PromoCode", () => {
  it("render component", () => {
    const mockHandler = jest.fn();
    const props = {
      headline: "Title",
      text: "This is a text",
      handleClick: mockHandler,
      errorMessageText: "error",
      value: "value-test",
    } as const;
    const component = render(<OrganismPromoCode {...props} />);
    expect(component).toBeTruthy();
  });

  it("render custom icon", () => {
    const mockHandler = jest.fn();
    const props = {
      headline: "Title",
      text: "This is a text",
      iconName: "beer",
      handleClick: mockHandler,
      errorMessageText: "error",
    } as const;
    const component = render(<OrganismPromoCode {...props} />);
    expect(component).toBeTruthy();
  });

  it("special characters and characters", () => {
    const mockHandler = jest.fn();
    const props = {
      headline: "Title",
      text: "This is a text",
      iconName: "beer",
      handleClick: mockHandler,
      errorMessageText: "error",
    } as const;
    const component = render(<OrganismPromoCode {...props} />);
    const input = component.container.querySelector(
      "input"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: ".a!`lx!1." } });
    component.getByText(props.errorMessageText);
  });

  it("type only special characters", () => {
    const mockHandler = jest.fn();
    const props = {
      headline: "Title",
      text: "This is a text",
      iconName: "beer",
      handleClick: mockHandler,
      errorMessageText: "error",
    } as const;
    const component = render(<OrganismPromoCode {...props} />);
    const input = component.container.querySelector(
      "input"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: ".!+`]./" } });
    component.getByText(props.errorMessageText);
  });

  it("press button", () => {
    const mockHandler = jest.fn();
    const props = {
      headline: "Title",
      text: "This is a text",
      iconName: "beer",
      regExp: "^[A-Za-z0-9]{10,16}$",
      handleClick: mockHandler,
      errorMessageText: "error",
    } as const;

    const component = render(<OrganismPromoCode {...props} />);
    const input = component.container.querySelector(
      "input"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "P002EJ09Q2CYV43S" } });
    const button = component.getByText("Redeem");
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalled();
  });

  it("When the code is deleted the button must be active and doesn't show any error message", () => {
    const mockHandler = jest.fn();
    const props = {
      headline: "Title",
      text: "This is a text",
      iconName: "beer",
      regExp: "^[A-Za-z0-9]{10,16}$",
      handleClick: mockHandler,
      errorMessageText: "error",
    } as const;

    const component = render(<OrganismPromoCode {...props} />);
    const input = component.container.querySelector(
      "input"
    ) as HTMLInputElement;
    const button = component.getByText("Redeem");
    fireEvent.change(input, { target: { value: "aa" } });
    fireEvent.change(input, { target: { value: "" } });
    // button not disabled
    expect(button).not.toBeDisabled();
    // not showing error message
    const errorMessage = component.queryByText(props.errorMessageText);
    expect(errorMessage).toBeNull();
  });
});
