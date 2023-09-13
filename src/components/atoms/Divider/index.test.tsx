import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { render } from "@testing-library/react";
import { AtomDivider } from "./index";
import { theme } from "data/dataMx";

describe("Divider", () => {
  test("Render divider", () => {
    render(<AtomDivider />);
    const divider = document.querySelector("hr") as HTMLHRElement;
    expect(divider).toBeInTheDocument();
  });

  it("Should have theme color normal400", () => {
    const props = {
      isInvisible: false,
    };

    render(<AtomDivider {...props} />);

    const divider = document.querySelector("hr") as HTMLHRElement;
    expect(divider).toHaveStyleRule("border", `4px solid ${theme?.neutral400}`);
  });

  it("Should be transparent", () => {
    const props = {
      isInvisible: true,
    };

    render(<AtomDivider {...props} />);

    const divider = document.querySelector("hr") as HTMLHRElement;
    expect(divider).toHaveStyleRule(
      "border",
      `4px solid ${theme?.transparent}`
    );
  });

  it("Should be of the color of color prop is passed", () => {
    render(<AtomDivider color={"secondary"} />);

    const divider = document.querySelector("hr") as HTMLHRElement;
    expect(divider).toHaveStyleRule("border", `4px solid ${theme?.secondary}`);
  });

  it("Should be have the correct height if height prop is passed", () => {
    render(<AtomDivider height={"25px"} />);

    const divider = document.querySelector("hr") as HTMLHRElement;
    expect(divider).toHaveStyleRule(
      "border",
      `25px solid ${theme?.neutral400}`
    );
  });
});
