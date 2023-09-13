import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { OrganismFilterAccordion } from ".";

const mockHandler = jest.fn();
const props = [
  {
    id: 1,
    accordionTitle: "Categories",
    value: "categories",
    filters: [
      {
        type: "check",
        text: "Home",
        value: "home",
      },
    ],
    sortButtons: [],
  },
  {
    id: 2,
    accordionTitle: "Sort By",
    value: "",
    filters: [],
    sortButtons: [
      {
        title: "Alphabeticaly",
        buttons: [
          {
            id: 1,
            text: "A - Z",
            selected: true,
          },
          {
            id: 2,
            text: "Z - A",
            selected: false,
          },
        ],
      },
    ],
  },
];

describe("[React] FilterAccordion", () => {
  it("render component", () => {
    const component = render(
      <OrganismFilterAccordion
        accordionElements={props}
        handleClear={mockHandler}
        handleShow={mockHandler}
        setShowMore={() => {}}
        allBrands={[]}
        setOpen={() => {
          return false;
        }}
      />
    );
    expect(component).toBeTruthy();
  });

  it("handles toggle click", async () => {
    const { findByTestId } = render(
      <OrganismFilterAccordion
        accordionElements={props}
        handleClear={mockHandler}
        handleShow={mockHandler}
        setShowMore={() => {}}
        allBrands={[]}
        setOpen={() => {
          return false;
        }}
      />
    );
    const event = await findByTestId("button-1");
    const other = await findByTestId("collapsible-1");

    fireEvent.click(event);

    expect(other).toBeVisible();
  });
  it("handles checkbox click", async () => {
    const { findByTestId } = render(
      <OrganismFilterAccordion
        accordionElements={props}
        handleClear={mockHandler}
        handleShow={mockHandler}
        setShowMore={() => {}}
        allBrands={[]}
        setOpen={() => {
          return false;
        }}
      />
    );
    const container = await findByTestId("checkbox-home");
    const checkbox = container.querySelector("input") as HTMLInputElement;

    fireEvent.change(checkbox);

    expect(checkbox).toBeChecked;
  });
});
