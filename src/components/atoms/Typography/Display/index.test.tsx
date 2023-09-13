import React from "react";
import "@testing-library/jest-dom";
import { AtomDisplay } from "./index";
import { ITypographyProps } from "../TypographyProps";
import { render } from "@testing-library/react";

describe("[React] AtomDisplay", () => {
  it("Render component", () => {
    const props = {
      size: "xlarge",
      align: "center",
      text: "Text",
      color: "secondary500",
      weight: "thin",
      styles: {},
    } as const;

    const component = render(<AtomDisplay {...props} />);
    const element = component.getByText(props.text);

    expect(element).toBeTruthy();
  });
  it("Render component size xlarge", () => {
    const props = {
      size: "xlarge",
      align: "center",
      text: "Text",
      color: "secondary500",
      weight: "thin",
      styles: {},
    } as const;
    const component = render(<AtomDisplay {...props} />);

    const element = component.getByText(props.text);
    expect(element).toHaveStyle({ "font-size": "48px" });
    expect(element).toHaveStyle({ "font-family": "Outfit-Thin" });
  });
  it("Render component size large", () => {
    const props = {
      size: "large",
      align: "center",
      text: "Text",
      color: "secondary500",
      weight: "thin",
      styles: {},
    } as const;
    const component = render(<AtomDisplay {...props} />);

    const element = component.getByText(props.text);
    expect(element).toHaveStyle({ "font-size": "46px" });
    expect(element).toHaveStyle({ "font-family": "Outfit-Thin" });
  });
  it("Render component size medium", () => {
    const props = {
      size: "medium",
      align: "center",
      text: "Text",
      color: "secondary500",
      weight: "thin",
      styles: {},
    } as const;
    const component = render(<AtomDisplay {...props} />);

    const element = component.getByText(props.text);
    expect(element).toHaveStyle({ "font-size": "42px" });
  });
  it("Render component size small", () => {
    const props = {
      size: "small",
      align: "center",
      text: "Text",
      color: "secondary500",
      weight: "thin",
      styles: {},
    } as const;
    const component = render(<AtomDisplay {...props} />);

    const element = component.getByText(props.text);
    expect(element).toHaveStyle({ "font-size": "40px" });
  });
  it("Render component size xsmall", () => {
    const props = {
      size: "xsmall",
      align: "center",
      text: "Text",
      color: "secondary500",
      weight: "thin",
      styles: {},
    } as const;
    const component = render(<AtomDisplay {...props} />);

    const element = component.getByText(props.text);
    expect(element).toHaveStyle({ "font-size": "38px" });
  });

  it("Render component with no align, color & weight provided", () => {
    const props: ITypographyProps = {
      size: "large",
      text: "Text",
      weight: "bold",
      styles: {},
    } as const;
    const component = render(<AtomDisplay {...props} />);
    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "center" });
    expect(element).toHaveStyle({ color: "#132730" });
    expect(element).toHaveStyle({ "font-family": "Outfit-Bold" });
  });

  it("Render component with Outfit-Thin font family", () => {
    const props = {
      size: "large",
      text: "Text",
      align: "center",
      weight: "thin",
      styles: {},
    } as const;
    const component = render(<AtomDisplay {...props} />);
    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "font-family": "Outfit-Thin" });
  });

  it("Render component with Outfit-ExtraLight font family", () => {
    const props = {
      size: "xlarge",
      text: "Text",
      align: "center",
      weight: "extralight",
      styles: {},
    } as const;
    const component = render(<AtomDisplay {...props} />);
    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "font-family": "Outfit-ExtraLight" });
  });

  it("Render component with Outfit-ExtraLight font family", () => {
    const props = {
      size: "large",
      text: "Text",
      align: "center",
      weight: "extralight",
      styles: {},
    } as const;
    const component = render(<AtomDisplay {...props} />);
    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "font-family": "Outfit-ExtraLight" });
  });
  it("Render component with Outfit-ExtraLight font family", () => {
    const props = {
      size: "medium",
      text: "Text",
      align: "center",
      weight: "extralight",
      styles: {},
    } as const;
    const component = render(<AtomDisplay {...props} />);
    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "font-family": "Outfit-ExtraLight" });
  });
  it("Render component with Outfit-ExtraLight font family", () => {
    const props = {
      size: "small",
      text: "Text",
      align: "center",
      weight: "extralight",
      styles: {},
    } as const;
    const component = render(<AtomDisplay {...props} />);
    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "font-family": "Outfit-ExtraLight" });
  });
  it("Render component with Outfit-ExtraLight font family", () => {
    const props = {
      size: "xsmall",
      text: "Text",
      align: "center",
      weight: "extralight",
      styles: {},
    } as const;
    const component = render(<AtomDisplay {...props} />);
    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "font-family": "Outfit-ExtraLight" });
  });
  it("Render component align center ignoring style align left", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      align: "center",
      styles: { justifyContent: "flex-start" },
    };
    const component = render(<AtomDisplay {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ textAlign: "center" });
  });
  it("Render component style textDecorationLine underline", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      styles: { "text-decoration": "underline" },
    };
    const component = render(<AtomDisplay {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-decoration": "underline" });
  });
  it("Render component color", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      color: "neutral700",
    };
    const component = render(<AtomDisplay {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ color: "#132730" });
  });
});
