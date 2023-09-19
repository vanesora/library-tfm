import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { MoleculeInput } from "./index";

describe("[React] MoleculeInput", () => {
  const helper = "Helper Text";
  const label = "Label Text";
  const mockChange = jest.fn();
  it("Render component InputText", () => {
    render(
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
        theme={'light'}
      />
    );
    const input = screen.getByText(helper);
    expect(input).toHaveTextContent(helper);
    const inputElement = screen.getByRole("input") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "query" } });
    expect(mockChange).toHaveBeenCalled();
  });
  
});
