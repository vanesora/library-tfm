import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { OrganismsTierLevel } from "./index";

describe("[React] TierLevel", () => {
  it("rendered component", () => {
    const mockHandler = jest.fn();
    const body = {
      type: "mobile",
      actualPoints: 1360,
      nextPoints: 5000,
      totalTierPoints: 1360,
      actualTier: "Silver Tier",
      nextTier: "pts to Gold",
      handleClick: mockHandler,
      iconName: "tier_silver",
      colorProgress: "neutral600",
    } as const;
    const component = render(
      <OrganismsTierLevel {...body} iconName="tier_silver" />
    );
    expect(component).toBeTruthy();
  });
  it("rendered component with 0 nextPoints", () => {
    const mockHandler = jest.fn();
    const body = {
      type: "desktop",
      actualPoints: 5000,
      totalTierPoints: 5000,
      nextPoints: 0,
      actualTier: "Gold Tier",
      nextTier: "",
      handleClick: mockHandler,
      iconName: "tier_gold",
    } as const;
    const component = render(<OrganismsTierLevel {...body} />);
    expect(component).toBeTruthy();
  });
  it("evaluate if points is negative number", () => {
    const body = {
      type: "desktop",
      actualPoints: -400,
      totalTierPoints: 0,
      nextPoints: -500,
      actualTier: "Silver Tier",
      nextTier: "pts to gold",
      iconName: "tier_silver",
    } as const;
    const component = render(<OrganismsTierLevel {...body} />);
    component.getByText("0pts");
  });
});
