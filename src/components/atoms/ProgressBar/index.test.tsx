import React from "react";
import { AtomProgressBar, IProgressBarProps } from "./index";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("[React] ProgressBar", () => {
  const props: IProgressBarProps = {
    background: "neutral300",
    colorPoints: "quaternary500",
    percentage: 50,
  };

  it("Render component ProgressBar", async () => {
    await act(async () => {
      const component = render(<AtomProgressBar {...props} />);

      expect(component).toBeDefined();
    });
  });

  it("Render component ProgressBar default props", async () => {
    await act(async () => {
      const component = render(<AtomProgressBar percentage={20} />);

      expect(component).toBeDefined();
    });
  });

  it("Render component ProgressBar color progressBar", async () => {
    let percentage = 20;
    let height = "10px";
    let animationName = "loader";
    await act(async () => {
      const component = render(
        <AtomProgressBar
          percentage={percentage}
          colorPoints={"quaternary400"}
          height={height}
          animationName={animationName}
        />
      );

      percentage = 50;
      height = "4px";
      animationName = "loading";

      await component.rerender(
        <AtomProgressBar
          percentage={percentage}
          colorPoints={"quaternary400"}
          height={height}
          animationName={animationName}
        />
      );

      expect(component).toBeDefined();
    });
  });
});
