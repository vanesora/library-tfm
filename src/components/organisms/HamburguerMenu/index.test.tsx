import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { OrganismHamburguerMenu } from ".";

describe("[React] HamburgerMenu", () => {
  it("render component", () => {
    const mockHandler = jest.fn();
    const props = [
      {
        id: "1",
        text: "Earn Points",
        url: "/",
        nameIconLeft: "points",
      },
    ];
    const component = render(
      <OrganismHamburguerMenu menuElements={props} onClick={mockHandler} />
    );
    expect(component).toBeTruthy();
  });
  it("handles click", async () => {
    const onClicky = jest.fn();
    const props = [
      {
        id: "1",
        text: "Earn Points",
        url: "/",
        nameIconLeft: "points",
      },
    ];

    const { findByTestId } = render(
      <OrganismHamburguerMenu menuElements={props} onClick={onClicky} />
    );
    const event = await findByTestId("id");

    fireEvent.click(event);

    expect(onClicky).toBeDefined();
  });
});
