import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "jest-styled-components";
import { AtomInputPhone } from "./index";
import { theme } from "data/dataMx";

describe("[React] AtomInputPhone", () => {
  const mockChange = jest.fn();
  jest.useFakeTimers();
  it("Rendered component", () => {
    const component = render(
      <AtomInputPhone
        helperText="Helper"
        country=""
        phone=""
        required={true}
        placeholder={"placeholder"}
        placeholderCountryP={"placeholderCountryP"}
        disabled={false}
        readOnly={false}
        regex={"^[0-9]+$"}
        onChange={mockChange}
      />
    );
    expect(component).toBeTruthy();
  });

  it("Rendered component disabled", () => {
    const component = render(
      <AtomInputPhone
        helperText="Helper"
        country=""
        phone=""
        required={true}
        placeholder={"placeholder"}
        placeholderCountryP={"placeholderCountryP"}
        disabled={true}
        readOnly={false}
        regex={"^[0-9]+$"}
        onChange={mockChange}
      />
    );
    const select = component.container.querySelector("input");
    expect(select).toHaveAttribute("disabled");
    expect(select).toHaveStyleRule("border-color", theme?.neutral300);
  });

  it("Rendered component readOnly", () => {
    const component = render(
      <AtomInputPhone
        helperText="Helper"
        country=""
        phone=""
        required={true}
        placeholder={"placeholder"}
        placeholderCountryP={"placeholderCountryP"}
        readOnly={true}
        regex={"^[0-9]+$"}
        onChange={mockChange}
      />
    );
    const select = component.container.querySelector("input");
    expect(select).toHaveAttribute("readOnly");
    expect(select).toHaveStyleRule("border-color", theme?.transparent);
  });

  it("Rendered component dont select value", async () => {
    const mockErrorCallback = jest.fn();
    const component = render(
      <AtomInputPhone
        helperText="Helper"
        country=""
        phone=""
        required={true}
        placeholder={"placeholder"}
        placeholderCountryP={"placeholderCountryP"}
        importantCountries={["COL", "ECU", "MEX"]}
        onChange={mockChange}
        errorCallback={mockErrorCallback}
        align={"colum"}
      />
    );
    const select = component.container.querySelector("input");
    select && fireEvent.focus(select);
    select && fireEvent.blur(select);
    await waitFor(() => expect(mockErrorCallback).toHaveBeenCalled());
  });

  it("Rendered component change value", async () => {
    const mockErrorCallback = jest.fn();
    const component = render(
      <AtomInputPhone
        helperText="Helper"
        country=""
        phone=""
        required={true}
        importantCountries={["COL", "ECU", "MEX"]}
        regex={"^[a-z]+$"}
        onChange={mockChange}
        errorCallback={mockErrorCallback}
      />
    );
    const listInput = component.container.querySelectorAll("input");
    const input = listInput[1];
    fireEvent.change(input, { target: { value: 9 } });
    fireEvent.focus(input);
    fireEvent.blur(input);
    await waitFor(() => expect(mockErrorCallback).toHaveBeenCalled());
  });

  it("Rendered component change value country", async () => {
    const mockErrorCallback = jest.fn();
    const component = render(
      <AtomInputPhone
        helperText="Helper"
        country="MEX"
        phone=""
        required={true}
        importantCountries={["COL", "ECU", "MEX"]}
        regex={"^[a-z]+$"}
        onChange={mockChange}
        errorCallback={mockErrorCallback}
      />
    );
    const listInput = component.container.querySelectorAll("input");
    const input = listInput[1];
    fireEvent.change(input, { target: { value: 9 } });
    fireEvent.focus(input);
    fireEvent.blur(input);
    await waitFor(() => expect(mockErrorCallback).toHaveBeenCalled());
  });
});
