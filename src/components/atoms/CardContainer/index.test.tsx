import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AtomCardContainer, ICardContainerProps } from "./index";
import { AtomHeadline } from "../../atoms/Typography/Headline";

describe("[React] AtomCardContainer", () => {
  it("Render component with default shadow type", () => {
    const props = {
      height: "360px",
      width: "460px",
    };

    const component = render(<AtomCardContainer {...props} />);

    expect(component).toBeTruthy();
    expect(screen.getByTestId("card-container")).toBeDefined();
    expect(screen.getByTestId("card-container")).toHaveStyle({
      "box-shadow": "0px 4px 16px rgba(116,134,141,0.1)",
    });
  });

  it("Render component with small shadow type", () => {
    const props: ICardContainerProps = {
      height: "360px",
      width: "460px",
      shadowSize: "small",
    };

    const component = render(<AtomCardContainer {...props} />);

    expect(component).toBeTruthy();
    expect(screen.getByTestId("card-container")).toBeDefined();
    expect(screen.getByTestId("card-container")).toHaveStyle({
      "box-shadow": "0px 5px 8px rgba(116,134,141,0.1)",
    });
  });

  it("Render component with large shadow type", () => {
    const props: ICardContainerProps = {
      height: "360px",
      width: "460px",
      shadowSize: "large",
    };

    const component = render(<AtomCardContainer {...props} />);

    expect(component).toBeTruthy();
    expect(screen.getByTestId("card-container")).toBeDefined();
    expect(screen.getByTestId("card-container")).toHaveStyle({
      "box-shadow": "0px 4px 28px rgba(116,134,141,0.1)",
    });
  });

  it("Render component with children component", () => {
    const props: ICardContainerProps = {
      height: "360px",
      width: "460px",
    };

    const component = render(
      <AtomCardContainer {...props}>
        <AtomHeadline size="xlarge" text="Test text" />
      </AtomCardContainer>
    );

    expect(component).toBeTruthy();
    expect(screen.getByTestId("card-container")).toBeDefined();
    expect(screen.getByTestId("card-container")).toHaveStyle({
      "box-shadow": "0px 4px 16px rgba(116,134,141,0.1)",
    });
  });

  it("Render component with props optionals", () => {
    const props: ICardContainerProps = {
      height: "360px",
      width: "460px",
      margin: "10px",
      bgColor: "neutral300",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
    };

    const component = render(
      <AtomCardContainer {...props}>
        <AtomHeadline size="xlarge" text="Test text" />
      </AtomCardContainer>
    );

    expect(component).toBeTruthy();
    expect(screen.getByTestId("card-container")).toBeDefined();
    expect(screen.getByTestId("card-container")).toHaveStyle({
      "box-shadow": "0px 4px 16px rgba(116,134,141,0.1)",
      margin: "10px",
      "background-color": "#E7EFF2",
      "flex-direction": "row",
      "align-items": "center",
      "justify-content": "center",
      "align-content": "center",
    });
  });
});
