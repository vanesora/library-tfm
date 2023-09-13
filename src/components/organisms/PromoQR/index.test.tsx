import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { OrganismPromoQR } from ".";
import { IPromoQRProps } from "./index.interfaces";

describe("[React] OrganismPromoQR", () => {
  it("Rendered component", () => {
    const props: IPromoQRProps = {
      title: "Title",
      data: { code: "ABC123", image: "" },
      textLink: "See Locations",
      urlLink: "https://github.com",
    };
    const component = render(<OrganismPromoQR {...props} />);
    expect(component).toBeTruthy();
  });

  it("Rendered component with width", () => {
    const props: IPromoQRProps = {
      title: "Title",
      data: { code: "ABC123", image: "" },
      textLink: "See Locations",
      urlLink: "https://github.com",
      width: "396px",
    };
    const component = render(<OrganismPromoQR {...props} />);
    expect(component).toBeTruthy();
  });

  it("Rendered component with width & height", () => {
    const props: IPromoQRProps = {
      title: "Title",
      data: { code: "ABC123", image: "" },
      textLink: "See Locations",
      urlLink: "https://github.com",
      width: "396px",
      height: "414px",
    };
    const component = render(<OrganismPromoQR {...props} />);
    expect(component).toBeTruthy();
  });
});
