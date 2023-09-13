import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IBannerProps, MoleculeBanner } from "./index";

describe("[React] MoleculeBanner", () => {
  it("rendered component", () => {
    const body = {
      image:
        "https://prod-drupal.abi-rewards.de/sites/g/files/wnfebl4411/files/2022-04/join1_0%20%281%29.png",
      title: "$1 spent = 10 points",
      text: "Buy beer at ANY participating establishment, scan the receipt and earn up 10 points for every dollar.",
    };
    const component = render(<MoleculeBanner {...body} textPosition="left" />);
    expect(component).toBeTruthy();
  });
  it("rendered component with text on right position", () => {
    const body: IBannerProps = {
      textPosition: "right",
      image:
        "https://prod-drupal.abi-rewards.de/sites/g/files/wnfebl4411/files/2022-04/join1_0%20%281%29.png",
      title: "$1 spent = 10 points",
      text: "Buy beer at ANY participating establishment, scan the receipt and earn up 10 points for every dollar.",
      titleColor: "primary",
    };
    const component = render(<MoleculeBanner {...body} />);
    expect(component).toBeTruthy();
  });
});
