/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import { theme } from "data/dataMx";
import { IChallengeProgressProps, OrganismChallengeProgress } from ".";
import { convertHexToRGBA } from "react/atoms/Buttons/mockTest/functions";

describe("[React] OrganismChallengeProgress", () => {
  const props: IChallengeProgressProps = {
    data: [
      { challengeStatus: false },
      { challengeStatus: true },
      { challengeStatus: false },
      { challengeStatus: false },
    ],
    textReward: "BUD LIGHT NFL VEND ZONE ACCESS",
    title: "COMPLETE CHALLENGES TO UNLOCK MORE POINTS",
    backgroundImage:
      "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
    backgroundColor: "primary",
    sizeIcon: 80,
    colorIcon: "neutral100",
  };

  it("Render component ChallengeProgress with required props", () => {
    const component = render(
      <OrganismChallengeProgress
        data={props.data}
        title={props.title}
        textReward={props.textReward}
      />
    );
    expect(component).toBeDefined();
  });

  it("Render component ChallengeProgress with background image", () => {
    const component = render(
      <OrganismChallengeProgress
        data={props.data}
        backgroundImage={props.backgroundImage}
        title={props.title}
        textReward={props.textReward}
      />
    );
    const backgroundImage = component.container.querySelector(
      "img"
    ) as HTMLImageElement;
    expect(backgroundImage.src).toBe(
      "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
    );
  });

  it("Render component ChallengeProgress with background color", () => {
    const component = render(
      <OrganismChallengeProgress
        data={props.data}
        backgroundColor={props.backgroundColor}
        title={props.title}
        textReward={props.textReward}
      />
    );
    const container = component.container.querySelector(
      "div"
    ) as HTMLDivElement;
    const containerStyle = window.getComputedStyle(container);
    const backgroundColor = containerStyle.backgroundColor;
    expect(backgroundColor).toBe(convertHexToRGBA(theme.primary));
  });

  it("Render component ChallengeProgress, icons has default color and height", () => {
    const component = render(
      <OrganismChallengeProgress
        data={props.data}
        title={props.title}
        textReward={props.textReward}
      />
    );
    const icon = component.container.querySelector("svg") as SVGSVGElement;
    expect(icon.getAttribute("fill")).not.toBeNull;
    expect(icon.getAttribute("height")).toBe("91");
  });

  it("Render component ChallengeProgress, icons has custom color and height", () => {
    const component = render(
      <OrganismChallengeProgress
        data={props.data}
        title={props.title}
        textReward={props.textReward}
        colorIcon={props.colorIcon}
        sizeIcon={props.sizeIcon}
      />
    );
    const icon = component.container.querySelector("svg") as SVGSVGElement;
    expect(icon.getAttribute("fill")).toBe(theme.neutral100);
    expect(icon.getAttribute("height")).toBe("80");
  });
});
