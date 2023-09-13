import React from "react";
import "@testing-library/jest-dom";
import { AtomButtonIcon } from "./index";
import { theme } from "data/dataMx";
import { render, fireEvent } from "@testing-library/react";
import { convertHexToRGBA } from "../mockTest/functions";
import { IProps } from "../ButtonProps";

describe("Button AtomButtonIcon", () => {
  test("Render button icon with text", () => {
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      type: "button",
      icon: "diamond",
    } as const;
    const component = render(<AtomButtonIcon {...body} />);
    component.getByText(body.text);
  });
  test("Render button icon without text", () => {
    const body = {
      disabled: false,
      color: "secondary",
      type: "button",
      icon: "diamond",
      text: "",
      styles: { border: "1px solid red" },
    } as const;
    const component = render(<AtomButtonIcon {...body} />);
    expect(component.container.querySelector("svg")).not.toBe(null);
  });

  test("Render button without width and outline", () => {
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      type: "button",
      icon: "diamond",
    } as const;
    const component = render(<AtomButtonIcon {...body} />);
    component.getByText(body.text);
  });
  test("Render button with width", () => {
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      type: "button",
      width: "144px",
      icon: "diamond",
    } as const;
    const component = render(<AtomButtonIcon {...body} />);
    component.getByText(body.text);
  });
  test("Render button aligned left", () => {
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      type: "button",
      width: "144px",
      icon: "diamond",
      iconAlign: "left",
    } as const;
    const component = render(<AtomButtonIcon {...body} />);
    component.getByText(body.text);
  });
  test("Render button aligned right", () => {
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      type: "button",
      width: "144px",
      icon: "diamond",
      iconAlign: "right",
    } as const;
    const component = render(<AtomButtonIcon {...body} />);
    component.getByText(body.text);
  });
  test("Render button with icon color", () => {
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      type: "button",
      width: "144px",
      icon: "diamond",
      iconAlign: "right",
      iconColor: "red",
    } as const;
    const component = render(<AtomButtonIcon {...body} />);
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
      icon: "diamond",
    } as const;

    const component = render(<AtomButtonIcon {...body} />);
    fireEvent.click(component.getByText(body.text));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Render button primary color", () => {
    const body = {
      disabled: false,
      color: "primary",
      text: "Accept",
      type: "button",
      icon: "diamond",
    } as const;

    const component = render(<AtomButtonIcon {...body} />);
    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.backgroundColor;
    expect(color).toEqual(convertHexToRGBA(theme?.primary ?? "#20BBEC"));
  });

  test("Render button secondary color", () => {
    const body = {
      disabled: false,
      color: "secondary",
      text: "Accept",
      type: "button",
      icon: "diamond",
    } as const;
    const component = render(<AtomButtonIcon {...body} />);
    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.backgroundColor;
    expect(color).toEqual(convertHexToRGBA(theme?.secondary ?? "#FF4141"));
  });

  test("Render button custom color left aligned", () => {
    const body = {
      disabled: false,
      color: "custom",
      text: "Accept",
      type: "button",
      icon: "diamond",
      CustomColor: "tertiary",
      iconAlign: "left",
    } as const;
    const component = render(<AtomButtonIcon {...body} />);
    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.backgroundColor;
    expect(color).toEqual(convertHexToRGBA(theme?.tertiary ?? "#FF8541"));
  });

  test("Render button custom color", () => {
    const body = {
      disabled: false,
      color: "custom",
      text: "Accept",
      type: "button",
      icon: "diamond",
      CustomColor: "tertiary",
    } as const;
    const component = render(<AtomButtonIcon {...body} />);
    const button = document.querySelector("button") as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.backgroundColor;
    expect(color).toEqual(convertHexToRGBA(theme?.tertiary ?? "#FF8541"));
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
    const component = render(<AtomButtonIcon icon="diamond" {...body} />);
    const element = component.getByText(body.text);

    expect(element).toHaveStyle({
      height: "32px",
    });
  });
  test("Button size small shape default", async () => {
    const body: IProps = {
      size: "small",
      disabled: false,
      text: "Accept",
      color: "custom",
      customColor: "senary",
      width: "144px",
      type: "button",
    } as const;
    const component = render(
      <AtomButtonIcon shape="default" icon="diamond" {...body} />
    );
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
    const component = render(<AtomButtonIcon icon="diamond" {...body} />);
    const element = component.getByText(body.text);

    expect(element).toHaveStyle({
      height: "64px",
    });
  });
  test("Button size large shape square", async () => {
    const body: IProps = {
      size: "large",
      disabled: false,
      text: "Accept",
      color: "custom",
      customColor: "senary",
      width: "144px",
      type: "button",
    } as const;
    const component = render(
      <AtomButtonIcon shape="square" icon="diamond" {...body} />
    );
    const element = component.getByText(body.text);

    expect(element).toHaveStyle({
      "border-radius": "0",
    });
  });
  test("Button size large shape default", async () => {
    const body: IProps = {
      size: "large",
      disabled: false,
      text: "Accept",
      color: "custom",
      customColor: "senary",
      width: "144px",
      type: "button",
    } as const;
    const component = render(
      <AtomButtonIcon
        shape="default"
        icon="diamond"
        typeButtonIcon="default"
        iconAlign={"left"}
        {...body}
      />
    );
    const element = component.getByText(body.text);

    expect(element).toHaveStyle({
      "border-radius": "4px",
    });
  });

  test("Button size large shape circle", async () => {
    const body: IProps = {
      size: "large",
      disabled: false,
      text: "Accept",
      color: "custom",
      customColor: "senary",
      width: "144px",
      type: "button",
    } as const;
    const component = render(
      <AtomButtonIcon
        shape="circle"
        icon="diamond"
        typeButtonIcon="ghost"
        {...body}
      />
    );
    const element = component.getByText(body.text);

    expect(element).toHaveStyle({
      "border-radius": "90px",
    });
  });
  test("Button size medium", async () => {
    const body: IProps = {
      size: "medium",
      disabled: false,
      text: "Accept",
      color: "custom",
      customColor: "senary",
      width: "144px",
      type: "button",
    } as const;
    const component = render(
      <AtomButtonIcon icon="diamond" typeButtonIcon="outline" {...body} />
    );
    const element = component.getByText(body.text);

    expect(element).toHaveStyle({
      height: "48px",
    });
  });
  test("Button size medium align left shape circle", async () => {
    const body: IProps = {
      size: "medium",
      disabled: false,
      text: "Accept",
      color: "custom",
      customColor: "senary",
      width: "144px",
      type: "button",
    } as const;
    const component = render(
      <AtomButtonIcon
        icon="diamond"
        iconAlign={"left"}
        shape="circle"
        {...body}
      />
    );
    const element = component.getByText(body.text);

    expect(element).toHaveStyle({
      height: "48px",
    });
  });
});
