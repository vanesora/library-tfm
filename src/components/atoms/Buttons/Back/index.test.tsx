import React from "react";
import "@testing-library/jest-dom";
import { AtomButtonBack } from "./index";
import { render, fireEvent } from "@testing-library/react";
import { theme } from "data/dataMx";
import { convertHexToRGBA } from "../mockTest/functions";

describe("[React] AtomButtonBack   ", () => {
  test("Render AtomButtonBack", () => {
    const body = {
      disabled: false,
      text: "Text",
    } as const;
    const component = render(<AtomButtonBack {...body} />);
    component.getByText(body.text);
    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.color;
    expect(color).toEqual(convertHexToRGBA(theme.neutral600 ?? "#607781"));

    const backgroundColor = buttonStyle.backgroundColor;
    expect(backgroundColor).toEqual(theme.transparent);
  });

  it("Render AtomButtonBack component not width", () => {
    const body = {
      disabled: false,
      text: "Accept",
      styles: { border: "1px solid red" },
      arrowColor: "primary100",
    } as const;
    const component = render(<AtomButtonBack {...body} />);
    const element = component.getByText(body.text);
    expect(element).toHaveStyle({ width: 140 });
  });

  it("Render AtomButtonBack component width", () => {
    const body = {
      disabled: false,
      text: "Accept",
      width: "200px",
    } as const;
    const component = render(<AtomButtonBack {...body} />);
    const element = component.getByText(body.text);
    expect(element).toHaveStyle({ width: 200 });
  });

  it("Render AtomButtonBack component minWidth", () => {
    const body = {
      disabled: false,
      text: "Accept",
      width: "100px",
      minWidth: "150px",
    } as const;
    const component = render(<AtomButtonBack {...body} />);
    const element = component.getByText(body.text);
    expect(element).toHaveStyle({ width: 150 });
  });

  it("Render AtomButtonBack component iconSize", () => {
    const body = {
      disabled: false,
      text: "Accept",
      width: "100px",
      minWidth: "150px",
      iconSize: 12,
    } as const;
    const component = render(<AtomButtonBack {...body} />);
    const element = component.getByText(body.text);
    expect(element).toHaveStyle({ width: 150 });
  });

  it("Render AtomButtonBack focus and click disabled", () => {
    const handlePress = jest.fn();
    const body = {
      disabled: true,
      text: "Accept",
      onClick: handlePress,
    } as const;
    const component = render(<AtomButtonBack {...body} />);
    const element = component.getByText(body.text);
    fireEvent.click(element);
    expect(handlePress).toHaveBeenCalledTimes(0);
  });

  it("Render AtomButtonBack focus and click", () => {
    const handlePress = jest.fn();
    const body = {
      disabled: false,
      text: "Accept",
      onClick: handlePress,
    } as const;
    const component = render(<AtomButtonBack {...body} />);
    const element = component.getByText(body.text);
    fireEvent.focus(element);
    fireEvent.click(element);
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
