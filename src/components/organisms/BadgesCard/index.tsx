import React from "react";
import { AtomCardContainer } from "react/atoms/CardContainer";
import { AtomImage } from "react/atoms/Image";
import {
  IButtonBadgeProps,
  MoleculeButtonBadge,
} from "react/molecules/ButtonBadge";
import { BoxImage, CardBody, ContainerBadge, ContainerBadges } from "./styles";

export interface IBadgeCardProps {
  /** Array Badges */
  badges: IButtonBadgeProps[];
  /** Atom's card container width */
  cardWidth?: string;
  /** Atom's card container height */
  cardHeight?: string;
  /** Atom's card container shadowsize */
  cardShadowSize?: "small" | "regular" | "large";
  /** Img to card top */
  img?: string;
  /** Img alt (Name or description) */
  imgAlt?: string;
  /** Img width to card top */
  imgWidth?: string;
  /** Img height to card top */
  imgHeight?: string;
}

export const OrganismBadgeCard = ({
  badges,
  cardWidth = "100%",
  cardHeight = "100%",
  cardShadowSize = "regular",
  img,
  imgAlt = "",
  imgWidth = "150px",
  imgHeight = "100%",
}: IBadgeCardProps) => {
  return (
    <AtomCardContainer
      height={cardHeight}
      width={cardWidth}
      shadowSize={cardShadowSize}
    >
      <CardBody>
        {img && (
          <BoxImage>
            <AtomImage
              alt={imgAlt}
              imgWidth={imgWidth}
              imgHeight={imgHeight}
              resizeMode="cover"
              src={img}
            />
          </BoxImage>
        )}
        <ContainerBadges>
          {badges &&
            badges.length > 0 &&
            badges.map((badge: IButtonBadgeProps, index: number) => (
              <ContainerBadge key={index}>
                <MoleculeButtonBadge
                  altTextImg={badge.altTextImg}
                  badgeText={badge.badgeText}
                  badgeStatus={badge.badgeStatus}
                  bgColor={badge.bgColor}
                  image={badge.image}
                  onClick={badge.onClick}
                />
              </ContainerBadge>
            ))}
        </ContainerBadges>
      </CardBody>
    </AtomCardContainer>
  );
};
