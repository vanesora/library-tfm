import React from "react";
import "@testing-library/jest-dom";
import { AtomTruncate, ITruncateProps } from "./index";
import { render } from "@testing-library/react";

describe("[React] AtomTruncate", () => {
  it("Render component", () => {
    const body = {
      text: "Component truncate",
    };
    const component = render(
      <AtomTruncate {...body} weight={"regular"} size={"large"} />
    );
    const element = component.getByText(body.text);

    expect(element).toBeTruthy();
  });
  it("Render component color", () => {
    const props: ITruncateProps = {
      text: "testText",
      size: "xlarge",
      color: "neutral700",
      numberOfLineTruncate: 2,
    };
    const component = render(<AtomTruncate {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ color: "#132730" });
  });
  it("Render component weight light", () => {
    const props: ITruncateProps = {
      text: "testText",
      size: "xlarge",
      weight: "light",
    };
    const component = render(<AtomTruncate {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Light" });
  });

  it("Render component weight medium", () => {
    const props: ITruncateProps = {
      text: "testText",
      size: "xlarge",
      weight: "medium",
    };
    const component = render(<AtomTruncate {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Medium" });
  });

  it("Render component weight thin", () => {
    const props: ITruncateProps = {
      text: "testText",
      size: "xlarge",
      weight: "thin",
    };
    const component = render(<AtomTruncate {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Thin" });
  });

  it("Render component weight extralight", () => {
    const props: ITruncateProps = {
      text: "testText",
      size: "xlarge",
      weight: "extralight",
    };
    const component = render(<AtomTruncate {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-ExtraLight" });
  });

  it("Render component weight regular", () => {
    const props: ITruncateProps = {
      text: "testText",
      size: "xlarge",
      weight: "regular",
    };
    const component = render(<AtomTruncate {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Regular" });
  });

  it("Render component weight semibold", () => {
    const props: ITruncateProps = {
      text: "testText",
      size: "xlarge",
      weight: "semibold",
    };
    const component = render(<AtomTruncate {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-SemiBold" });
  });

  it("Render component weight bold", () => {
    const props: ITruncateProps = {
      text: "testText",
      size: "xlarge",
      weight: "bold",
    };
    const component = render(<AtomTruncate {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Bold" });
  });

  it("Render component weight extrabold", () => {
    const props: ITruncateProps = {
      text: "testText",
      size: "xlarge",
      weight: "extrabold",
    };
    const component = render(<AtomTruncate {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-ExtraBold" });
  });

  it("Render component weight black", () => {
    const props: ITruncateProps = {
      text: "testText",
      size: "xlarge",
      weight: "black",
    };
    const component = render(<AtomTruncate {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Black" });
  });
  it("Render component style textDecorationLine underline", () => {
    const props: ITruncateProps = {
      text: "testText",
      size: "xlarge",
      styles: { "text-decoration": "underline" },
    };
    const component = render(<AtomTruncate {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-decoration": "underline" });
  });
});
