import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { IGlobalHeaderProps, OrganismSideNavBar } from "./index";

describe("[React] GlobalHeader", () => {
  const props: IGlobalHeaderProps = {
    userName: "",
    menuData: [],
    handleClickLogOut: function (selectedTab: string): void {
      throw new Error("Function not implemented.");
    },
  };
  it("render component", () => {
    render(<OrganismSideNavBar {...props} />);
    expect(screen).toBeTruthy();
  });
  
});
