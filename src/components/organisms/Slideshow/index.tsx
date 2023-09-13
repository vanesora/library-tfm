import React, { useState, useEffect, useMemo } from "react";
import { useSwipeable } from "react-swipeable";
import { AtomIcon } from "react/atoms/Icon";
import {
  SlideshowContainer,
  SlideshowInner,
  SlidesToShowContainer,
  SlideshowIndicators,
  Indicator,
  ArrowContainer,
} from "./styles";
import { keysTheme, theme } from "data/dataMx";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";

export interface ISlideshowProps {
  /** object that receive properties for functionality in desktop, mobile and tablet */
  settings?: ISlideshowSettings;
  /** this is the total items inside the slideshow, for this is recommended to use items.lenght */
  totalItems: number;
  /** Component that will go inside the slideShow */
  children: React.ReactNode;
  /** arrows background */
  arrowBackground?: string
  /** arrows color */
  arrowColor?: keysTheme;
  /** size of the slideShow items (space that will scroll when clicking the arrows) */
  widthItem?: number;
  /** size to window */
  widthHook?: number;
}

interface ISlideshowSettings {
  mobile?: any;
  desktop?: any;
  tablet?: any;
}

export const OrganismSlideshow = ({
  settings = { mobile: {}, desktop: {}, tablet: {} },
  totalItems,
  children,
  arrowBackground,
  arrowColor,
  widthItem,
  widthHook,
  ...props
}: ISlideshowProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const [showDots, setShowDots] = useState<boolean>(false);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [itemsToShow, setItemsToShow] = useState<number>(1);

  const widthInternalHook = useWindowWidth();
  const width = widthHook ?? widthInternalHook;
  let interval: any = null;

  const indicators: Array<number> = useMemo(() => {
    return Array.from(Array(totalItems).keys());
  }, [itemsToShow, totalItems, width]);

  /* istanbul ignore next */
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0 || newIndex > totalItems) {
      newIndex = totalItems - itemsToShow;
      if (newIndex < 0) {
        newIndex = 0;
      }
    } else if (newIndex === totalItems - itemsToShow + 1) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  /* istanbul ignore next */
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  // for carousel settings
  useEffect(() => {
    let size: "mobile" | "tablet" | "desktop";
    if (width <= 768) {
      size = "mobile";
    } else if (width <= 1028) {
      size = "tablet";
    } else {
      size = "desktop";
    }
    setAutoplay(settings[size].autoplay || false);
    setItemsToShow(settings[size].itemsToShow || 1);
    setShowDots(settings[size].showDots || false);
    setShowArrows(settings[size].showArrows || false);
  }, [width, settings.mobile, settings.desktop, settings.tablet]);

  // for autoplay
  useEffect(() => {
    if (autoplay) {
      /* istanbul ignore next */
      interval = setInterval(() => {
        updateIndex(activeIndex + 1);
      }, 4000);

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
    return clearInterval(interval);
  }, [autoplay, updateIndex]);

  /* istanbul ignore next */
  const leftClick = () => {
    if (window?.getSelection) {
      window?.getSelection()?.removeAllRanges();
    }
    updateIndex(activeIndex - 1);
  };

  /* istanbul ignore next */
  const rightClick = () => {
    if (window?.getSelection) {
      window?.getSelection()?.removeAllRanges();
    }
    updateIndex(activeIndex + 1);
  };

  return (
    <SlideshowContainer {...props} {...handlers}>
      <SlidesToShowContainer margin="margin-auto">
        {showArrows && itemsToShow < totalItems && (
          <ArrowContainer
            background={arrowBackground}
            style={{ right: "0" }}
            onClick={rightClick}
          >
            <AtomIcon
              icon={"keyboard_arrow_right"}
              size={20}
              color={arrowColor ?? "neutral100"}
            />
          </ArrowContainer>
        )}
        <SlideshowInner
          transform={
            widthItem
              ? `translateX(-${activeIndex * widthItem}px)`
              : `translateX(-${activeIndex * (100 / itemsToShow)}%)`
          }
        >
          {children}
        </SlideshowInner>
        {showArrows && itemsToShow < totalItems && (
          <ArrowContainer 
            background={arrowBackground}
            style={{ left: "0" }}
            onClick={leftClick}
          >
            <AtomIcon
              icon={"keyboard_arrow_left"}
              size={20}
              color={arrowColor ?? "neutral100"}
            />
          </ArrowContainer>
        )}
      </SlidesToShowContainer>

      {showDots && (
        <SlideshowIndicators width={"100%"}>
          {indicators
            .filter(
              (_elements: any, index: number) =>
                index <= totalItems - itemsToShow
            )
            .map((_item: any, i: number) => (
              <Indicator
                key={i}
                onClick={() => updateIndex(i)}
                activeItem={activeIndex === i ? theme.primary : "transparent"}
              />
            ))}
        </SlideshowIndicators>
      )}
    </SlideshowContainer>
  );
};
