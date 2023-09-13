import React from "react";
import "@testing-library/jest-dom";
import { AtomHeadline } from "./index";
import { ITypographyProps } from "../TypographyProps";
import { render } from "@testing-library/react";

describe("[React] AtomHeadline", () => {
  it("Render component", () => {
    const props = {
      size: "xlarge",
      align: "center",
      text: "Text",
      color: "secondary500",
      weight: "thin",
      styles: {},
    } as const;

    const component = render(<AtomHeadline {...props} />);

    expect(component).toBeTruthy();
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

    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "font-size": "28px" });
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

    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "font-size": "22px" });
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

    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "font-size": "16px" });
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

    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "font-size": "14px" });
  });
  it("Render component no align & weight provided", () => {
    const props: ITypographyProps = {
      size: "large",
      text: "Text",
      color: "secondary500",
    } as const;

    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "center" });
    expect(element).toHaveStyle({ "font-family": "Outfit-Thin" });
  });
  it("Render component size xlarge, no color provided", () => {
    const props = {
      size: "xlarge",
      align: "center",
      text: "Text",
      weight: "thin",
      styles: {},
    } as const;

    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ color: "#132730" });
  });
  it("Render component size  large, no color provided", () => {
    const props = {
      size: "large",
      align: "center",
      text: "Text",
      weight: "thin",
      styles: {},
    } as const;

    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ color: "#132730" });
  });
  it("Render component size medium, no color provided", () => {
    const props = {
      size: "medium",
      align: "center",
      text: "Text",
      weight: "thin",
      styles: {},
    } as const;

    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ color: "#132730" });
  });
  it("Render component size small, no color provided", () => {
    const props = {
      size: "small",
      align: "center",
      text: "Text",
      weight: "thin",
      styles: {},
    } as const;

    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ color: "#132730" });
  });
  it("Render component size  xsmall, no color provided", () => {
    const props = {
      size: "xsmall",
      align: "center",
      text: "Text",
      weight: "thin",
      styles: {},
    } as const;

    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ color: "#132730" });
  });
  it("Render component font size 32px & no color provided", () => {
    const props: ITypographyProps = {
      size: "large",
      align: "center",
      text: "Text",
      weight: "thin",
      styles: {},
    } as const;

    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "font-size": "28px" });
    expect(element).toHaveStyle({ color: "#132730" });
  });
  it("Render component align left", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      align: "left",
      styles: { "text-align": "center" },
    };
    const component = render(<AtomHeadline {...props} />);

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
    const component = render(<AtomHeadline {...props} />);

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
    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "right" });
  });

  it("Render component weight light", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "light",
    };
    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Light" });
  });

  it("Render component weight medium", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "medium",
    };
    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Medium" });
  });

  it("Render component weight thin", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "thin",
    };
    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Thin" });
  });

  it("Render component weight extralight", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "extralight",
    };
    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-ExtraLight" });
  });

  it("Render component weight regular", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "regular",
    };
    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Regular" });
  });

  it("Render component weight semibold", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "semibold",
    };
    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-SemiBold" });
  });

  it("Render component weight bold", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "bold",
    };
    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Bold" });
  });

  it("Render component weight extrabold", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "extrabold",
    };
    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-ExtraBold" });
  });

  it("Render component weight black", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "black",
    };
    const component = render(<AtomHeadline {...props} />);

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
    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ textAlign: "center" });
  });
  it("Render component style textDecorationLine underline", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      styles: { "text-decoration": "underline" },
    };
    const component = render(<AtomHeadline {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-decoration": "underline" });
  });
});
