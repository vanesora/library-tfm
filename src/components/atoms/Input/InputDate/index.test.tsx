import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { AtomInputDate } from "./index";
import moment from "moment";

const mockOnChange = jest.fn();
describe("[React] AtomInputDate", () => {
  it("Render component and change year", () => {
    const component = render(
      <AtomInputDate
        date={moment("01-1-2022", "MM-DD-YYYY").format()}
        disabled={false}
      />
    );
    const select = component.getByText("YYYY");
    fireEvent.click(select);

    const option = component.getByText("1996");
    fireEvent.click(option);
    component.getByText("1996");
  });

  it("Render component and change month", () => {
    const component = render(
      <AtomInputDate
        date={moment("01-10-2022", "MM-DD-YYYY").format()}
        minYear="1920"
        maxYear="2022"
        disabled={false}
      />
    );
    const select = component.getByText("MM");
    fireEvent.click(select);

    const option = component.getByText("04");
    fireEvent.click(option);
    component.getByText("04");
  });

  it("Render component and change day", () => {
    const component = render(
      <AtomInputDate
        date={""}
        minYear="1920"
        maxYear="2022"
        disabled={false}
        onChange={mockOnChange}
      />
    );
    const select = component.getByText("DD");
    fireEvent.click(select);
    const option = component.getByText("15");
    fireEvent.click(option);
    component.getByText("15");
  });

  it("Render component disabled", () => {
    const component = render(
      <AtomInputDate
        date={moment("01-01-2022", "MM-DD-YYYY").format()}
        disabled={true}
      />
    );
  });

  it("Render component readOnly", () => {
    const component = render(
      <AtomInputDate
        date={moment("01-01-2022", "MM-DD-YYYY").format()}
        readOnly={true}
      />
    );
  });

  it("Render component empty date", () => {
    const component = render(<AtomInputDate date={""} required={true} />);
  });

  it("Render component with DD-MM-YYYY sort", () => {
    const component = render(
      <AtomInputDate date={"01-01-2022"} readOnly={true} sort={"DD-MM-YYYY"} />
    );
  });

  it("Render component with YYYY-DD-MM sort", () => {
    const component = render(
      <AtomInputDate date={"01-01-2022"} readOnly={true} sort={"YYYY-DD-MM"} />
    );
  });

  it("Render component with YYYY-MM-DD sort", () => {
    const component = render(
      <AtomInputDate date={"01-01-2022"} readOnly={true} sort={"YYYY-MM-DD"} />
    );
  });
});
