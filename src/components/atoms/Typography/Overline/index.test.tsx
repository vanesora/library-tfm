import React from "react";
import "@testing-library/jest-dom";
import { AtomOverline } from "./index";
import { ITypographyProps } from "../TypographyProps";
import { render } from "@testing-library/react";

describe("[React] AtomOverline", () => {
  it("render component", () => {
    const body: ITypographyProps = {
      text: "Label Text",
      size: "large",
      styles: {},
    };
    const component = render(<AtomOverline weight={"bold"} {...body} />);
    const element = component.getByText(body.text);

    expect(element).toBeTruthy();
  });
  it("Render component color", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      color: "neutral700",
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ color: "#132730" });
  });

  it("Render component align left", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      align: "left",
      styles: { "text-align": "center" },
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "left" });
  });

  it("Render component align center", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      align: "center",
      styles: { "text-align": "right" },
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "center" });
  });

  it("Render component align right", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      align: "right",
      styles: { "text-align": "center" },
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "right" });
  });

  it("Render component weight light", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "light",
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Light" });
  });

  it("Render component weight medium", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "medium",
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Medium" });
  });

  it("Render component weight thin", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "thin",
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Thin" });
  });

  it("Render component weight extralight", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "extralight",
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-ExtraLight" });
  });

  it("Render component weight regular", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "regular",
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Regular" });
  });

  it("Render component weight semibold", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "semibold",
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-SemiBold" });
  });

  it("Render component weight bold", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "bold",
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Bold" });
  });

  it("Render component weight extrabold", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "extrabold",
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-ExtraBold" });
  });

  it("Render component weight black", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "black",
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Black" });
  });

  it("Render component align center ignoring style align left", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      align: "center",
      styles: { justifyContent: "flex-start" },
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ textAlign: "center" });
  });
  it("Render component style textDecorationLine underline", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      styles: { "text-decoration": "underline" },
    };
    const component = render(<AtomOverline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-decoration": "underline" });
  });
});
