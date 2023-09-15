import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";
import { AtomLogo, ILogoSize } from ".";

describe("[React] AtomLogo", () => {
  test("Render logo", () => {
    const body = {
      size: "large" as ILogoSize,
      type: "line" as 'line',
    };
    render(<AtomLogo {...body} />);

    // eslint-disable-next-line testing-library/no-node-access
    const iconElement = document.querySelector("svg") as SVGSVGElement;
    expect(iconElement).not.toBeNull();
  });

});
