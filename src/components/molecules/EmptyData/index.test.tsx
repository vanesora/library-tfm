import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MoleculeEmptyData, IEmptyDataProps } from "./index";

describe("[React] MoleculeEmptyData", () => {
  it("Render component", () => {
    const props: IEmptyDataProps = {
      titleText: `You think it’s a little bit empty?`,
      blueText: "Click here to earn more points",
      linkBlueText: "https://www.google.com/",
    };
    const component = render(<MoleculeEmptyData {...props} />);
    expect(component).toBeTruthy();
  });

  it("Render component with all props", () => {
    const props: IEmptyDataProps = {
      iconName: "star",
      titleText: "Otro texto de prueba",
      blueText: "Click here",
      linkBlueText: "https://mycooler.com",
      height: "100vh",
    };
    const component = render(<MoleculeEmptyData {...props} />);
    expect(component).toBeTruthy();
  });

  it("Render component with default data", () => {
    const component = render(<MoleculeEmptyData />);
    expect(component).toBeTruthy();
  });
});
