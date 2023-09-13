import React from "react";
import "@testing-library/jest-dom";
import { AtomButtonGhost } from "./index";
import { render } from "@testing-library/react";
import { theme } from "data/dataMx";
import { convertHexToRGBA } from "../mockTest/functions";
import { IProps } from "../ButtonProps";

describe("[React] AtomButtonGhost  ", () => {
  test("Render button", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "secondary",
      text: "Accept",
      type: "button",
    } as const;
    const component = render(<AtomButtonGhost {...body} />);
    component.getByText(body.text);
  });

  it("Render button component not width", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "secondary",
      text: "Accept",
      type: "button",
    } as const;
    const component = render(<AtomButtonGhost {...body} />);
    const element = component.getByText(body.text) as HTMLButtonElement;
    expect(element).toHaveAttribute("width", "144px");
  });

  it("Render button component width", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "secondary",
      text: "Accept",
      width: "200px",
      type: "button",
    } as const;
    const component = render(<AtomButtonGhost {...body} />);
    const element = component.getByText(body.text) as HTMLButtonElement;
    expect(element).toHaveAttribute("width", "200px");
  });

  it("Render button component primary", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "primary",
      text: "Accept",
      type: "button",
      outline: "solid",
    } as const;
    const component = render(<AtomButtonGhost {...body} />);

    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.color;
    expect(color).toEqual(convertHexToRGBA(theme.primary ?? "#FFFFFF"));

    const backgroundColor = buttonStyle.backgroundColor;
    expect(backgroundColor).toEqual(theme.transparent);
  });

  it("Render button component custom not color", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "custom",
      text: "Accept",
      type: "button",
      styles: { border: "1px solid red" },
    } as const;
    const component = render(<AtomButtonGhost {...body} />);

    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.color;
    expect(color).toEqual(convertHexToRGBA(theme.tertiary ?? "#FFFFFF"));
  });

  it("Render button component custom with color", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "custom",
      text: "Accept",
      type: "button",
      customColor: "tertiary",
    } as const;
    const component = render(<AtomButtonGhost {...body} />);

    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.color;
    expect(color).toEqual(convertHexToRGBA(theme.tertiary ?? "#FFFFFF"));
  });

  test("Button size small", async () => {
    const body: IProps = {
      size: "small",
      disabled: false,
      text: "Accept",
      color: "custom",
      customColor: "senary",
      width: "144px",
      type: "button",
    } as const;
    const component = render(<AtomButtonGhost {...body} />);
    const element = component.getByText(body.text);

    expect(element).toHaveStyle({
      height: "32px",
    });
  });
  test("Button size large", async () => {
    const body: IProps = {
      size: "large",
      disabled: false,
      text: "Accept",
      color: "custom",
      customColor: "senary",
      width: "144px",
      type: "button",
    } as const;
    const component = render(<AtomButtonGhost {...body} />);
    const element = component.getByText(body.text);

    expect(element).toHaveStyle({
      height: "64px",
    });
  });
});
