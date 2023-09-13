import React from "react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { MoleculeTabMenu } from "./index";
import { theme } from "data/dataMx";

describe("[React] MoleculeTabMenu", () => {
  const basicProps = {
    starterSelectedTab: "Tab1",
    onTabSelected: jest.fn(),
    tabs: [
      {
        id: "Tab1",
        text: "Tab1",
      },
      {
        id: "Tab2",
        text: "Tab2",
        iconName: "beer",
      },
    ],
  };

  it("Render MoleculeTabMenu minimun props", () => {
    const component = render(<MoleculeTabMenu {...basicProps} />);
    expect(component).toBeTruthy();
  });

  it("Render MoleculeTabMenu full props", () => {
    const component = render(
      <MoleculeTabMenu
        {...basicProps}
        tabsWidth="150px"
        tabHeight="50px"
        starterSelectedTab={"Tab1"}
        selectedColor={"primary"}
        shouldColorLabel={true}
        iconsSize={25}
        labelsSize="medium"
      />
    );
    expect(component).toBeTruthy();
  });

  it("Render MoleculeTabMenu check tab is selected when click", () => {
    const MockTabSelected = jest.fn();
    const component = render(
      <MoleculeTabMenu
        {...basicProps}
        onTabSelected={MockTabSelected}
        shouldColorLabel={true}
      />
    );
    const tab = component.getByText("Tab2");
    fireEvent.click(tab);
    expect(MockTabSelected).toBeCalled();
    expect(tab).toHaveStyleRule("color", "#20BBEC");
  });

  it("Render MoleculeTabMenu check tab is selected on start", () => {
    const component = render(
      <MoleculeTabMenu
        {...basicProps}
        shouldColorLabel={true}
        starterSelectedTab={"Tab2"}
      />
    );
    const tab = component.getByText("Tab2");
    expect(tab).toHaveStyleRule("color", "#20BBEC");
  });

  it("Render MoleculeTabMenu with filter", () => {
    const mockOnFilter = jest.fn();
    const component = render(
      <MoleculeTabMenu
        {...basicProps}
        shouldColorLabel={true}
        starterSelectedTab={"Tab2"}
        withFilter={true}
        onFilterClicked={mockOnFilter}
      />
    );

    const filterBtn = component.getByTestId("filter-btn");
    expect(filterBtn).toBeTruthy();
    fireEvent.click(filterBtn);
    expect(mockOnFilter).toBeCalled();
  });
});
