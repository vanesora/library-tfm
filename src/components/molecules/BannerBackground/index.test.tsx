import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MoleculeBannerBackground } from "./index";
import { IBannerBackgroundProps } from "./BannerBackgroundProps";

describe("[React] BannerBackground", () => {
  it("redered component", () => {
    const body: IBannerBackgroundProps = {
      title: "Banner Title",
      textColor: "neutral100",
    };
    const component = render(<MoleculeBannerBackground {...body} />);

    expect(component).toBeTruthy();
  });
  it("redered component with all props", () => {
    const mockHandler = jest.fn();
    const body: IBannerBackgroundProps = {
      title: "Banner Title",
      textColor: "neutral100",
      iconName: "earn_beer",
      textAlign: "left",
      height: "230px",
      backgroundImage:
        "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
      description:
        "You can earn points in different ways here at My cooler, simply by logging in, answering trivia, completing challenges, inviting friends, etc.",
      buttonBackground: "primary",
      buttonBackgroundCustom: "tertiary",
      buttonText: "Here",
      onClick: mockHandler,
      style: {},
    } as const;
    const component = render(<MoleculeBannerBackground {...body} />);

    expect(component).toBeTruthy();
  });
  it("redered component, banner with button and gradient", () => {
    const mockHandler = jest.fn();
    const body = {
      title: "Banner Title",
      textColor: "neutral100",
      buttonBackground: "primary",
      buttonBackgroundCustom: "tertiary",
      buttonText: "Here",
      onClick: mockHandler,
    } as const;
    const component = render(
      <MoleculeBannerBackground
        {...body}
        background={["neutral100", "neutral200"]}
      />
    );

    expect(component).toBeTruthy();
    component.getByText(body.buttonText);
  });
});
