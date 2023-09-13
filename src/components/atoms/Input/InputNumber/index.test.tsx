import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "jest-styled-components";
import { AtomInputNumber } from "./index";
import { theme } from "data/dataMx";

describe("[React] AtomInputNumber", () => {
  const mockChange = jest.fn();
  it("Rendered component onchange", () => {
    render(
      <AtomInputNumber
        name={"name"}
        required={true}
        placeholder={"placeholder"}
        disabled={false}
        readOnly={false}
        onChange={mockChange}
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "13" } });

    expect(mockChange).toHaveBeenCalled();
  });

  it("Rendered component ReadOnly", () => {
    render(<AtomInputNumber readOnly={true} />);
    const input = document.querySelector("input");

    expect(input).toHaveAttribute("readOnly");
    expect(input).toHaveStyleRule("border-color", `${theme.transparent}`);
  });

  it("Rendered component required", () => {
    render(<AtomInputNumber required={true} />);
    const input = document.querySelector("input");

    expect(input).toHaveAttribute("required");
  });

  it("Rendered component disabled", () => {
    render(<AtomInputNumber disabled={true} />);
    const input = document.querySelector("input");

    expect(input).toBeDisabled();
    expect(input).toHaveStyleRule("border-color", `${theme.neutral300}`);
  });

  it("Rendered component with value", () => {
    render(<AtomInputNumber value="1234567890" />);
    const input = document.querySelector("input");

    expect(input?.value).toBe("1234567890");
  });

  test("Validate incorrect Number", async () => {
    const mockErrorCallback = jest.fn();
    const mockOnChange = jest.fn();
    render(
      <AtomInputNumber
        onChange={mockOnChange}
        errorCallback={mockErrorCallback}
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "." } });
    fireEvent.blur(input);
    expect(input).toHaveStyleRule("border-color", theme.neutral400);
  });

  test("Validate required", async () => {
    const mockErrorCallback = jest.fn();
    render(
      <AtomInputNumber errorCallback={mockErrorCallback} required={true} />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.blur(input);
    await waitFor(() => expect(mockErrorCallback).toHaveBeenCalled());
    expect(input).toHaveStyleRule("border-color", theme.secondary400);
  });

  test("Validate correct Number", async () => {
    const mockErrorCallback = jest.fn();
    const mockOnChange = jest.fn();
    render(
      <AtomInputNumber
        onChange={mockOnChange}
        errorCallback={mockErrorCallback}
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: 14 } });
    fireEvent.blur(input);
    expect(mockOnChange).toHaveBeenCalled();
    expect(input).toHaveStyleRule("border-color", theme.neutral400);
  });

  it("Rendered component higher than max value", () => {
    render(
      <AtomInputNumber
        name={"name"}
        required={true}
        placeholder={"placeholder"}
        disabled={false}
        readOnly={false}
        onChange={mockChange}
        value={"100"}
        max={"13"}
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.blur(input);
    expect(input).toHaveStyleRule("border-color", theme.secondary400);
  });
});
