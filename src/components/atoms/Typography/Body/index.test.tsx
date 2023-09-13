import React from "react";
import "@testing-library/jest-dom";
import { AtomBody } from "./index";
import { ITypographyProps } from "../TypographyProps";
import { render } from "@testing-library/react";
import { theme } from "data/dataMx";

describe("[React] AtomBody", () => {
  it("Render component", () => {
    const props: ITypographyProps = {
      size: "xlarge",
      text: "otrotexto",
      color: "secondary500",
      weight: "light",
      align: "center",
      styles: {},
    } as const;
    const component = render(<AtomBody {...props} />);
    component.getByText(props.text);
  });

  it("Render component size xlarge", () => {
    const props = {
      size: "xlarge",
      text: "testText",
      color: "secondary500",
      align: "center",
      styles: {},
    } as const;
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);
    expect(element).toHaveStyle({ "font-size": "18px" });
  });

  it("Render component size large", () => {
    const props = {
      size: "large",
      text: "testText",
      color: "secondary500",
      align: "center",
      styles: {},
    } as const;
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);
    // const styles = getComputedStyle(element);

    expect(element).toHaveStyle({ "font-size": "16px" });
  });
  it("Render component size medium", () => {
    const props = {
      size: "medium",
      text: "testText",
      color: "secondary500",
      align: "center",
      styles: {},
    } as const;
    const component = render(<AtomBody {...props} />);
    const element = component.getByText(props.text);
    expect(element).toHaveStyle({ "font-size": "14px" });
  });
  it("Render component size small", () => {
    const props = {
      size: "small",
      text: "testText",
      color: "secondary500",
      align: "center",
      styles: {},
    } as const;
    const component = render(<AtomBody {...props} />);
    const element = component.getByText(props.text);
    expect(element).toHaveStyle({ "font-size": "12px" });
  });
  it("Render component size xsmall", () => {
    const props = {
      size: "xsmall",
      text: "testText",
      color: "secondary500",
      align: "center",
      styles: {},
    } as const;
    const component = render(<AtomBody {...props} />);
    const element = component.getByText(props.text);
    expect(element).toHaveStyle({ "font-size": "11px" });
  });
  it("Render component color", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      color: "neutral700",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ color: theme.neutral700 });
  });

  it("Render component color condition large", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "large",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ color: theme.neutral700 });
  });

  it("Render component color condition small", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "small",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ color: theme.neutral700 });
  });

  it("Render component color condition xsmall", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xsmall",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ color: theme.neutral700 });
  });

  it("Render component align left", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      align: "left",
      styles: { "text-align": "center" },
    };
    const component = render(<AtomBody {...props} />);

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
    const component = render(<AtomBody {...props} />);

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
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "right" });
  });

  it("Render component weight light", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "light",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Light" });
  });

  it("Render component weight medium", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "medium",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Medium" });
  });

  it("Render component weight thin", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "thin",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Thin" });
  });

  it("Render component weight extralight", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "extralight",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-ExtraLight" });
  });

  it("Render component weight regular", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "regular",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Regular" });
  });

  it("Render component weight semibold", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "semibold",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-SemiBold" });
  });

  it("Render component weight bold", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "bold",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Bold" });
  });

  it("Render component weight extrabold", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "extrabold",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-ExtraBold" });
  });

  it("Render component weight black", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "black",
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Black" });
  });

  it("Render component align center ignoring style align left", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      align: "center",
      styles: { justifyContent: "lefth" },
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ textAlign: "center" });
  });
  it("Render component style textDecorationLine underline", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      styles: { "text-decoration": "underline" },
    };
    const component = render(<AtomBody {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-decoration": "underline" });
  });
});
