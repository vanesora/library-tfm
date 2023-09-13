import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { OrganismSlideshow } from "./index";
import { AtomSlideshowItemContainer } from "react/atoms/SlideshowItemContainer";

describe("[React] Slideshow", () => {
  it("render component", () => {
    const items = [
      {
        number: 1,
      },
      {
        number: 2,
        text: "hola",
      },
      {
        number: 3,
      },
    ];
    const props = {
      totalItems: items.length,
      settings: {
        desktop: {
          autoplay: true,
          showDots: true,
          showArrows: true,
          itemsToShow: 1,
        },
        tablet: {
          autoplay: false,
          itemsToShow: 1,
          showDots: true,
          showArrows: true,
        },
        mobile: {
          autoplay: true,
          showDots: true,
          showArrows: false,
          itemsToShow: 1,
        },
      },
    };

    const component = render(
      <OrganismSlideshow {...props}>
        {items.map((item, i) => (
          <AtomSlideshowItemContainer borderRadius={"8px"} margin={"0"} key={i}>
            {item.number}
          </AtomSlideshowItemContainer>
        ))}
      </OrganismSlideshow>
    );
    expect(component).toBeTruthy();
  });

  it("set new index based on total items", () => {
    global.innerWidth = 300;
    global.dispatchEvent(new Event("resize"));
    const items = [
      {
        number: 1,
      },
      {
        number: 2,
        text: "hola",
      },
      {
        number: 3,
      },
    ];
    const props = {
      totalItems: items.length,
    };
    const component = render(
      <OrganismSlideshow totalItems={props.totalItems}>
        {items.map((item: any) => (
          <AtomSlideshowItemContainer
            key={item.id}
            borderRadius={"8px"}
            margin={"0"}
          >
            <p>{item.number}</p>
          </AtomSlideshowItemContainer>
        ))}
      </OrganismSlideshow>
    );
    expect(component).toBeTruthy();
    expect(items).toHaveLength(props.totalItems);
  });

  it("set desktop window", () => {
    global.innerWidth = 1300;
    global.dispatchEvent(new Event("resize"));
    const items = [
      {
        number: 1,
      },
      {
        number: 2,
        text: "hola",
      },
      {
        number: 3,
      },
    ];
    const props = {
      totalItems: items.length,
    };
    const component = render(
      <OrganismSlideshow totalItems={props.totalItems}>
        {items.map((item: any) => (
          <AtomSlideshowItemContainer
            key={item.id}
            borderRadius={"8px"}
            margin={"0"}
          >
            <p>{item.number}</p>
          </AtomSlideshowItemContainer>
        ))}
      </OrganismSlideshow>
    );
    expect(component).toBeTruthy();
    expect(items).toHaveLength(props.totalItems);
  });
});
