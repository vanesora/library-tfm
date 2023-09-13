import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";
import { OrganismsList, IListProps, IListConfig } from ".";
import { theme } from "data/dataMx";
import {
  MoleculeHistoryCard,
  IHistoryCardProps,
} from "react/molecules/HistoryCard";

import { GenericList } from "./GenericList";

describe("[React] Organism List", () => {
  it("Render Vertical List", () => {
    const props: IListProps<IHistoryCardProps> = {
      listData: [
        {
          sectionTitle: "Vertical List",
          customTitleStyle: {
            size: "xlarge",
            color: "secondary",
            weight: "bold",
            styles: {
              margin: "20px 0px",
            },
          },
          listConfig: {
            renderComponent: MoleculeHistoryCard,
          },
          data: [
            {
              cardWidth: "500px",
              cardHeight: "70px",
              iconName: "earn_badges",
              iconSize: 45,
              iconCaptionText: "Rewards",
              iconCaptionColor: "neutral700",
            },
            {
              cardWidth: "500px",
              cardHeight: "70px",
              iconName: "earn_scan",
              iconSize: 45,
              iconCaptionText: "Scan",
              iconCaptionColor: "neutral700",
            },
          ],
        },
      ],
    };
    const component = render(<OrganismsList {...props} />);
    expect(component).toBeTruthy();
  });

  it("Render Horizontal List Component", () => {
    const props: IListProps<IHistoryCardProps> = {
      listWidth: "750%",
      listData: [
        {
          sectionTitle: "Horizontal List",
          customTitleStyle: {
            size: "xlarge",
            color: "secondary",
            weight: "bold",
            styles: {
              margin: "20px 0px",
            },
          },
          listConfig: {
            renderComponent: MoleculeHistoryCard,
            orientation: "horizontal",
          },
          data: [
            {
              cardWidth: "500px",
              cardHeight: "70px",
              iconName: "earn_badges",
              iconSize: 45,
              iconCaptionText: "Rewards",
              iconCaptionColor: "neutral700",
            },
            {
              cardWidth: "500px",
              cardHeight: "70px",
              iconName: "earn_scan",
              iconSize: 45,
              iconCaptionText: "Scan",
              iconCaptionColor: "neutral700",
            },
            {
              cardWidth: "500px",
              cardHeight: "70px",
              iconName: "earn_scan",
              iconSize: 45,
              iconCaptionText: "Scan",
              iconCaptionColor: "neutral700",
            },
          ],
        },
      ],
    };
    const component = render(<OrganismsList {...props} />);
    expect(component).toBeTruthy();
  });

  it("Render Vertical List with columns", () => {
    const props: IListProps<IHistoryCardProps> = {
      listData: [
        {
          sectionTitle: "Vertical List",
          customTitleStyle: {
            size: "xlarge",
            color: "secondary",
            weight: "bold",
            styles: {
              margin: "20px 0px",
            },
          },
          listConfig: {
            renderComponent: MoleculeHistoryCard,
            numberOfColumns: 3,
          },
          data: [
            {
              cardWidth: "500px",
              cardHeight: "70px",
              iconName: "earn_badges",
              iconSize: 45,
              iconCaptionText: "Rewards",
              iconCaptionColor: "neutral700",
            },
            {
              cardWidth: "500px",
              cardHeight: "70px",
              iconName: "earn_scan",
              iconSize: 45,
              iconCaptionText: "Scan",
              iconCaptionColor: "neutral700",
            },
            {
              cardWidth: "500px",
              cardHeight: "70px",
              iconName: "earn_scan",
              iconSize: 45,
              iconCaptionText: "Scan",
              iconCaptionColor: "neutral700",
            },
          ],
        },
      ],
    };
    const component = render(<OrganismsList {...props} />);
    expect(component).toBeTruthy();
  });

  it("Test genericList", () => {
    const listConfig: IListConfig = {
      renderComponent: MoleculeHistoryCard,
      numberOfColumns: 3,
      orientation: "vertical",
    };

    const data = [
      {
        cardWidth: "500px",
        cardHeight: "70px",
        iconName: "earn_badges",
        iconSize: 45,
        iconCaptionText: "Rewards",
        iconCaptionColor: "neutral700",
      },
      {
        cardWidth: "500px",
        cardHeight: "70px",
        iconName: "earn_scan",
        iconSize: 45,
        iconCaptionText: "Scan",
        iconCaptionColor: "neutral700",
      },
      {
        cardWidth: "500px",
        cardHeight: "70px",
        iconName: "earn_scan",
        iconSize: 45,
        iconCaptionText: "Scan",
        iconCaptionColor: theme.neutral700,
      },
    ];

    const _renderItem = ({ item, RenderComponent }: any) => {
      return <RenderComponent {...item} />;
    };

    const component = render(
      <GenericList
        data={data}
        listConfig={listConfig}
        renderItem={(item: any) =>
          _renderItem({ item, RenderComponent: listConfig.renderComponent })
        }
      />
    );
    expect(component).toBeTruthy();
  });
});
