import React from "react";
import { render } from "@testing-library/react";
import { AtomSlideshowItemContainer, ISlideshowItemProps } from "./index";

describe("[React] AtomSlideshowItemContainer", () => {
  it("render component", () => {
    const component = render(
      <AtomSlideshowItemContainer margin="0">Item 1</AtomSlideshowItemContainer>
    );
    expect(component).toBeTruthy();
  });

  it("render component with min width prop", () => {
    const props: ISlideshowItemProps = {
      minWidth: { desktop: "50%", tablet: "50%", mobile: "100%" },
      margin: "0 10%",
      widthHook: 50,
    };
    const component = render(
      <AtomSlideshowItemContainer {...props}>Item 1</AtomSlideshowItemContainer>
    );
    expect(component).toBeTruthy();
  });
});
