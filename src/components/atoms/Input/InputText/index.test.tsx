import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen, act } from "@testing-library/react";
import "jest-styled-components";
import { AtomInputText } from "./index";

describe("[React ]AtomInputText", () => {
  it("Rendered component onchange", () => {
    const mockChange = jest.fn();
    render(
      <AtomInputText
        name={"name"}
        required={true}
        placeholder={"placeholder"}
        value={"value"}
        disabled={false}
        readOnly={false}
        onChange={mockChange}
      />
    );
    const input = screen.getByRole("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "query" } });
    expect(mockChange).toHaveBeenCalled();
  });

  
});
