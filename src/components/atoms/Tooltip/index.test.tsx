import React from "react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

import { AtomTooltip } from "./index";
import { AtomCaption } from "react/atoms/Typography/Caption/index";
import { AtomIcon } from "react/atoms/Icon/index";

describe("[React] AtomTooltip", () => {
  it("Render component", async () => {
    const component = render(
      <AtomTooltip
        placement="top"
        text="Tooltip Text"
        show={true}
        arrowSize={6}
        tooltipMargin={5}
        removeArrow={true}
        preventHover={false}
      >
        <AtomCaption
          align="center"
          size={"xlarge"}
          text={"Hover here for tooltip"}
        />
      </AtomTooltip>
    );
    const toolTipContainer = component.getByText("Hover here for tooltip");
    fireEvent.mouseOver(toolTipContainer);
    const tooltip = await component.findByText("Tooltip Text");
    expect(tooltip).toBeInTheDocument();
  });

  it("Render component on Top", async () => {
    const component = render(
      <AtomTooltip
        placement="top"
        text="Tooltip Text"
        show={true}
        tooltipWidth="120px"
        tooltipHeight="15px"
      >
        <AtomCaption
          align="center"
          size={"xlarge"}
          text={"Hover here for tooltip"}
        />
      </AtomTooltip>
    );

    const toolTipContainer = component.getByText("Hover here for tooltip");
    fireEvent.mouseOver(toolTipContainer);

    const tooltipWrapper = component.getByTestId("TooltipWrapper");
    expect(tooltipWrapper).toHaveStyleRule("top", "-11px");
    expect(tooltipWrapper).toHaveStyleRule("left", "50%");
  });

  it("Render component on bottom", async () => {
    const component = render(
      <AtomTooltip placement="bottom" text="Tooltip Text" show={true}>
        <AtomCaption
          align="center"
          size={"xlarge"}
          text={"Hover here for tooltip"}
        />
      </AtomTooltip>
    );
    const toolTipContainer = component.getByText("Hover here for tooltip");
    fireEvent.mouseOver(toolTipContainer);

    const tooltipWrapper = component.getByTestId("TooltipWrapper");
    expect(tooltipWrapper).toHaveStyleRule("bottom", "-11px");
    expect(tooltipWrapper).toHaveStyleRule("left", "50%");
  });

  it("Render component on right", async () => {
    const component = render(
      <AtomTooltip placement="right" text="Tooltip Text" show={true}>
        <AtomCaption
          align="center"
          size={"xlarge"}
          text={"Hover here for tooltip"}
        />
      </AtomTooltip>
    );
    const toolTipContainer = component.getByText("Hover here for tooltip");
    fireEvent.mouseOver(toolTipContainer);

    const tooltipWrapper = component.getByTestId("TooltipWrapper");
    expect(tooltipWrapper).toHaveStyleRule("right", "-10px");
    expect(tooltipWrapper).toHaveStyleRule("top", "50%");
  });

  it("Render component on left", async () => {
    const component = render(
      <AtomTooltip placement="left" text="Tooltip Text" show={true}>
        <AtomCaption
          align="center"
          size={"xlarge"}
          text={"Hover here for tooltip"}
        />
      </AtomTooltip>
    );
    const toolTipContainer = component.getByText("Hover here for tooltip");
    fireEvent.mouseOver(toolTipContainer);

    const tooltipWrapper = component.getByTestId("TooltipWrapper");
    expect(tooltipWrapper).toHaveStyleRule("left", "-10px");
    expect(tooltipWrapper).toHaveStyleRule("top", "50%");
  });

  test("Custom content", async () => {
    const component = render(
      <AtomTooltip
        show={true}
        content={<AtomIcon icon="earn_badges" size={30} />}
      >
        <AtomCaption
          align="center"
          size={"xlarge"}
          text={"Hover here for tooltip"}
        />
      </AtomTooltip>
    );

    const toolTipContainer = component.getByText("Hover here for tooltip");
    fireEvent.mouseOver(toolTipContainer);
    fireEvent.mouseOut(toolTipContainer);

    const tooltipWrapper = component.getByTestId("TooltipWrapper");
    expect(tooltipWrapper).toHaveStyleRule("left", "50%");
    expect(tooltipWrapper).toHaveStyleRule("top", "-11px");
  });
});
