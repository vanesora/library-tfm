import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MoleculeHistoryCard } from "./";

describe("[React] MoleculeHistoryCard", () => {
  it("Render HistoryCard component", () => {
    const component = render(
      <MoleculeHistoryCard
        cardWidth="500px"
        cardHeight="65px"
        cardPadding="50px"
      />
    );

    expect(component).toBeTruthy();
  });

  it("Render HistoryCard component with tag", () => {
    const component = render(
      <MoleculeHistoryCard
        cardWidth="500px"
        cardHeight="65px"
        iconName="badge"
        iconSize={25}
        iconCaptionText="+ 50 points"
        iconCaptionColor={"primary"}
        iconDescriptionText="National Recycling League take the pledge Givaway"
        date="05/04/2022"
        tagText="Acepted"
      />
    );

    const tag = component.getByText("Acepted");
    expect(tag).toBeTruthy();
  });

  it("Render HistoryCard component with full props", () => {
    const mockHandler = jest.fn();
    const component = render(
      <MoleculeHistoryCard
        cardWidth="500px"
        cardHeight="65px"
        iconName="beer"
        iconSize={25}
        iconColor={"secondary"}
        iconCaptionText="Caption-Icon"
        iconCaptionColor={"primary"}
        iconDescriptionText="Description Icon"
        date="01/01/2022"
        dateDescription="Date Description"
        tagText="Acepted"
        tagColor={"quaternary"}
        isClickable={false}
        onClick={mockHandler}
        centeredIcon={true}
        backgroundColor="neutral200"
        arrowSize={32}
      />
    );

    expect(component).toBeTruthy();
  });

  it("Render test OnClick if clickeable", () => {
    const mockHandler = jest.fn();
    const component = render(
      <MoleculeHistoryCard
        cardWidth="500px"
        cardHeight="65px"
        iconName="badge"
        iconSize={25}
        iconCaptionText="+ 50 points"
        iconCaptionColor={"primary"}
        iconDescriptionText="National Recycling League take the pledge Givaway"
        date="05/04/2022"
        isClickable={true}
        tagText="Acepted"
        onClick={mockHandler}
      />
    );
    const container = component.getByTestId("card-container")
      .firstChild as HTMLElement;
    fireEvent.click(container);
    expect(mockHandler).toBeCalled();
  });

  it("Render test OnClick if not clickeable", () => {
    const mockHandler = jest.fn();
    const component = render(
      <MoleculeHistoryCard
        cardWidth="500px"
        cardHeight="65px"
        iconName="badge"
        iconSize={25}
        iconCaptionText="+ 50 points"
        iconCaptionColor={"primary"}
        iconDescriptionText="National Recycling League take the pledge Givaway"
        date="05/04/2022"
        isClickable={false}
        tagText="Acepted"
        onClick={mockHandler}
      />
    );
    const container = component.getByTestId("card-container")
      .firstChild as HTMLElement;
    fireEvent.click(container);
    expect(mockHandler).toBeCalledTimes(0);
  });
});
