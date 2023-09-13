import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { OrganismCardClickable } from "./index";

describe("[React] CardClickable", () => {
  it("rendered component", () => {
    const mockHandler = jest.fn();
    const body = {
      type: "vertical",
      title: "Michelob Ultra Special Cooler",
      description: "Michelob Ultra",
      image:
        "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/rotors/rotors/rt-centerline-x-a1/dbrotorclx160.jpg?w=800&quality=80&format=jpg",
      category: "Merchandise",
      pointsText: "points",
      pointsNumber: 4500,
      handleClick: mockHandler,
    } as const;
    const component = render(<OrganismCardClickable {...body} />);

    expect(component).toBeTruthy();
  });
  it("rendered component with horizontal type", () => {
    const mockHandler = jest.fn();
    const body = {
      type: "horizontal",
      title: "Michelob Ultra Special Cooler",
      description: "Michelob Ultra",
      image:
        "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/rotors/rotors/rt-centerline-x-a1/dbrotorclx160.jpg?w=800&quality=80&format=jpg",
      pointsText: "points",
      pointsNumber: 4500,
      handleClick: mockHandler,
    } as const;
    const component = render(<OrganismCardClickable {...body} />);

    expect(component).toBeTruthy();
  });
});
