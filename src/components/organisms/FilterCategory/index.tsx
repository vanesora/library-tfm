import React, { useEffect, useState } from "react";
import { AtomCardContainer } from "react/atoms/CardContainer";
import { AtomHeadline } from "react/atoms/Typography/Headline";
import { AtomIcon } from "react/atoms/Icon";
import { AtomImage } from "react/atoms/Image";
import { FilterCategory } from "./styles";
import { keysTheme, theme } from "data/dataMx";
import { ITypographyProps } from "react/atoms/Typography/TypographyProps";

export interface IFilterCategoryProps {
  /** Card border color */
  colorBorder?: keysTheme;
  /** Icon color */
  colorIcon?: keysTheme;
  /** Data to filter */
  data: any;
  /** Keys and values ​​to filter */
  filterBy: any;
  /** Icon */
  icon: string;
  /** Data to reset the filter */
  initialData: any;
  /** Enable or disable border and filter, pressing this card change this value */
  isSelect?: boolean;
  /** Function to execute when the card is pressed  */
  onPress: () => void;
  /** Filtered data  */
  filteredData: (data?: Object) => void;
  /** Filter text */
  text?: string;
  /** Image url */
  url?: string;
  /** Image height */
  imgHeight?: string;
  /** Image width */
  imgWidth?: string;
  /** CardContainer Height */
  height?: string;
  /** cardContainer widrh */
  width?: string;
  /** Props typography */
  textProps?: Omit<ITypographyProps, "text">;
}

export const OrganismsFilterCategory = ({
  colorBorder = "primary",
  colorIcon = "primary",
  data,
  filterBy,
  filteredData,
  icon,
  initialData,
  isSelect = false,
  onPress,
  text,
  textProps = {
    size: "xsmall",
  },
  url,
  imgHeight,
  imgWidth,
  height = "116px",
  width = "118px",
}: IFilterCategoryProps) => {
  const [info, setInfo] = useState(data);

  useEffect(() => {
    setInfo(data);
  }, [data]);

  useEffect(() => {
    filteredData(isSelect ? info : initialData);
  }, [info]);

  const selectCard = () => {
    filterBy.forEach((item: any) => {
      const filter = info.filter((i: any) => {
        const key = Object.keys(item);

        return i[key[0]] === item[key[0]];
      });

      setInfo(filter);
    });
    onPress();
  };

  return (
    <FilterCategory
      height={height}
      width={width}
      data-testid="fc-btn"
      onClick={() => {
        selectCard();
      }}
      isBorder={isSelect}
      colorBorder={theme[colorBorder]}
    >
      <AtomCardContainer
        height={height.indexOf("%") == -1 ? height : "100%"}
        width={width.indexOf("%") == -1 ? width : "100%"}
        justifyContent="space-around"
        alignItems="center"
      >
        {url ? (
          <AtomImage
            alt={url}
            src={url}
            imgHeight={imgHeight}
            imgWidth={imgWidth}
          />
        ) : (
          <AtomIcon
            styles={{ marginTop: "20px" }}
            icon={icon}
            color={colorIcon}
            size={40}
          />
        )}
        {text && (
          <AtomHeadline
            {...textProps}
            text={`${text.charAt(0).toUpperCase()}${text.slice(1)}`}
            styles={{ padding: 0, margin: 0 }}
          />
        )}
      </AtomCardContainer>
    </FilterCategory>
  );
};
