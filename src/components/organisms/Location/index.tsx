import React, { useEffect, useState } from "react";
import { AtomHeadline } from "react/atoms/Typography/Headline";
import { ITypographyProps } from "react/atoms/Typography/TypographyProps";
import {
  ResultsContainer,
  SearchContainer,
  InputSearchContainer,
  LocationContainer,
  HeaderContainer,
  HeaderTextContainer,
  ButtonSearchContainer,
} from "./styles";

import { AtomButtonGhost } from "react/atoms/Buttons/Ghost";
import { MoleculeHistoryCard } from "react/molecules/HistoryCard";
import { OrganismsList } from "react/organisms/List";
import { MoleculeInput } from "react/molecules/Input";
import { AtomButtonIcon } from "react/atoms/Buttons/Icon";

interface ILocationItem {
  id: string;
  beesId: number;
  title: string;
  address: string;
  lat: number;
  long: number;
}

interface IConfigText {
  title: string;
  searchHint: string;
  searchButton: string;
  emptyLocationList: string;
}

export interface ILocationProps {
  locationsList: ILocationItem[];
  onClose?: (e?: any) => void;
  configText?: IConfigText;
}

const defaultConFigText = {
  title: "Redeem Locations",
  searchHint: "Type here by name to filter available locations",
  searchButton: "Search",
  emptyLocationList: "There are no locations available with your search.",
};

export const OrganismLocation = ({
  locationsList,
  onClose,
  configText = defaultConFigText,
}: ILocationProps) => {
  const [filterText, setFilterText] = useState("");
  const [filteredLocationList, setFilteredLocationList] = useState([]);
  const locationHistoryCardsList = (locationDataList: ILocationItem[]) => {
    const list: any = [];
    locationDataList.forEach((locationItem) => {
      list.push({
        cardHeight: "59px",
        cardWidth: "100%",
        iconColor: "neutral500",
        iconName: "location",
        iconSize: 24,
        iconCaptionText: locationItem.title,
        iconCaptionColor: "neutral700",
        iconDescriptionText: `${locationItem.address}`,
        iconDescriptionColor: "neutral600",
        arrowSize: 16,
        isClickable: true,
        onClick: () => {
          const baseMapsUrl =
            "https://www.google.com/maps/search/?api=1&query=";
          window.open(
            `${baseMapsUrl}${locationItem.lat},${locationItem.long}`,
            "_blank"
          );
        },
        centeredIcon: true,
        backgroundColor: "neutral200",
        shadowSize: "noshadow",
        iconCaptionSize: "large",
        iconCaptionWeight: "regular",
        iconDescriptionSize: "medium",
        iconDescriptionWeight: "regular",
      });
    });
    setFilteredLocationList(list);
  };

  useEffect(() => {
    locationHistoryCardsList(locationsList);
  }, []);

  useEffect(() => {
    locationHistoryCardsList(locationsList);
    handleSearchButton();
  }, [locationsList]);

  const handleFilterChange = (value: string) => {
    setFilterText(value);
    locationHistoryCardsList(
      locationsList.filter((loc) =>
        loc.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSearchButton = () => {
    console.log("handleSearchButton filterText: ", filterText);
    console.log("handleSearchButton locationsList: ", locationsList);
    if (filterText) {
      console.log("handleSearchButton filterText yes: ", filterText);

      locationHistoryCardsList(
        locationsList.filter((loc) =>
          loc.title.toLowerCase().includes(filterText.toLowerCase())
        )
      );
    }
  };

  return (
    <LocationContainer data-testid="location-container">
      <HeaderContainer>
        <AtomButtonIcon
          color="custom"
          disabled={false}
          icon="clear"
          text=""
          type="button"
          customColor="neutral"
          onClick={onClose}
          size="medium"
          typeButtonIcon="ghost"
        />
        <HeaderTextContainer>
          <AtomHeadline
            size="medium"
            text={configText.title}
            color="neutral700"
            weight="medium"
          />
        </HeaderTextContainer>
      </HeaderContainer>
      <SearchContainer>
        <InputSearchContainer>
          <MoleculeInput
            type="Text"
            helperText={configText.searchHint}
            onChange={handleFilterChange}
          />
        </InputSearchContainer>
        <ButtonSearchContainer>
          <AtomButtonGhost
            disabled={false}
            onClick={handleSearchButton}
            color="primary"
            text={configText.searchButton}
            type="button"
            width="144px"
            size="large"
          />
        </ButtonSearchContainer>
      </SearchContainer>
      <ResultsContainer>
        <OrganismsList
          listData={[
            {
              sectionTitle: "",
              customTitleStyle: {
                size: "xlarge",
                weight: "bold",
                styles: {
                  margin: "20px auto",
                },
              },
              listConfig: {
                renderComponent: MoleculeHistoryCard,
              },
              data: filteredLocationList,
            },
          ]}
          emptyDataProps={{
            bodyText: configText.emptyLocationList,
          }}
        />
      </ResultsContainer>
    </LocationContainer>
  );
};
