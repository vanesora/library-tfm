import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import "jest-styled-components";
import { AtomInputText } from "./index";
import { theme } from "data/dataMx";

describe("[React ]AtomInputText", () => {
  it("Rendered component onchange", () => {
    const mockChange = jest.fn();
    const component = render(
      <AtomInputText
        name={"name"}
        required={true}
        placeholder={"placeholder"}
        value={"value"}
        disabled={false}
        readOnly={false}
        onChange={mockChange}
        hasCustomValidationError={false}
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "query" } });
    expect(mockChange).toHaveBeenCalled();
  });

  it("Rendered component ReadOnly", () => {
    const component = render(<AtomInputText readOnly={true} />);
    const input = document.querySelector("input") as HTMLInputElement;
    const containerStyle = window.getComputedStyle(input);
    const backgroundColor = containerStyle.borderColor;
    expect(backgroundColor).toBe(`${theme.transparent}`);
  });

  it("Rendered component required", () => {
    render(<AtomInputText required={true} placeholder="Input text" />);
    const input = document.querySelector("input");
    expect(input).toHaveAttribute("required");
  });

  it("Rendered component disabled", () => {
    const component = render(
      <AtomInputText disabled={true} value={"qwerty"} />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    expect(input).toHaveStyleRule("border-color", theme.neutral300);
    expect(input).toBeDisabled();
  });

  test("Rendered component validate incorrect Capital Letters", async () => {
    const mockErrorCallback = jest.fn();
    const mockOnChange = jest.fn();
    await act(async () => {
      render(
        <AtomInputText
          onChange={mockOnChange}
          errorCallback={mockErrorCallback}
        />
      );
    });
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "notvalidemail" } });
    fireEvent.blur(input);

    expect(mockOnChange).toHaveBeenCalled();
    await waitFor(() => expect(mockErrorCallback).toHaveBeenCalledTimes(0));
    expect(input).toHaveStyleRule("border-color", `${theme.neutral400}`);
  });

  test("Rendered component validate correct Capital Letters", async () => {
    const mockErrorCallback = jest.fn();
    const mockOnChange = jest.fn();

    render(
      <AtomInputText
        onChange={mockOnChange}
        errorCallback={mockErrorCallback}
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "notValidEmail" } });
    fireEvent.blur(input);

    expect(mockOnChange).toHaveBeenCalled();
    await waitFor(() => expect(mockErrorCallback).toHaveBeenCalledTimes(0));
    expect(input).toHaveStyleRule("border-color", `${theme.neutral400}`);
  });

  it("Rendered component with value and regex", async () => {
    render(<AtomInputText value="email@test.com" regex="(?=[A-Z])" />);
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "12345" } });
    fireEvent.blur(input);
    await waitFor(() =>
      expect(input).toHaveStyleRule("border-color", `${theme.neutral400}`)
    );
  });

  it("Valid text required", async () => {
    const mockErrorCallback = jest.fn();
    render(
      <AtomInputText
        errorCallback={mockErrorCallback}
        required={true}
        value={""}
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.blur(input);
    await waitFor(() => expect(mockErrorCallback).toHaveBeenCalled());
  });

  it("Valid text regex", async () => {
    const mockErrorCallback = jest.fn();
    render(
      <AtomInputText
        errorCallback={mockErrorCallback}
        required={true}
        value={"12345"}
        regex="(?=[A-Z])"
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.blur(input);
    await waitFor(() => expect(mockErrorCallback).toHaveBeenCalled());
  });
});
