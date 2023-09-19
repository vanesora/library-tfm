import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { IHeaderProps, MoleculeHeader } from "./index";

describe("[React] GlobalHeader", () => {
  const props: IHeaderProps = {
    userName: "",
    onLogout: function (selectedTab: string): void {
      throw new Error("Function not implemented.");
    },
  };
  it("render component", () => {
    render(<MoleculeHeader {...props} />);
    expect(screen).toBeTruthy();
  });
  
});
