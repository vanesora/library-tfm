import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AtomLink } from "./index";

describe("[React] AtomLink", () => {
  it("Rendered component AtomLink TypeIcon noIcon", () => {
    const props = {
      url: "www.google.com",
      text: "Test",
      typeIcon: "noIcon"
    } as const;
    render(<AtomLink {...props} />);
    screen.getByText(props.text);
  });

});
