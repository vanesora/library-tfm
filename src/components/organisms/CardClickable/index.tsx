import React from "react";
import { ICardClickable } from "./CardTypes";
import {
  CardClickable,
  CardClickableInfo,
  CardClickableCategory,
  CardClickableImage,
  CardClickableDescription,
  CardClickableTitle,
  CardClickablePoints,
} from "./styles";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomTruncate } from "react/atoms/Typography/Truncate";
import { AtomImage } from "react/atoms/Image";

export const OrganismCardClickable = ({
  type,
  description,
  image,
  title,
  pointsText,
  pointsNumber,
  handleClick,
  category,
  heightCard,
  widthCard,
  separatorType = ",",
}: ICardClickable) => {
  const numberFormat = Intl.NumberFormat("en-US");
  const format = (n: number) => {
    switch (separatorType) {
      case ".":
        const split = numberFormat.format(n).split(",");
        return split.join(separatorType);
      default:
        return numberFormat.format(n);
    }
  };

  return (
    <CardClickable
      onClick={handleClick}
      type={type}
      heightCard={heightCard}
      widthCard={widthCard}
    >
      {category && type === "vertical" && (
        <CardClickableCategory>
          <AtomBody
            text={category}
            size="small"
            color={"neutral500"}
            weight="regular"
          />
        </CardClickableCategory>
      )}
      <CardClickableImage type={type}>
        <AtomImage
          src={image}
          alt="card clickable image"
          imgWidth="100%"
          imgHeight="160px"
        />
      </CardClickableImage>
      <CardClickableInfo>
        <CardClickableDescription>
          <AtomBody
            text={description}
            size="small"
            color={"neutral500"}
            weight="regular"
            styles={{ minHeight: "16px" }}
            align={type === "horizontal" ? "left" : "center"}
          />
        </CardClickableDescription>
        <CardClickableTitle>
          <AtomTruncate
            text={title}
            size="medium"
            weight="bold"
            numberOfLineTruncate={2}
            styles={{ minHeight: "40px" }}
            align={type === "horizontal" ? "left" : "center"}
          />
        </CardClickableTitle>
        {pointsText.length !== 0 && (
          <CardClickablePoints>
            <AtomBody
              text={`${format(pointsNumber)} ${pointsText}`}
              size="medium"
              weight="bold"
              color={"primary"}
              align={type === "horizontal" ? "left" : "center"}
            />
          </CardClickablePoints>
        )}
      </CardClickableInfo>
    </CardClickable>
  );
};
