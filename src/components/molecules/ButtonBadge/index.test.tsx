/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import { MoleculeButtonBadge, IButtonBadgeProps } from "./index";

describe("[React] MoleculeButtonBadge", () => {
  it("Render component", () => {
    const handlePress = jest.fn();
    const props: IButtonBadgeProps = {
      badgeText: "Prueba",
      badgeStatus: "inProgress",
      image: "https://i.ibb.co/0rW958L/cheers-2.png",
      bgColor: "secondary",
      altTextImg: "Test Image",
      onClick: handlePress,
    };
    const component = render(<MoleculeButtonBadge {...props} />);
    expect(component).toBeTruthy();
    expect(props).toBeDefined();
  });

  it("Render component with locked status", () => {
    const handlePress = jest.fn();
    const props: IButtonBadgeProps = {
      badgeText: "Prueba",
      badgeStatus: "locked",
      image: "https://i.ibb.co/0rW958L/cheers-2.png",
      bgColor: "primary",
      onClick: handlePress,
    };
    const component = render(<MoleculeButtonBadge {...props} />);
    expect(component).toBeTruthy();
    expect(props.badgeStatus).toBeDefined();
  });
});
