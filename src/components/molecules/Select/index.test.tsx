import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MoleculeSelect, ISelectProps } from "./index";

describe("[React] MoleculeSelect", () => {
  it("rendered component", () => {
    const body = {
      items: ["1", "2", "3"],
      value: "selec one",
    };
    const component = render(<MoleculeSelect {...body} />);

    expect(component).toBeTruthy();
  });
  it("rendered component with all props", () => {
    const body: ISelectProps = {
      items: ["1", "2", "3"],
      label: "Label",
      value: "-",
      helperText: "Helper text",
      helperTextColor: "neutral600",
      disabled: false,
    };
    const component = render(
      <MoleculeSelect {...body} labelColor="neutral700" />
    );

    expect(component).toBeTruthy();
  });
});
