import { act, fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { IButtonGroupProps, MoleculeButtonGroup } from ".";

describe("[React] MoleculeButtonGroup", () => {
  const handlePress = jest.fn();
  const body: IButtonGroupProps = {
    data: [
      {
        id: 1,
        disabled: false,
        onClick: handlePress,
        color: "primary",
        text: "Button 1",
        type: "default",
        groupStyle: "toggle",
      },
      {
        id: 2,
        disabled: false,
        onClick: jest.fn(),
        color: "secondary",
        text: "Button 2",
        type: "ghost",
      },
      {
        id: 3,
        disabled: false,
        onClick: jest.fn(),
        color: "primary",
        text: "Button 3",
        type: "outline",
      },
      {
        id: 4,
        disabled: false,
        onClick: handlePress,
        color: "custom",
        text: "Button 4",
        type: "icon",
        customColor: "quinary",
        icon: "beer",
        typeButtonIcon: "default",
        groupStyle: "normal",
      },
      {
        id: 5,
        disabled: false,
        onClick: handlePress,
        color: "custom",
        text: "Button 5",
        type: "icon",
        customColor: "quinary",
        icon: "beer",
        typeButtonIcon: "default",
        groupStyle: "toggle",
      },
    ],
    direction: "row",
  };

  it("Render ButtonGroup component", () => {
    const component = render(<MoleculeButtonGroup {...body} />);
    expect(component).toBeTruthy();
  });

  it("Render ButtonGroup different values", () => {
    body.data[3].icon = undefined;
    body.data[3].iconAlign = "left";
    body.data[3].typeButtonIcon = "outline";
    const component = render(<MoleculeButtonGroup {...body} />);
    expect(component).toBeTruthy();
  });

  it("Render ButtonGroup initial values", () => {
    body.data[3].iconAlign = "right";
    body.data[3].typeButtonIcon = undefined;
    const component = render(<MoleculeButtonGroup {...body} />);
    expect(component).toBeTruthy();
  });
});
