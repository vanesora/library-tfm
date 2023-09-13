import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { AtomLink } from "./index";

describe("[React] AtomLink", () => {
  it("Rendered component AtomLink TypeIcon noIcon", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink TypeIcon Left", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "Left",
      text: "Test",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink TypeIcon Right", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "Right",
      text: "Test",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink TypeIcon LeftRight", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "LeftRight",
      text: "Test",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink TypeLink section", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "section",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink TypeLink section with icon LeftRight", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "LeftRight",
      text: "Test",
      typeLink: "section",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink TypeLink default", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color primary", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "primary",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color secondary", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "secondary",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom tertiary", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "tertiary",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom quaternary", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "quaternary",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom quinary", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "quinary",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom senary", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "senary",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom dark", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "dark",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom light", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "light",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom neutral", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "neutral",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom neutral align left", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "neutral",
      align: "left",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom neutral align right", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "neutral",
      align: "right",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom neutral align center", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "neutral",
      align: "center",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom neutral align center icon left", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "neutral",
      align: "center",
      nameIconLeft: "cancel",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom neutral align center icon right", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "neutral",
      align: "center",
      nameIconRight: "cancel",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom neutral align center icon left/right", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "neutral",
      align: "center",
      nameIconLeft: "cancel",
      nameIconRight: "cancel",
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom neutral align center icon left/right & disabled", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "neutral",
      align: "center",
      nameIconLeft: "cancel",
      nameIconRight: "cancel",
      disabled: true,
    } as const;
    const component = render(<AtomLink {...props} />);
    component.getByText(props.text);
  });

  it("Rendered component AtomLink Color custom neutral align center icon left/right & disabled & style custom", () => {
    const props = {
      url: "www.google.com",
      typeIcon: "noIcon",
      text: "Test",
      typeLink: "default",
      color: "custom",
      customColor: "neutral",
      align: "center",
      nameIconLeft: "cancel",
      nameIconRight: "cancel",
      disabled: true,
    } as const;
    const component = render(
      <AtomLink {...props} styles={{ fontSize: "12px" }} />
    );
    component.getByText(props.text);
  });
});
