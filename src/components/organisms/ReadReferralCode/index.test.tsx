import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { OrganismReadReferralCode } from "./index";

describe("[React] OrganismReadReferralCode", () => {
  const mockedAction = jest.fn();
  it("Render OrganismReadReferralCode", () => {
    const component = render(
      <OrganismReadReferralCode
        headline={"Invited by a friend?"}
        text={"Enter their code for 250 points. If not “Skip” to continue. "}
        handleClick={mockedAction}
        skipFunction={mockedAction}
      />
    );
    expect(component).toBeTruthy();
  });

  it("Clic skip button", () => {
    const component = render(
      <OrganismReadReferralCode
        handleClick={mockedAction}
        skipFunction={mockedAction}
      />
    );
    const actionButton = document.getElementById("skip") as HTMLDivElement;
    fireEvent.click(actionButton);
    expect(mockedAction).toBeCalled();
  });

  it("click redeem button and change text", () => {
    const referralCode = "code";
    const component = render(
      <OrganismReadReferralCode
        handleClick={mockedAction}
        skipFunction={mockedAction}
        referredCode={referralCode}
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "query" } });
    const actionButton = document.getElementById("redeem") as HTMLDivElement;
    fireEvent.click(actionButton);
    expect(mockedAction).toBeCalled();
  });
});
