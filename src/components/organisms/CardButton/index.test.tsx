import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ICardButtonProps, OrganismsCardButton } from ".";

describe("[React] OrganismsCardButton", () => {
  it("rendered component", () => {
    const mockHandler = jest.fn();
    const body: ICardButtonProps = {
      disabled: false,
      title: "Title",
      description: "Description",
      category: "Category",
      textButton: "Button",
      tagText: "Text",
      widthCard: "100px",
      heightCard: "100px",
      src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza-1280x720.pn",
      orientation: "column",
      handleClick: mockHandler,
    };
    const component = render(<OrganismsCardButton {...body} />);
    expect(component).toBeTruthy();
  });

  it("rendered component not initial parameters", () => {
    const mockHandler = jest.fn();
    const body: ICardButtonProps = {
      title: "Title",
      description: "Description",
      textButton: "Button",
      src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza-1280x720.pn",
      handleClick: mockHandler,
    };
    const component = render(<OrganismsCardButton {...body} />);
    expect(component).toBeTruthy();
  });

  it("rendered component orientation row", () => {
    const mockHandler = jest.fn();
    const body: ICardButtonProps = {
      title: "Title",
      description: "Description",
      textButton: "Button",
      src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza-1280x720.pn",
      handleClick: mockHandler,
      orientation: "row",
      category: "Category",
    };
    const component = render(<OrganismsCardButton {...body} />);
    expect(component).toBeTruthy();
  });

  it("rendered component orientation row button medium", () => {
    const mockHandler = jest.fn();
    const body: ICardButtonProps = {
      title: "Title",
      description: "Description",
      textButton: "Button",
      src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza-1280x720.pn",
      handleClick: mockHandler,
      orientation: "row",
      category: "Category",
      widthCard: "380px",
    };
    const component = render(<OrganismsCardButton {...body} />);
    expect(component).toBeTruthy();
  });

  it("rendered component orientation row button large", () => {
    const mockHandler = jest.fn();
    const body: ICardButtonProps = {
      title: "Title",
      description: "Description",
      textButton: "Button",
      src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza-1280x720.pn",
      handleClick: mockHandler,
      orientation: "row",
      category: "Category",
      widthCard: "480px",
    };
    const component = render(<OrganismsCardButton {...body} />);
    expect(component).toBeTruthy();
  });

  it("rendered component orientation colum button medium", () => {
    const mockHandler = jest.fn();
    const body: ICardButtonProps = {
      title: "Title",
      description: "Description",
      textButton: "Button",
      src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza-1280x720.pn",
      handleClick: mockHandler,
      orientation: "column",
      category: "Category",
      widthCard: "290px",
    };
    const component = render(<OrganismsCardButton {...body} />);
    expect(component).toBeTruthy();
  });
});
