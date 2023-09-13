import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { MoleculeAccordion } from "./index";

describe("[React] MoleculeAccordion", () => {
  const body = {
    data: [
      {
        header: "Header 1",
        detail: "Detail 1",
        _id: 1,
      },
      {
        header: "Header 2",
        detail: "Detail 2",
        _id: 2,
      },
    ],
    header: "header",
    detail: "detail",
    _key: "_id",
  };

  it("Render Accordion component", () => {
    const component = render(<MoleculeAccordion {...body} />);

    const selector = component.container.querySelectorAll("#accordion");
    expect(selector.length).toEqual(body.data.length);
  });

  it("Test open item", () => {
    const component = render(<MoleculeAccordion {...body} />);

    const accordionHeader = component.container.querySelector("#item_1");
    accordionHeader && fireEvent.click(accordionHeader);
    expect(screen.queryByText(body.data[0].detail)).not.toBeNull;
  });

  it("Test collapse item", () => {
    const component = render(<MoleculeAccordion {...body} />);

    const accordionHeader = component.container.querySelector("#item_1");
    accordionHeader && fireEvent.doubleClick(accordionHeader);
    expect(screen.queryByText(body.data[0].detail)).toBeNull();
  });
});
