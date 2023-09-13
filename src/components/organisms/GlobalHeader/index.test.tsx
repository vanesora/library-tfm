import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { IGlobalHeaderProps, OrganismGlobalHeader } from "./index";

describe("[React] GlobalHeader", () => {
  const props: IGlobalHeaderProps = {
    isAvailable: true,
    logged: false,
    userName: "",
    menuElements: [],
    type: "desktop",
    iconName: "tier_bronze",
    actualPoints: 0,
    totalTierPoints: 0,
    actualTier: "",
    nextPoints: 0,
    nextTier: "",
    logoTheme: "light",
    greetings: "",
    handleTabOnClick: function (selectedTab: string): void {
      throw new Error("Function not implemented.");
    },
    handleClickTierLevel: function (e?: any): void {
      throw new Error("Function not implemented.");
    },
    startSelectedTab: "",
  };
  it("render component", () => {
    const component = render(<OrganismGlobalHeader {...props} />);
    expect(component).toBeTruthy();
  });
  it("render according available header", () => {
    const component = render(<OrganismGlobalHeader {...props} />);
    expect(component).toBeTruthy();
    expect(props.isAvailable).toBeTruthy();
  });

  it("render not available header", () => {
    const props: IGlobalHeaderProps = {
      isAvailable: false,
      logged: false,
      menuElements: [],
      type: "mobile",
      iconName: "tier_bronze",
      actualPoints: 0,
      totalTierPoints: 0,
      actualTier: "",
      nextPoints: 0,
      nextTier: "",
      userName: "",
      logoTheme: "light",
      greetings: "",
      handleTabOnClick: function (selectedTab: string): void {
        throw new Error("Function not implemented.");
      },
      handleClickTierLevel: function (e?: any): void {
        throw new Error("Function not implemented.");
      },
      startSelectedTab: "",
    };
    const component = render(<OrganismGlobalHeader {...props} />);
    expect(component).toBeTruthy();
    expect(props.isAvailable).toBeFalsy();
  });

  it("render logged container", () => {
    const props: IGlobalHeaderProps = {
      isAvailable: true,
      logged: true,
      menuElements: [],
      type: "mobile",
      iconName: "tier_bronze",
      actualPoints: 0,
      totalTierPoints: 0,
      actualTier: "",
      nextPoints: 0,
      nextTier: "",
      userName: "",
      logoTheme: "light",
      greetings: "",
      handleTabOnClick: function (selectedTab: string): void {
        throw new Error("Function not implemented.");
      },
      handleClickTierLevel: function (e?: any): void {
        throw new Error("Function not implemented.");
      },
      startSelectedTab: "",
    };
    const component = render(<OrganismGlobalHeader {...props} />);

    const element = component.getByTestId("loggedContainer");

    expect(element).toBeDefined();
  });

  it("render not logged container", () => {
    const props: IGlobalHeaderProps = {
      isAvailable: true,
      logged: false,
      menuElements: [],
      type: "mobile",
      iconName: "tier_bronze",
      actualPoints: 0,
      totalTierPoints: 0,
      actualTier: "",
      nextPoints: 0,
      nextTier: "",
      userName: "",
      logoTheme: "light",
      greetings: "",
      handleTabOnClick: function (selectedTab: string): void {
        throw new Error("Function not implemented.");
      },
      handleClickTierLevel: function (e?: any): void {
        throw new Error("Function not implemented.");
      },
      startSelectedTab: "",
    };
    const component = render(<OrganismGlobalHeader {...props} />);

    const element = component.getByTestId("notLoggedContainer");

    expect(element).toBeDefined();
  });

  it("render all props", () => {
    const props: IGlobalHeaderProps = {
      isAvailable: true,
      logged: true,
      menuElements: [
        {
          id: "1",
          text: "Earn Points",
          url: "/earn",
          nameIconLeft: "points",
        },
      ],
      actualPoints: 1000,
      totalTierPoints: 1000,
      actualTier: "Silver Tier",
      nextPoints: 1000,
      nextTier: "pts to Silver",
      iconName: "tier_bronze",
      userName: "Thomas",
      type: "mobile",
      logoTheme: "dark",
      greetings: "",
      handleTabOnClick: function (selectedTab: string): void {
        throw new Error("Function not implemented.");
      },
      handleClickTierLevel: function (e?: any): void {
        throw new Error("Function not implemented.");
      },
      startSelectedTab: "",
      showTierLevel: false,
    };

    const component = render(<OrganismGlobalHeader {...props} />);

    const headerElements = screen.getByTestId("headerElements");

    expect(component).toBeTruthy();
    expect(headerElements).toHaveStyle({
      display: "flex",
    });

    fireEvent.click(screen.getByTestId("id"));

    expect(headerElements).toHaveStyle({
      display: "none",
    });

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 411,
    });

    expect(props.isAvailable).toBeTruthy();
    expect(headerElements).toHaveStyle({
      width: "100%",
    });
  });

  it("test styles", () => {
    const props: IGlobalHeaderProps = {
      isAvailable: false,
      logged: true,
      menuElements: [
        {
          id: "1",
          text: "Earn Points",
          url: "/earn",
          nameIconLeft: "points",
        },
      ],
      actualPoints: 1000,
      totalTierPoints: 1000,
      actualTier: "Silver Tier",
      nextPoints: 1000,
      nextTier: "pts to Silver",
      iconName: "tier_bronze",
      userName: "Thomas",
      type: "mobile",
      logoTheme: "light",
      greetings: "",
      handleTabOnClick: function (selectedTab: string): void {
        throw new Error("Function not implemented.");
      },
      handleClickTierLevel: function (e?: any): void {
        throw new Error("Function not implemented.");
      },
      startSelectedTab: "",
    };

    const component = render(<OrganismGlobalHeader {...props} />);

    const headerElements = screen.getByTestId("userProfile");

    expect(component).toBeTruthy();
    expect(props.isAvailable).toBeFalsy();
    expect(headerElements).toHaveStyle({
      width: "88%",
    });
  });
});
