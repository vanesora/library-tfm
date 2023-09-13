import React, { useState, useEffect } from "react";
import { SlideshowItemWrapper } from "./styles";
import { colors, theme } from "data/dataMx";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";

export interface ISlideshowItemProps {
  /** this is an object that receive the min width of the item dependind the resolution */
  minWidth?: IItemMinWidth;
  /** this is the border radius of the container if its necessary */
  borderRadius?: string;
  /** a prop to set the margin separation between items */
  margin: string;
  /** background color for the container */
  bgColor?: colors;
  /** component into AtomSlideshowItemContainer */
  children?: React.ReactNode;
  /** size to window */
  widthHook?: number;
}

interface IItemMinWidth {
  /** this are the multiple sizes for mobile, tablet and web */
  desktop?: string;
  mobile?: string;
  tablet?: string;
}

export const AtomSlideshowItemContainer = ({
  minWidth = { desktop: "", mobile: "", tablet: "" },
  borderRadius,
  margin,
  bgColor,
  children,
  widthHook,
}: ISlideshowItemProps) => {
  const widthInternalHook = useWindowWidth();
  const [itemWidth, setItemWidth] = useState<string>("100%");
  const [width, setWidth] = useState<number>(widthHook || widthInternalHook);

  useEffect(() => {
    if (width <= 768) {
      setItemWidth(minWidth.mobile || "100%");
    } else if (width > 768 && width <= 1028) {
      setItemWidth(minWidth.tablet || "100%");
    } else if (width > 1028) {
      setItemWidth(minWidth.desktop || "100%");
    }
  }, [width, minWidth]);

  useEffect(() => {
    widthHook && setWidth(widthHook);
  }, [widthHook]);

  return (
    <SlideshowItemWrapper
      data-testid="slide"
      bgColor={bgColor}
      itemWidth={itemWidth}
      borderRadius={borderRadius}
      margin={margin}
    >
      {children}
    </SlideshowItemWrapper>
  );
};
