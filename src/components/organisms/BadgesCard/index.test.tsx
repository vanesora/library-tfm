/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import { OrganismBadgeCard, IBadgeCardProps } from "./index";

describe("[React] OrganismBadgeCard", () => {
  it("Rendered component", () => {
    const props: IBadgeCardProps = {
      img: "image.png",
      imgAlt: "Logo",
      badges: [
        {
          badgeText: "Rookie",
          badgeStatus: "completed",
          image: "https://i.ibb.co/0rW958L/cheers-2.png",
        },
      ],
    };
    const component = render(<OrganismBadgeCard {...props} />);
    expect(component).toBeTruthy();
  });

  it("Rendered component with img width", () => {
    const props: IBadgeCardProps = {
      img: "image.png",
      imgAlt: "Logo",
      badges: [
        {
          badgeText: "Rookie",
          badgeStatus: "completed",
          image: "https://i.ibb.co/0rW958L/cheers-2.png",
        },
      ],
      imgWidth: "100%",
    };
    const component = render(<OrganismBadgeCard {...props} />);
    expect(component).toBeTruthy();
  });

  it("Rendered component with img Height", () => {
    const props: IBadgeCardProps = {
      img: "image.png",
      imgAlt: "Logo",
      badges: [
        {
          badgeText: "Rookie",
          badgeStatus: "completed",
          image: "https://i.ibb.co/0rW958L/cheers-2.png",
        },
      ],
      imgHeight: "100%",
    };
    const component = render(<OrganismBadgeCard {...props} />);
    expect(component).toBeTruthy();
  });

  it("Rendered component with card Width", () => {
    const props: IBadgeCardProps = {
      cardWidth: "100%",
      img: "image.png",
      imgAlt: "Logo",
      badges: [
        {
          badgeText: "Rookie",
          badgeStatus: "completed",
          image: "https://i.ibb.co/0rW958L/cheers-2.png",
        },
      ],
    };
    const component = render(<OrganismBadgeCard {...props} />);
    expect(component).toBeTruthy();
  });

  it("Rendered component with card Height", () => {
    const props: IBadgeCardProps = {
      cardHeight: "100%",
      img: "image.png",
      imgAlt: "Logo",
      badges: [
        {
          badgeText: "Rookie",
          badgeStatus: "completed",
          image: "https://i.ibb.co/0rW958L/cheers-2.png",
        },
      ],
    };
    const component = render(<OrganismBadgeCard {...props} />);
    expect(component).toBeTruthy();
  });

  it("Rendered component with card Shadow Size", () => {
    const props: IBadgeCardProps = {
      cardShadowSize: "regular",
      img: "image.png",
      imgAlt: "Logo",
      badges: [
        {
          badgeText: "Rookie",
          badgeStatus: "completed",
          image: "https://i.ibb.co/0rW958L/cheers-2.png",
        },
      ],
    };
    const component = render(<OrganismBadgeCard {...props} />);
    expect(component).toBeTruthy();
  });
});
