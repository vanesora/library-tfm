import React from "react";
import "@testing-library/jest-dom";
import { AtomCaption } from "./index";
import { ITypographyProps } from "../TypographyProps";
import { theme } from "data/dataMx";
import { render } from "@testing-library/react";

describe("[React] AtomCaption", () => {
  it("render component", () => {
    const body: ITypographyProps = {
      size: "large",
      text: "Caption Text",
      color: "neutral700",
      align: "left",
      weight: "bold",
    };
    const component = render(<AtomCaption {...body} />);
    const element = component.getByText(body.text);

    expect(element).toBeTruthy();
  });
  it("render component without color and align", () => {
    const body = {
      text: "Caption Text",
    };
    const component = render(
      <AtomCaption size={"medium"} weight="bold" {...body} />
    );
    const caption = component.container.querySelector("label");
    expect(caption).toHaveStyle({ color: theme.neutral700 });
  });
  it("Render component color", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      color: "neutral700",
    };
    const component = render(<AtomCaption {...props} />);

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
    const component = render(<AtomCaption {...props} />);

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
    const component = render(<AtomCaption {...props} />);

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
    const component = render(<AtomCaption {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-align": "right" });
  });

  it("Render component weight light", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "light",
    };
    const component = render(<AtomCaption {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Light" });
  });

  it("Render component weight medium", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "medium",
    };
    const component = render(<AtomCaption {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Medium" });
  });

  it("Render component weight thin", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "thin",
    };
    const component = render(<AtomCaption {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Thin" });
  });

  it("Render component weight extralight", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "extralight",
    };
    const component = render(<AtomCaption {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-ExtraLight" });
  });

  it("Render component weight regular", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "regular",
    };
    const component = render(<AtomCaption {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Regular" });
  });

  it("Render component weight semibold", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "semibold",
    };
    const component = render(<AtomCaption {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-SemiBold" });
  });

  it("Render component weight bold", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "bold",
    };
    const component = render(<AtomCaption {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-Bold" });
  });

  it("Render component weight extrabold", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "extrabold",
    };
    const component = render(<AtomCaption {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ fontFamily: "Outfit-ExtraBold" });
  });

  it("Render component weight black", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      weight: "black",
    };
    const component = render(<AtomCaption {...props} />);

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
    const component = render(<AtomCaption {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ textAlign: "center" });
  });
  it("Render component style textDecorationLine underline", () => {
    const props: ITypographyProps = {
      text: "testText",
      size: "xlarge",
      styles: { "text-decoration": "underline" },
    };
    const component = render(<AtomCaption {...props} />);

    const element = component.getByText(props.text);

    expect(element).toHaveStyle({ "text-decoration": "underline" });
  });
});
