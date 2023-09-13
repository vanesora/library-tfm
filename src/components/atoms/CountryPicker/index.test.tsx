import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { AtomCountryPicker } from "./index";
import React, { useRef } from "react";
import { mocked } from "ts-jest/utils";

jest.mock("react", () => {
  return {
    ...jest.requireActual("react"),
    useRef: jest.fn(),
  };
});
const useMockRef = mocked(useRef);
jest.useFakeTimers();

describe("[React] AtomCountryPicker", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  it("Rendered component", () => {
    const body = {
      disabled: false,
    };
    const component = render(<AtomCountryPicker {...body} />);
    expect(component).toBeTruthy();
  });
  it("Rendered component disabled", () => {
    const body = {
      disabled: true,
      value: "COL",
      importantItems: ["COL", "ECU", "MEX"],
    };
    const component = render(<AtomCountryPicker {...body} />);
    const select = component.container.querySelector("input");
    expect(component).toBeTruthy();
    expect(select).toHaveAttribute("disabled");
  });

  it("Rendered component init values", () => {
    const body = {
      disabled: false,
      value: "COL",
      importantItems: ["COL", "ECU", "MEX"],
      name: "Label",
    };
    const component = render(<AtomCountryPicker {...body} />);
    expect(component).toBeTruthy();
  });

  it("Rendered component set click arrow", () => {
    const body = {
      disabled: false,
      value: "COL",
    };
    const component = render(<AtomCountryPicker {...body} />);
    const select = component.container.querySelector("svg");
    select && fireEvent.click(select);
    const element = component.container.querySelector("ul");
    expect(element).not.toBe(null);
  });

  it("Rendered component set input value", () => {
    const body = {
      disabled: false,
      value: "COL",
      importantItems: ["COL", "ECU", "MEX"],
      viewCountry: false,
    };
    const component = render(<AtomCountryPicker {...body} />);
    const select = component.container.querySelector("input");
    select && fireEvent.click(select);
    select && fireEvent.change(select, { target: { value: "c" } });
    const element = component.getByText(`+57 Colombia`);
    element && fireEvent.click(element);
    const selectTwo = component.container.querySelector("input");
    expect(selectTwo?.placeholder).toBe("+57 ");
  });

  it("Rendered component disabled set input value", () => {
    const body = {
      disabled: true,
      value: "COL",
      importantItems: ["COL", "ECU", "MEX"],
      name: "Label",
    };
    const component = render(<AtomCountryPicker {...body} />);
    const select = component.container.querySelector("input");
    select && fireEvent.click(select);
    select && fireEvent.change(select, { target: { value: "c" } });
    select &&
      fireEvent.keyDown(select, {
        key: "ArrowUp",
        code: "ArrowUp",
        keyCode: 38,
        charCode: 38,
      });
    const element = component.container.querySelector("ul");
    expect(element).toBe(null);
  });

  it("Rendered component select Element", () => {
    const body = {
      value: "COL",
      importantItems: ["COL", "ECU", "MEX"],
      name: "label",
    };
    const component = render(<AtomCountryPicker {...body} />);
    const select = component.container.querySelector("input");
    select && fireEvent.click(select);
    select && fireEvent.change(select, { target: { value: "c" } });
    const element = component.getByText(`+57 Colombia`);
    element && fireEvent.click(element);
    const options = component.container.querySelector("ul");
    expect(options).toBe(null);
  });

  it("Rendered component set input different actual value", () => {
    const ref = { current: {} };
    const mScrollBy = jest.fn();
    Object.defineProperty(ref, "current", {
      set(_current) {
        if (_current) {
          _current.scrollTo = mScrollBy;
        }
        this._current = _current;
      },
      get() {
        return this._current;
      },
    });
    useMockRef.mockReturnValueOnce(ref);
    const body = {
      disabled: false,
      value: "COL",
      importantItems: ["COL", "ECU", "MEX"],
      name: "label",
    };
    const component = render(<AtomCountryPicker {...body} />);
    const select = component.container.querySelector("input");
    select && fireEvent.click(select);
    select && fireEvent.change(select, { target: { value: "arge" } });
    const element = component.getByText(`+54 Argentina`);
    element && fireEvent.click(element);
    const options = component.container.querySelector("ul");
    expect(options).toBe(null);
  });

  it("Rendered component set input different actual value", () => {
    const handlePress = jest.fn();
    const body = {
      disabled: false,
      value: "COL",
      importantItems: ["COL", "ECU", "MEX"],
      name: "label",
      onChange: handlePress,
    };
    const component = render(<AtomCountryPicker {...body} />);
    const select = component.container.querySelector("input");
    select && fireEvent.click(select);
    select && fireEvent.change(select, { target: { value: "arge" } });
    const element = component.getByText(`+54 Argentina`);
    element && fireEvent.click(element);
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it("Rendered component use KeyBoard ArrowDown and Enter", () => {
    const ref = { current: {} };
    const mScrollBy = jest.fn();
    Object.defineProperty(ref, "current", {
      set(_current) {
        if (_current) {
          _current.scrollTo = mScrollBy;
        }
        this._current = _current;
      },
      get() {
        return this._current;
      },
    });
    useMockRef.mockReturnValue(ref);
    const body = {
      disabled: false,
      value: "COL",
      name: "label",
    };
    const component = render(<AtomCountryPicker {...body} />);
    let select = component.container.querySelector("input");
    select && fireEvent.click(select);
    select && fireEvent.change(select, { target: { value: "ar" } });
    const element = component.getByText(`+54 Argentina`);
    element &&
      fireEvent.keyDown(element, {
        key: "ArrowDown",
        code: "ArrowDown",
        keyCode: 40,
        charCode: 40,
      });
    element &&
      fireEvent.keyDown(element, {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        charCode: 13,
      });
    select = component.container.querySelector("input");
    expect(select?.placeholder).toBe("+374 Armenia");
  });

  it("Rendered component use KeyBoard ArrowUp and Escape", () => {
    const ref = { current: {} };
    const mScrollBy = jest.fn();
    Object.defineProperty(ref, "current", {
      set(_current) {
        if (_current) {
          _current.scrollTo = mScrollBy;
        }
        this._current = _current;
      },
      get() {
        return this._current;
      },
    });
    useMockRef.mockReturnValue(ref);
    const body = {
      disabled: false,
      value: "COL",
      name: "label",
    };
    const component = render(<AtomCountryPicker {...body} />);
    let select = component.container.querySelector("input");
    select && fireEvent.click(select);
    jest.runOnlyPendingTimers();
    const element = component.getByText(`+57 Colombia`);
    element &&
      fireEvent.keyDown(element, {
        key: "ArrowUp",
        code: "ArrowUp",
        keyCode: 38,
        charCode: 38,
      });
    element &&
      fireEvent.keyDown(element, {
        key: "c",
        code: "c",
        keyCode: 67,
        charCode: 67,
      });
    element &&
      fireEvent.keyDown(element, {
        key: "Escape",
        code: "Escape",
        keyCode: 27,
        charCode: 27,
      });
    select = component.container.querySelector("input");
    expect(select?.placeholder).toBe("+57 Colombia");
  });

  it("Rendered component insert value that is not in the list and press escape", () => {
    const ref = { current: {} };
    const mScrollBy = jest.fn();
    Object.defineProperty(ref, "current", {
      set(_current) {
        if (_current) {
          _current.scrollTo = mScrollBy;
        }
        this._current = _current;
      },
      get() {
        return this._current;
      },
    });
    useMockRef.mockReturnValue(ref);
    const body = {
      disabled: false,
      value: "COL",
      name: "label",
    };
    const component = render(<AtomCountryPicker {...body} />);
    let select = component.container.querySelector("input");
    select && fireEvent.click(select);
    jest.runOnlyPendingTimers();
    select && fireEvent.change(select, { target: { value: "arfshy" } });
    select &&
      fireEvent.keyDown(select, {
        key: "Escape",
        code: "Escape",
        keyCode: 27,
        charCode: 27,
      });
    select = component.container.querySelector("input");
    expect(select?.value).toBe("");
  });

  it("Rendered component use keyboard in extreme", () => {
    const ref = { current: {} };
    const mScrollBy = jest.fn();
    Object.defineProperty(ref, "current", {
      set(_current) {
        if (_current) {
          _current.scrollTo = mScrollBy;
        }
        this._current = _current;
      },
      get() {
        return this._current;
      },
    });
    useMockRef.mockReturnValue(ref);
    const body = {
      disabled: false,
      value: "COL",
      name: "label",
    };
    const component = render(<AtomCountryPicker {...body} />);
    let select = component.container.querySelector("input");
    select && fireEvent.click(select);
    jest.runOnlyPendingTimers();
    select && fireEvent.change(select, { target: { value: "aus" } });
    select &&
      fireEvent.keyDown(select, {
        key: "ArrowUp",
        code: "ArrowUp",
        keyCode: 38,
        charCode: 38,
      });
    select &&
      fireEvent.keyDown(select, {
        key: "ArrowDown",
        code: "ArrowDown",
        keyCode: 40,
        charCode: 40,
      });
    select &&
      fireEvent.keyDown(select, {
        key: "ArrowDown",
        code: "ArrowDown",
        keyCode: 40,
        charCode: 40,
      });
    select = component.container.querySelector("input");
    expect(select?.placeholder).toBe("");
  });
});
