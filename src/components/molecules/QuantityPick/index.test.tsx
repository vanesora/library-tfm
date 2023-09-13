import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { MoleculeQuantityPick } from "./index";

describe("[React] MoleculeQuantityPick", () => {
  it("Render component", () => {
    const props = {
      value: "10",
      min: "0",
      max: "10",
      onRemove: () => jest.fn(),
      onAdd: () => jest.fn(),
      onChange: () => jest.fn(),
    };

    const component = render(<MoleculeQuantityPick {...props} />);
  });

  it("Handle Adding", async () => {
    const mockAddHandler = jest.fn();
    const props = {
      value: "1",
      max: "10",
      onRemove: () => jest.fn(),
      onAdd: mockAddHandler,
      onChange: () => jest.fn(),
    };

    const component = render(<MoleculeQuantityPick {...props} />);

    const addButton = document.getElementsByClassName(
      "quantity-add-button"
    )[0] as HTMLElement;

    fireEvent.click(addButton);

    expect(mockAddHandler).toHaveBeenCalledTimes(1);
  });

  it("Handle Removing", async () => {
    const mockRemoveHandler = jest.fn();
    const props = {
      value: "5",
      min: "1",
      max: "5",
      onRemove: mockRemoveHandler,
      onAdd: () => jest.fn(),
      onChange: () => jest.fn(),
    };

    const component = render(<MoleculeQuantityPick {...props} />);

    const removeButton = document.getElementsByClassName(
      "quantity-remove-button"
    )[0] as HTMLElement;

    fireEvent.click(removeButton);

    expect(mockRemoveHandler).toHaveBeenCalledTimes(1);
  });
  it("Handle Changed", async () => {
    const mockChangeHandler = jest.fn();
    const props = {
      value: "4",
      min: "1",
      max: "5",
      onRemove: () => jest.fn(),
      onAdd: () => jest.fn(),
      onChange: mockChangeHandler,
    };

    const component = render(<MoleculeQuantityPick {...props} />);

    const inputNumber = document.getElementsByTagName(
      "input"
    )[0] as HTMLInputElement;
    fireEvent.change(inputNumber, "3");

    expect(mockChangeHandler).toHaveBeenCalled();
  });
  it("Handle Changed lesser than minimun", async () => {
    const mockChangeHandler = jest.fn();
    const props = {
      value: "1",
      min: "2",
      max: "5",
      onRemove: () => jest.fn(),
      onAdd: () => jest.fn(),
      onChange: mockChangeHandler,
    };

    const component = render(<MoleculeQuantityPick {...props} />);

    const inputNumber = document.getElementsByTagName(
      "input"
    )[0] as HTMLInputElement;
    fireEvent.change(inputNumber, "1");

    expect(mockChangeHandler).toHaveBeenCalled();
  });
});
