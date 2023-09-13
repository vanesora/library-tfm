import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "jest-styled-components";
import { AtomInputEmail } from "./index";
import { theme } from "data/dataMx";

describe("[React] AtomInputEmail", () => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+?/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3}){1,2}$/;

  it("Rendered component onchange", () => {
    const mockChange = jest.fn();
    render(
      <AtomInputEmail
        name={"name"}
        required={true}
        placeholder={"placeholder"}
        disabled={false}
        readOnly={false}
        onChange={mockChange}
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "query" } });

    expect(mockChange).toHaveBeenCalled();
  });

  it("Rendered component ReadOnly", () => {
    render(<AtomInputEmail readOnly={true} />);
    const input = document.querySelector("input");

    expect(input).toHaveAttribute("readOnly");
    expect(input).toHaveStyleRule("border-color", `${theme.transparent}`);
  });

  it("Rendered component required", () => {
    render(<AtomInputEmail required={true} value="" />);
    const input = document.querySelector("input");

    expect(input).toHaveAttribute("required");
  });

  it("Rendered component disabled", () => {
    render(<AtomInputEmail disabled={true} />);
    const input = document.querySelector("input");

    expect(input).toBeDisabled();
    expect(input).toHaveStyleRule("border-color", `${theme.neutral300}`);
  });

  it("Rendered component with value", () => {
    render(<AtomInputEmail value="testemail@test.com" />);
    const input = document.querySelector("input");

    expect(input?.value).toBe("testemail@test.com");
  });

  test("Validate incorrect email", async () => {
    const mockErrorCallback = jest.fn();
    const mockOnChange = jest.fn();
    render(
      <AtomInputEmail
        onChange={mockOnChange}
        errorCallback={mockErrorCallback}
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "notValidEmail" } });
    fireEvent.blur(input);

    expect(mockOnChange).toHaveBeenCalled();
    await waitFor(() => expect(mockErrorCallback).toHaveBeenCalled());
    expect(input).toHaveStyleRule("border-color", theme.secondary400);
  });

  test("Validate correct email", async () => {
    const mockErrorCallback = jest.fn();
    const mockOnChange = jest.fn();

    render(
      <AtomInputEmail
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
    render(<AtomInputEmail value="email@test.com" regex="^[a-z]*$" />);
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "12345" } });
    fireEvent.blur(input);
    await waitFor(() =>
      expect(input).toHaveStyleRule("border-color", `${theme.neutral400}`)
    );
  });

  it("Rendered component without value and required", async () => {
    render(<AtomInputEmail value="email@test.com" required={true} />);
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);
    await waitFor(() =>
      expect(input).toHaveStyleRule("border-color", `${theme.neutral400}`)
    );
  });
});
