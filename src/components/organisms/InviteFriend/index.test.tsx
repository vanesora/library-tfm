import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { OrganismsInviteFriend } from "./index";

describe("[React] OrganismsInviteFriend", () => {
  const mockedOpen = jest.fn();
  const originalOpen = window.open;
  window.open = mockedOpen;
  it("Render OrganismsInviteFriend", () => {
    const component = render(<OrganismsInviteFriend />);
  });
  it("Render OrganismsInviteFriend click whatsapp", () => {
    const component = render(
      <OrganismsInviteFriend
        description={"Description"}
        socialList={"whatsapp"}
        message={"message to desciption"}
        link={"www.google.com"}
      />
    );
    const shareButton = document.getElementById("element") as HTMLDivElement;
    fireEvent.click(shareButton);
    expect(mockedOpen).toBeCalled();
  });
  it("Render OrganismsInviteFriend click facebook", () => {
    const component = render(
      <OrganismsInviteFriend
        description={"Description"}
        socialList={"facebook"}
        message={"message to desciption"}
        link={"www.google.com"}
      />
    );
    const shareButton = document.getElementById("element") as HTMLDivElement;
    fireEvent.click(shareButton);
    expect(mockedOpen).toBeCalled();
  });
  it("Render OrganismsInviteFriend click telegram", () => {
    const component = render(
      <OrganismsInviteFriend
        iconDescription="beer"
        description={"Description"}
        socialList={"telegram"}
        message={"message to desciption"}
        link={"www.google.com"}
      />
    );
    const shareButton = document.getElementById("element") as HTMLDivElement;
    fireEvent.click(shareButton);
    expect(mockedOpen).toBeCalled();
  });
  it("Render OrganismsInviteFriend click twitter", () => {
    const component = render(
      <OrganismsInviteFriend
        description={"Description"}
        socialList={"twitter"}
        message={"message to desciption"}
        link={"www.google.com"}
      />
    );
    const shareButton = document.getElementById("element") as HTMLDivElement;
    fireEvent.click(shareButton);
    expect(mockedOpen).toBeCalled();
  });

  it("Render OrganismsInviteFriend click share", () => {
    const component = render(
      <OrganismsInviteFriend
        description={"Description"}
        socialList={"share"}
        message={"message to desciption"}
        link={"www.google.com"}
      />
    );
    const shareButton = document.getElementById("element") as HTMLDivElement;
    fireEvent.click(shareButton);
    expect(mockedOpen).toBeCalled();
  });
});
