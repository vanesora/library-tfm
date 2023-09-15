import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import "jest-styled-components";
import { AtomInputNumber } from "./index";

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
    const input = screen.getByRole("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "13" } });

    expect(mockChange).toHaveBeenCalled();
  });
});
