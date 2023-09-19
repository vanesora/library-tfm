import { act, screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IButtonGroupProps, MoleculeListSelect, } from ".";

describe("[React] MoleculeButtonGroup", () => {
  const handlePress = jest.fn();
  const body: IButtonGroupProps = {
    data: [
      {
        id: 1,
        disabled: false,
        onClick: handlePress,
        text: "Button 1",
        type: "menu",
      },
      {
        id: 2,
        disabled: false,
        onClick: jest.fn(),
        text: "Button 2",
        type: "submenu",
      },
    ],
    direction: "row",
  };

  it("Render ButtonGroup component", () => {
    render(<MoleculeListSelect {...body} />);
    expect(screen).toBeTruthy();
  });
});
