import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "jest-styled-components";
import { AtomInputEmail } from "./index";

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
    const input =  screen.getByRole("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "query" } });

    expect(mockChange).toHaveBeenCalled();
  });

  
});
