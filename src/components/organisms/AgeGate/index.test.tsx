import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { OrganismAgeGate } from "./index";
import { color } from "react-native-reanimated";

describe("[React] Organism AgeGate", () => {
  it("Render component minimum props", () => {
    const onError = jest.fn();
    const onSuccess = jest.fn();

    const component = render(
      <OrganismAgeGate minAge={21} onError={onError} onSuccess={onSuccess} />
    );

    expect(component).toBeTruthy();
  });

  it("Render with title", () => {
    const onError = jest.fn();
    const onSuccess = jest.fn();

    const component = render(
      <OrganismAgeGate
        onError={onError}
        onSuccess={onSuccess}
        title="Test Title"
      />
    );

    const titleElem = component.getByText("Test Title");
    expect(titleElem).toBeTruthy();
  });

  it("Render with titleProps", () => {
    const onError = jest.fn();
    const onSuccess = jest.fn();

    const component = render(
      <OrganismAgeGate
        onError={onError}
        onSuccess={onSuccess}
        title="Test Title"
        titleProps={{}}
        inputDateProps={{}}
      />
    );

    const titleElem = component.getByText("Test Title");
    expect(titleElem).toBeTruthy();
  });

  it("Fire OnSuccess if date is correct", async () => {
    const onError = jest.fn();
    const onSuccess = jest.fn();

    const component = render(
      <OrganismAgeGate
        onError={onError}
        onSuccess={onSuccess}
        title="Test Title"
        initialDate="02-03-1994"
      />
    );

    const enterBtn = component.getByText("Enter");
    fireEvent.click(enterBtn);

    expect(onSuccess).toBeCalled();
  });

  it("Fire OnError if date is not correct", async () => {
    const onError = jest.fn();
    const onSuccess = jest.fn();

    const component = render(
      <OrganismAgeGate
        onError={onError}
        onSuccess={onSuccess}
        title="Test Title"
        initialDate="02-03-2010"
      />
    );

    const enterBtn = component.getByText("Enter");
    fireEvent.click(enterBtn);

    expect(onError).toBeCalled();
  });
});
