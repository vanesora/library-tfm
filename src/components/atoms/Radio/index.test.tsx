import React from "react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

import { AtomRadio } from "./index";

describe("[React] AtomRadio", () => {
  it("Render component", () => {
    const mockChange = jest.fn();
    const component = render(<AtomRadio value="Test" onChange={mockChange} />);

    const radio = component.getByTestId("radio");
    expect(radio).not.toBeNull();
  });

  it("Render component checked", () => {
    const mockChange = jest.fn();
    const component = render(
      <AtomRadio value="Test" onChange={mockChange} isChecked={true} />
    );
    const radio = component.getByTestId("radio");
    expect(radio).not.toBeNull();
    const checked = component.getByTestId("checked");
    expect(checked).not.toBeNull();
  });

  it("Render component with Label", () => {
    const component = render(
      <AtomRadio value="Test" label="Test Label" onChange={jest.fn()} />
    );
    const radio = component.getByTestId("radio");
    expect(radio).not.toBeNull();
    const label = component.getByText("Test Label");
    expect(label).not.toBeNull();
  });

  it("Call onChange when clicked", () => {
    const mockChange = jest.fn();
    const component = render(
      <AtomRadio value="Test" label="Test Label" onChange={mockChange} />
    );
    const radioComponent = component.getByTestId("container");
    expect(radioComponent).not.toBeNull();
    fireEvent.click(radioComponent);
    expect(mockChange).toBeCalled();
  });

  it("Render component disabled", () => {
    const mockChange = jest.fn();
    const component = render(
      <AtomRadio
        value="Test"
        label="Test Label"
        onChange={mockChange}
        disabled={true}
        isChecked={true}
      />
    );
    const radioComponent = component.getByTestId("container");
    expect(radioComponent).not.toBeNull();
  });

  it("Call onChange when clicked", () => {
    const mockChange = jest.fn();
    const component = render(
      <AtomRadio value="Test" label="Test Label" onChange={mockChange} />
    );
    const radioComponent = component.getByTestId("container");
    const radio = component.getByTestId("radio");

    fireEvent.click(radioComponent);

    expect(radio).not.toBeNull();
    expect(radioComponent).not.toBeNull();
    expect(mockChange).toBeCalled();
  });
});
