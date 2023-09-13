import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { AtomToggle } from "./index";

describe("[React] AtomToggle", () => {
  test("Render Toggle", () => {
    const props = {
      isChecked: false,
      disabled: false,
      size: "xs",
      onToggle: jest.fn(),
    } as const;

    const component = render(<AtomToggle {...props} />);

    expect(component).toBeTruthy();
  });

  test("Render 2xs Toggle", () => {
    const props = {
      isChecked: false,
      name: "toggle_button",
      disabled: false,
      onText: "On",
      offText: "Off",
      size: "2xs",
      onToggle: jest.fn(),
    } as const;

    const component = render(<AtomToggle {...props} />);
  });

  test("Render Toggle no size provided", () => {
    const props = {
      isChecked: false,
      name: "toggle_button",
      disabled: false,
      onText: "On",
      offText: "Off",
      onToggle: jest.fn(),
    } as const;

    const component = render(<AtomToggle {...props} />);

    const toggleWrapper = document.getElementsByClassName(
      "toggle-wrapper"
    )[0] as HTMLElement;
    const toggleWrapperStyles = window.getComputedStyle(toggleWrapper);

    expect(toggleWrapperStyles.height).toEqual("40px");
  });

  test("Render Toggle checked", () => {
    const props = {
      isChecked: true,
      name: "toggle_button",
      onText: "On",
      offText: "Off",
      onToggle: jest.fn(),
    } as const;

    const component = render(<AtomToggle {...props} />);
    const inputIsChecked = document.querySelector("input")?.checked;
    const spanText = document.getElementsByClassName(
      "status-text"
    )[0] as HTMLSpanElement;

    expect(inputIsChecked).toEqual(true);
    expect(spanText.textContent).toEqual(props.onText);
  });
  test("Render Toggle unchecked", () => {
    const props = {
      isChecked: false,
      name: "toggle_button",
      onToggle: jest.fn(),
    } as const;

    const component = render(<AtomToggle {...props} />);
    const inputIsChecked = document.querySelector("input")?.checked;
    expect(inputIsChecked).toEqual(false);
  });
  test("Render Toggle no isChecked prop", () => {
    const props = {
      name: "toggle_button",
      onToggle: jest.fn(),
    } as const;

    const component = render(<AtomToggle {...props} />);
    const inputIsChecked = document.querySelector("input")?.checked;
    expect(inputIsChecked).toEqual(false);
  });
  test("Render Toggle no checked with text", () => {
    const props = {
      isChecked: false,
      name: "toggle_button",
      offText: "Off",
      onToggle: () => {},
    } as const;

    const component = render(<AtomToggle {...props} />);

    const toggleWrapper = document.getElementsByClassName(
      "toggle-wrapper"
    )[0] as HTMLElement;
    const spanText = document.getElementsByClassName(
      "status-text"
    )[0] as HTMLSpanElement;

    expect(spanText.textContent).toEqual(props.offText);
  });
  test("Render Toggle checked with text", () => {
    const props = {
      isChecked: true,
      name: "toggle_button",
      onText: "On",
      onToggle: () => {},
    } as const;

    const component = render(<AtomToggle {...props} />);

    const toggleWrapper = document.getElementsByClassName(
      "toggle-wrapper"
    )[0] as HTMLElement;
    const spanText = document.getElementsByClassName(
      "status-text"
    )[0] as HTMLSpanElement;

    expect(spanText.textContent).toEqual(props.onText);
  });

  test("Render Toggle xs no checked with text", () => {
    const props = {
      isChecked: false,
      name: "toggle_button",
      offText: "Off",
      size: "xs",
      onToggle: () => {},
    } as const;

    const component = render(<AtomToggle {...props} />);

    const toggleWrapper = document.getElementsByClassName(
      "toggle-wrapper"
    )[0] as HTMLElement;
    const spanText = document.getElementsByClassName(
      "status-text"
    )[0] as HTMLSpanElement;

    expect(spanText.textContent).toEqual(props.offText);
  });
  test("Render Toggle xs checked with text", () => {
    const props = {
      isChecked: true,
      name: "toggle_button",
      onText: "On",
      size: "xs",
      onToggle: () => {},
    } as const;

    const component = render(<AtomToggle {...props} />);

    const toggleWrapper = document.getElementsByClassName(
      "toggle-wrapper"
    )[0] as HTMLElement;
    const spanText = document.getElementsByClassName(
      "status-text"
    )[0] as HTMLSpanElement;

    expect(spanText.textContent).toEqual(props.onText);
  });
  test("Render Toggle 2xs no checked with text", () => {
    const props = {
      isChecked: false,
      name: "toggle_button",
      offText: "Off",
      size: "2xs",
      onToggle: () => {},
    } as const;

    const component = render(<AtomToggle {...props} />);

    const toggleWrapper = document.getElementsByClassName(
      "toggle-wrapper"
    )[0] as HTMLElement;
    const spanText = document.getElementsByClassName(
      "status-text"
    )[0] as HTMLSpanElement;

    expect(spanText.textContent).toEqual(props.offText);
  });
  test("Render Toggle 2xs checked with text", () => {
    const props = {
      isChecked: true,
      name: "toggle_button",
      onText: "On",
      size: "2xs",
      onToggle: () => {},
    } as const;

    const component = render(<AtomToggle {...props} />);

    const toggleWrapper = document.getElementsByClassName(
      "toggle-wrapper"
    )[0] as HTMLElement;
    const spanText = document.getElementsByClassName(
      "status-text"
    )[0] as HTMLSpanElement;

    expect(spanText.textContent).toEqual(props.onText);
  });

  // labelText
  test("Render Toggle xs with labelText", () => {
    const props = {
      isChecked: false,
      name: "toggle_button",
      disabled: false,
      onText: "On",
      offText: "Off",
      size: "xs",
      labelText: "Text",
      onToggle: jest.fn(),
    } as const;

    const component = render(<AtomToggle {...props} />);

    const labelText = component.getByText(props.labelText);

    expect(labelText.textContent).toEqual(props.labelText);
  });
  test("Render Toggle 2xs with labelText", () => {
    const props = {
      isChecked: false,
      name: "toggle_button",
      disabled: false,
      onText: "On",
      offText: "Off",
      size: "2xs",
      labelText: "Text",
      onToggle: jest.fn(),
    } as const;

    const component = render(<AtomToggle {...props} />);

    const labelText = component.getByText(props.labelText);

    expect(labelText.textContent).toEqual(props.labelText);
  });
  test("Render Toggle no size specified with labelText", () => {
    const props = {
      isChecked: false,
      name: "toggle_button",
      disabled: false,
      onText: "On",
      offText: "Off",
      labelText: "Text",
      onToggle: jest.fn(),
    } as const;

    const component = render(<AtomToggle {...props} />);

    const labelText = component.getByText(props.labelText);

    expect(labelText.textContent).toEqual(props.labelText);
  });

  // onToggle function
  test("Render Toggle onToggle function", () => {
    const mockHandleToggle = jest.fn();
    const event = {
      target: {
        value: "1",
      },
    } as const;

    const props = {
      name: "toggle_button",
      onToggle: mockHandleToggle,
    } as const;

    const component = render(<AtomToggle {...props} />);
    const input = component.container.querySelector(
      "input"
    ) as HTMLInputElement;

    fireEvent.change(input, event);
    expect(mockHandleToggle).toHaveBeenCalledTimes(0);
  });
});
