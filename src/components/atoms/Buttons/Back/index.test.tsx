import "@testing-library/jest-dom";
import { render, fireEvent, screen  } from "@testing-library/react";
import { convertHexToRGBA } from "../mockTest/functions";
import { AtomButtonBack } from ".";

describe("[React] AtomButtonBack   ", () => {
  test("Render AtomButtonBack", () => {
    const body = {
      disabled: false,
      text: "Text",
    } as const;
    render(<AtomButtonBack {...body} />);
    screen.getByText(body.text);
    const button = screen.getByRole('button') as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.color;
    expect(color).toEqual(convertHexToRGBA("#607781"));

    const backgroundColor = buttonStyle.backgroundColor;
    expect(backgroundColor).toEqual('transparent');
  });

  it("Render AtomButtonBack component not width", () => {
    const body = {
      disabled: false,
      text: "Accept",
      styles: { border: "1px solid red" },
      arrowColor: "primary100",
    } as const;
    render(<AtomButtonBack {...body} />);
    const element = screen.getByText(body.text);
    expect(element).toHaveStyle({ width: 140 });
  });

  it("Render AtomButtonBack component width", () => {
    const body = {
      disabled: false,
      text: "Accept",
      width: "200px",
    } as const;
    render(<AtomButtonBack {...body} />);
    const element = screen.getByText(body.text);
    expect(element).toHaveStyle({ width: 200 });
  });

  it("Render AtomButtonBack component minWidth", () => {
    const body = {
      disabled: false,
      text: "Accept",
      width: "100px",
      minWidth: "150px",
    } as const;
    render(<AtomButtonBack {...body} />);
    const element = screen.getByText(body.text);
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
    render(<AtomButtonBack {...body} />);
    const element = screen.getByText(body.text);
    expect(element).toHaveStyle({ width: 150 });
  });

  it("Render AtomButtonBack focus and click disabled", () => {
    const handlePress = jest.fn();
    const body = {
      disabled: true,
      text: "Accept",
      onClick: handlePress,
    } as const;
    render(<AtomButtonBack {...body} />);
    const element = screen.getByText(body.text);
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
    const view = render(<AtomButtonBack {...body} />);
    const element = screen.getByText(body.text);
    fireEvent.focus(element);
    fireEvent.click(element);
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
