import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { AtomWebView } from "./index";

describe("[React] AtomWebView", () => {
  it("Render Component", () => {
    const srcTest = "iframe-test";
    const component = render(<AtomWebView src={srcTest} />);

    expect(component.container.querySelector("iframe")).toHaveAttribute(
      "src",
      srcTest
    );
  });
});
