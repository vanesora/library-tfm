/** @jest-environment jsdom */
import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { OrganismCardChallenge, ICardChallenge } from "./index";

describe("[React] OrganismCardChallenge", () => {
  const mockHandler = jest.fn();

  const body: ICardChallenge = {
    name: "Invite Friends",
    description: "You can win points with this feature!",
    image:
      "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/rotors/rotors/rt-centerline-x-a1/dbrotorclx160.jpg?w=800&quality=80&format=jpg",
    buttonText: "Take it!",
    progressButtonText: "In Progress",
    progressTextTitle: "Scan Receipts Progress",
    completeText: "Completed",
    handleClick: mockHandler,
    iconProgress: "QR_code",
    progress: 0,
    completed: false,
    colorProgress: "primary",
    acceptedText: "Accepted",
    acceptedDescriptionText: "01 to 03",
    screenWidth: 800,
  };

  it("rendered component", () => {
    const component = render(
      <OrganismCardChallenge
        name={body.name}
        description={body.description}
        image={body.image}
        buttonText={body.buttonText}
        progressButtonText={body.progressButtonText}
        progressTextTitle={body.progressTextTitle}
        completeText={body.progressTextTitle}
        handleClick={body.handleClick}
        screenWidth={body.screenWidth}
      />
    );
    expect(component).toBeTruthy();
  });

  it("render component with completed true", () => {
    const component = render(
      <OrganismCardChallenge
        name={body.name}
        description={body.description}
        image={body.image}
        buttonText={body.buttonText}
        progressButtonText={body.progressButtonText}
        progressTextTitle={body.progressTextTitle}
        completeText={body.progressTextTitle}
        handleClick={body.handleClick}
        iconProgress={body.iconProgress}
        progress={body.progress}
        completed={true}
        colorProgress={body.colorProgress}
        acceptedText={body.acceptedText}
        acceptedDescriptionText={body.acceptedDescriptionText}
        screenWidth={body.screenWidth}
      />
    );

    expect(component).toBeTruthy();
  });

  it("render component with progress > 0", () => {
    const component = render(
      <OrganismCardChallenge
        name={body.name}
        description={body.description}
        image={body.image}
        buttonText={body.buttonText}
        progressButtonText={body.progressButtonText}
        progressTextTitle={body.progressTextTitle}
        completeText={body.progressTextTitle}
        handleClick={body.handleClick}
        iconProgress={body.iconProgress}
        progress={3}
        completed={true}
        colorProgress={body.colorProgress}
        acceptedText={body.acceptedText}
        acceptedDescriptionText={body.acceptedDescriptionText}
        screenWidth={body.screenWidth}
      />
    );

    expect(component).toBeTruthy();
  });

  it("test progress dropdown click", () => {
    const component = render(
      <OrganismCardChallenge
        name={body.name}
        description={body.description}
        image={body.image}
        buttonText={body.buttonText}
        progressButtonText={body.progressButtonText}
        progressTextTitle={body.progressTextTitle}
        completeText={body.progressTextTitle}
        handleClick={body.handleClick}
        iconProgress={body.iconProgress}
        progress={30}
        completed={false}
        colorProgress={body.colorProgress}
        acceptedText={body.acceptedText}
        acceptedDescriptionText={body.acceptedDescriptionText}
        screenWidth={body.screenWidth}
      />
    );

    const buttonProgress = component.getByText(body.progressButtonText);
    fireEvent.click(buttonProgress);

    expect(component).toBeTruthy();
  });

  it("test window size <= 768", () => {
    global.innerWidth = 500;

    global.dispatchEvent(new Event("resize"));

    const component = render(
      <OrganismCardChallenge
        name={body.name}
        description={body.description}
        image={body.image}
        buttonText={body.buttonText}
        progressButtonText={body.progressButtonText}
        progressTextTitle={body.progressTextTitle}
        completeText={body.progressTextTitle}
        handleClick={body.handleClick}
        iconProgress={body.iconProgress}
        progress={30}
        completed={false}
        colorProgress={body.colorProgress}
        acceptedText={body.acceptedText}
        acceptedDescriptionText={body.acceptedDescriptionText}
        screenWidth={500}
      />
    );

    const buttonProgress = component.getByText(body.progressButtonText);
    fireEvent.click(buttonProgress);

    expect(component).toBeTruthy();
  });
});
