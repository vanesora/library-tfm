import React from "react";
import "@testing-library/jest-dom";
import { AtomButtonOutline } from "./index";
import { render } from "@testing-library/react";
import { theme } from "data/dataMx";
import { convertHexToRGBA } from "../mockTest/functions";

describe("[React] AtomButtonOutline   ", () => {
  test("Render AtomButtonOutline", () => {
    const body = {
      type: "button",
      disabled: false,
      icon: "string",
      color: "secondary",
      text: "Text",
    } as const;
    const component = render(<AtomButtonOutline {...body} />);
    component.getByText(body.text);
  });

  it("Render AtomButtonOutline component not width", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "secondary",
      text: "Accept",
      type: "button",
      styles: { border: "1px solid red" },
    } as const;
    const component = render(<AtomButtonOutline {...body} />);
    const element = component.getByText(body.text) as HTMLButtonElement;
    expect(element).toHaveAttribute("width", "144px");
  });

  it("Render AtomButtonOutline component width", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "secondary",
      text: "Accept",
      type: "button",
      width: "200px",
    } as const;
    const component = render(<AtomButtonOutline {...body} />);
    const element = component.getByText(body.text) as HTMLButtonElement;
    expect(element).toHaveAttribute("width", "200px");
  });

  it("Render AtomButtonOutline component primary", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "primary",
      text: "Accept",
      type: "button",
      outline: "solid",
    } as const;
    const component = render(<AtomButtonOutline {...body} />);

    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.color;
    const backgroundColor = buttonStyle.backgroundColor;
    expect(backgroundColor).toEqual(theme.transparent);
    expect(color).toEqual(convertHexToRGBA(theme.primary));
  });

  it("Render AtomButtonOutline component custom not color", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "custom",
      text: "Accept",
      type: "button",
      outline: "solid",
    } as const;
    const component = render(<AtomButtonOutline {...body} />);

    const button = component.getByText(body.text) as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const backgroundColor = buttonStyle.backgroundColor;
    expect(backgroundColor).toEqual(theme.transparent);
  });

  it("Render AtomButtonOutline component custom with color", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "custom",
      text: "Accept",
      type: "button",
      outline: "solid",
      customColor: "quaternary",
    } as const;
    const component = render(<AtomButtonOutline {...body} />);

    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.color;
    expect(color).toEqual(convertHexToRGBA(theme.quaternary));
  });
  test("Button size small", async () => {
    const body = {
      size: "small",
      disabled: false,
      text: "Accept",
      color: "custom",
      customColor: "senary",
      width: "144px",
      type: "button",
    } as const;
    const component = render(<AtomButtonOutline {...body} />);
    const element = component.getByText(body.text);

    expect(element).toHaveStyle({
      height: "32px",
    });
  });
  test("Button size large", async () => {
    const body = {
      size: "large",
      disabled: false,
      text: "Accept",
      color: "custom",
      customColor: "senary",
      width: "144px",
      type: "button",
    } as const;
    const component = render(<AtomButtonOutline {...body} />);
    const element = component.getByText(body.text);

    expect(element).toHaveStyle({
      height: "64px",
    });
  });
});
