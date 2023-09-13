import React from "react";
import { keysTheme } from "data/dataMx";
import { AtomSubtitle } from "react/atoms/Typography/Subtitle";
import { AtomDivider } from "react/atoms/Divider";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomImage } from "react/atoms/Image";
import {
  Banner,
  BannerImage,
  BannerContent,
  BannerContentTitle,
  BannerContentDivider,
} from "./styles";

export interface IBannerProps {
  /** Image of banner */
  image: string;
  /** Title of banner */
  title: string;
  /** Text description banner */
  text: string;
  /** Position of text banner */
  textPosition: "left" | "right";
  /** Color of color title */
  titleColor?: keysTheme;
}

export const MoleculeBanner = ({
  image,
  title,
  text,
  textPosition,
  titleColor,
}: IBannerProps) => {
  return (
    <Banner textPosition={textPosition}>
      <BannerContent textPosition={textPosition}>
        <BannerContentTitle textPosition={textPosition}>
          <AtomSubtitle
            text={title}
            align={textPosition === "right" ? "left" : "right"}
            size="large"
            weight="semibold"
            color={titleColor || "primary"}
          />
          <BannerContentDivider>
            <AtomDivider color={"primary400"} height={"1px"} />
          </BannerContentDivider>
        </BannerContentTitle>
        <AtomBody
          text={text}
          align={textPosition === "right" ? "left" : "right"}
          size="xlarge"
          weight="semibold"
        />
      </BannerContent>
      <BannerImage>
        <AtomImage src={image} alt="image" />
      </BannerImage>
    </Banner>
  );
};
