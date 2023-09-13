import React from "react";
import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import { AtomCountDown } from "./index";

jest.useFakeTimers();

describe("[React] AtomCountDown", () => {
  it("Rendered component", async () => {
    const mockCallback = jest.fn();
    const props = {
      size: 150,
      dataStart: "2022/01/01 16:00:00",
      dataFinish: "2022/01/01 16:00:30",
      strokeBgColor: "neutral500",
      strokeColor: "quaternary",
      strokeWidth: 6,
      onFinish: () => mockCallback,
    } as const;

    const component = render(<AtomCountDown {...props} />);

    act(() => {
      jest.runAllTimers();
    });

    expect(component).toBeTruthy();
  });
  it("Rendered component", async () => {
    const mockCallback = jest.fn();
    const props = {
      size: 150,
      dataStart: "2022/01/01 16:00:00",
      dataFinish: "2022/01/01 16:00:01",
      strokeBgColor: "neutral500",
      strokeColor: "quaternary",
      strokeWidth: 6,
      onFinish: jest.fn(),
    } as const;

    const component = render(<AtomCountDown {...props} />);

    act(() => {
      jest.runAllTimers();
    });

    expect(component).toBeTruthy();
  });
});
