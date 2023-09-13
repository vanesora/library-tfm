import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MoleculeInput } from "./index";

describe("[React] MoleculeInput", () => {
  const helper = "Helper Text";
  const label = "Label Text";
  const mockChange = jest.fn();
  it("Render component InputText", () => {
    const component = render(
      <MoleculeInput
        type={"Text"}
        value={""}
        helperText={helper}
        label={label}
        onChange={mockChange}
        name={"input"}
        regex={""}
        readOnly={false}
        required={false}
        placeholder={""}
        disabled={false}
      />
    );
    const input = component.getByText(helper);
    expect(input).toHaveTextContent(helper);
    const inputElement = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "query" } });
    expect(mockChange).toHaveBeenCalled();
  });
  it("Render component Input no props render", () => {
    const component = render(<MoleculeInput />);
  });
  it("Render component InputPhone", async () => {
    const component = render(
      <MoleculeInput
        type={"Phone"}
        value={""}
        helperText={helper}
        onChange={mockChange}
        importantCountries={["COL", "ECU", "MEX"]}
      />
    );
    const listInput = component.container.querySelectorAll("input");
    const input = listInput[1];
    fireEvent.change(input, { target: { value: 9 } });
    fireEvent.focus(input);
    fireEvent.blur(input);
    await waitFor(() => expect(mockChange).toHaveBeenCalled());
  });
  it("Render component InputPhone no props render", () => {
    const component = render(<MoleculeInput type={"Phone"} />);
  });
  it("Render component InputPhone alignPhone column", () => {
    const component = render(
      <MoleculeInput type={"Phone"} alignPhone={"colum"} />
    );
  });
  it("Render component Password", () => {
    const component = render(
      <MoleculeInput
        type={"Password"}
        value={""}
        helperText={helper}
        onChange={mockChange}
      />
    );
    const input = component.getByText(helper);
    expect(input).toHaveTextContent(helper);
    const inputElement = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "query" } });
    expect(mockChange).toHaveBeenCalled();
  });
  it("Render component Number", () => {
    const component = render(
      <MoleculeInput
        type={"Number"}
        value={""}
        helperText={helper}
        onChange={mockChange}
      />
    );
    const input = component.getByText(helper);
    expect(input).toHaveTextContent(helper);
    const inputElement = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "13" } });
    expect(mockChange).toHaveBeenCalled();
  });
  it("Render component Email", () => {
    const component = render(
      <MoleculeInput
        type={"Email"}
        value={""}
        helperText={helper}
        onChange={mockChange}
      />
    );
    const input = component.getByText(helper);
    expect(input).toHaveTextContent(helper);
    const inputElement = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "query" } });
    expect(mockChange).toHaveBeenCalled();
  });
  it("Render component Email incorrect", () => {
    const mockErrorCallback = jest.fn();
    const component = render(
      <MoleculeInput
        type={"Email"}
        value={""}
        helperText={helper}
        onChange={mockChange}
        errorCallback={mockErrorCallback}
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "notValidEmail" } });
    fireEvent.blur(input);
  });
  it("Render component Date", async () => {
    const component = render(
      <MoleculeInput
        type={"Date"}
        value={""}
        helperText={helper}
        onChange={mockChange}
      />
    );
    const selectDD = component.getByText("DD");
    fireEvent.click(selectDD);
    const optionDD = component.getByText("15");
    fireEvent.click(optionDD);
    const selectMM = component.getByText("MM");
    fireEvent.click(selectMM);
    const optionMM = component.getByText("01");
    fireEvent.click(optionMM);
    const selectYYYY = component.getByText("YYYY");
    fireEvent.click(selectYYYY);
    const optionYYYY = component.getByText("2019");
    fireEvent.click(optionYYYY);
    component.getByText("15");
    component.getByText("01");
    component.getByText("2019");
    await waitFor(() => expect(mockChange).toHaveBeenCalled());
  });
});
