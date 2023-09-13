import React from "react";
import "@testing-library/jest-dom";
import { AtomButtonDefault } from "./index";
import { render, fireEvent } from "@testing-library/react";
import { convertHexToRGBA } from "../mockTest/functions";
import { theme } from "data/dataMx";
import { IProps } from "../ButtonProps";

describe("Btn Default", () => {
  test("Render button", () => {
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      type: "button",
      width: "144px",
    } as const;
    const component = render(<AtomButtonDefault {...body} />);
    component.getByText(body.text);
  });
  test("Render button without width and outline", () => {
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      type: "button",
    } as const;
    const component = render(<AtomButtonDefault {...body} />);
    component.getByText(body.text);
  });
  test("Button clicked", () => {
    const handleClick = jest.fn();
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      onClick: handleClick,
      type: "button",
      width: "144px",
    } as const;

    const component = render(<AtomButtonDefault {...body} />);
    fireEvent.click(component.getByText(body.text));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Render button primary color", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "primary",
      text: "Accept",
      type: "button",
      width: "144px",
    } as const;

    const component = render(<AtomButtonDefault {...body} />);
    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.backgroundColor;
    expect(color).toEqual(convertHexToRGBA(theme?.primary ?? "#20BBEC"));
  });

  test("Render button secondary color", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "secondary",
      text: "Accept",
      width: "144px",
      type: "button",
    } as const;
    const component = render(<AtomButtonDefault {...body} />);
    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.backgroundColor;
    expect(color).toEqual(convertHexToRGBA(theme?.secondary ?? "#FF4141"));
  });
  test("Render button custom color", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "custom",
      text: "Accept",
      width: "144px",
      type: "button",
      customColor: "tertiary",
      styles: { border: "1px solid red" },
    } as const;
    const component = render(<AtomButtonDefault {...body} />);
    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.backgroundColor;
    expect(color).toEqual(convertHexToRGBA(theme?.tertiary ?? "#ff8541"));
  });
  test("Render button custom style light", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "custom",
      text: "Accept",
      width: "144px",
      type: "button",
      customColor: "light",
    } as const;
    const component = render(<AtomButtonDefault {...body} />);
    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.backgroundColor;
    expect(color).toEqual(convertHexToRGBA(theme?.neutral100 ?? "#ffffff"));
  });
  test("Render button custom style dark", () => {
    const body = {
      disabled: false,
      icon: "string",
      color: "custom",
      text: "Accept",
      width: "144px",
      type: "button",
      customColor: "dark",
    } as const;
    const component = render(<AtomButtonDefault {...body} />);
    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.backgroundColor;
    expect(color).toEqual(convertHexToRGBA(theme?.neutral700));
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
    const component = render(<AtomButtonDefault {...body} />);
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
    const component = render(<AtomButtonDefault {...body} />);
    const element = component.getByText(body.text);

    expect(element).toHaveStyle({
      height: "64px",
    });
  });
});
