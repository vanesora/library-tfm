import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { AtomTag } from "./index";
import { convertHexToRGBA } from "../Buttons/mockTest/functions";
import { theme } from "data/dataMx";

describe("[React] AtomTag", () => {
  test("Render Tag", () => {
    const body = {
      text: "Accept",
    } as const;

    const component = render(<AtomTag {...body} />);
    expect(component.getByText(body.text).innerHTML).toBe(body.text);
  });

  test("Render Tag with width", () => {
    const body = {
      text: "Accept",
      width: 130,
    } as const;

    const component = render(<AtomTag {...body} />);
    expect(component.getByText(body.text).innerHTML).toBe(body.text);
  });

  test("Render Tag with background color and color", () => {
    const body = {
      text: "Accept",
      backgroundColor: "neutral700",
      textColor: "neutral100",
    } as const;

    const component = render(<AtomTag {...body} />);
    const container = component.container.querySelector(
      "div"
    ) as HTMLDivElement;
    const containerStyle = window.getComputedStyle(container);
    const backgroundColor = containerStyle.backgroundColor;
    const color = containerStyle.color;
    expect(backgroundColor).toBe(convertHexToRGBA(theme.neutral700));
    expect(color).toBe(convertHexToRGBA(theme.neutral100));
  });

  test("Render Tag small", () => {
    const body = {
      text: "Accept",
      backgroundColor: "neutral700",
      textColor: "neutral100",
      size: "small",
    } as const;

    const component = render(<AtomTag {...body} />);
    const container = component.container.querySelector(
      "div"
    ) as HTMLDivElement;
    const containerStyle = window.getComputedStyle(container);
    const height = containerStyle.height;
    expect(height).toBe("8px");
  });

  test("Render Tag medium", () => {
    const body = {
      text: "Accept",
      backgroundColor: "neutral700",
      textColor: "neutral100",
      size: "medium",
    } as const;

    const component = render(<AtomTag {...body} />);
    const container = component.container.querySelector(
      "div"
    ) as HTMLDivElement;
    const containerStyle = window.getComputedStyle(container);
    const height = containerStyle.height;
    expect(height).toBe("24px");
  });

  test("Render Tag large", () => {
    const body = {
      text: "Accept",
      backgroundColor: "neutral700",
      textColor: "neutral100",
      size: "large",
    } as const;

    const component = render(<AtomTag {...body} />);
    const container = component.container.querySelector(
      "div"
    ) as HTMLDivElement;
    const containerStyle = window.getComputedStyle(container);
    const height = containerStyle.height;
    expect(height).toBe("28px");
  });

  test("Render Tag with icon", () => {
    const body = {
      text: "Accept",
      backgroundColor: "neutral700",
      textColor: "neutral100",
      size: "large",
      iconLeft: "diamond",
      displayIconLeft: true,
    } as const;
    const component = render(<AtomTag {...body} />);
    expect(component.container.querySelector("svg")).not.toBe(null);
  });

  test("Render Tag with double icons", () => {
    const body = {
      text: "Accept",
      backgroundColor: "neutral700",
      textColor: "neutral100",
      size: "large",
      iconLeft: "diamond",
      iconRight: "diamond",
      displayIconLeft: true,
      displayIconRight: true,
    } as const;
    const component = render(<AtomTag {...body} />);
    expect(component.container.querySelectorAll("svg")).toHaveLength(2);
  });

  test("Render Tag with invalid size and default sizes", () => {
    const body = {
      text: "Accept",
      backgroundColor: "neutral700",
      textColor: "neutral100",
      iconLeft: "diamond",
      iconRight: "diamond",
      displayIconLeft: true,
      displayIconRight: true,
      size: "ab", // invalid size
    } as const;
    // @ts-ignore
    const component = render(<AtomTag {...body} />);
    expect(component.getByText(body.text).innerHTML).toBe(body.text);
  });
});
