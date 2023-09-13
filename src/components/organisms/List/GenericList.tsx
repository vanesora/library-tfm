import React from "react";
import { IListConfig } from "./index";
import { ItemContainer, ListSectionContainer, RowContainer } from "./styles";

interface IGenericListProps<T> {
  renderItem: (item: T) => React.ReactNode;
  listConfig: IListConfig;
  data: T[];
  align?: "right" | "center" | "left";
}

export const GenericList = <T extends unknown>({
  data,
  renderItem,
  listConfig,
  align = "center",
}: IGenericListProps<T>) => {
  if (
    !!listConfig.numberOfColumns &&
    listConfig.numberOfColumns > 1 &&
    listConfig.orientation == "vertical"
  ) {
    const rows = Math.ceil(data.length / listConfig.numberOfColumns);
    let count = 0;
    let modifiedData = Array(rows);

    for (let row = 0; row < rows; row++) {
      const rowData = [];
      for (let col = 0; col < listConfig.numberOfColumns; col++) {
        rowData.push(data[count]);
        count++;
      }
      modifiedData.push(rowData.filter((x) => x));
    }

    modifiedData = modifiedData.filter((x) => x);

    return (
      <ListSectionContainer orientation="vertical" align={align}>
        {modifiedData.map((row, i) => (
          <RowContainer
            align={align}
            key={
              listConfig.keyExtractorList
                ? `row-${listConfig.keyExtractorList()}`
                : `row-${i}`
            }
          >
            {row.map((item: T, i: number) => (
              <ItemContainer
                key={
                  listConfig.keyExtractorList
                    ? listConfig.keyExtractorList()
                    : i
                }
                itemSeparation={listConfig.itemSeparation || "10px"}
                align={align}
              >
                {renderItem(item)}
              </ItemContainer>
            ))}
          </RowContainer>
        ))}
      </ListSectionContainer>
    );
  } else {
    return (
      <ListSectionContainer
        orientation={listConfig.orientation || "vertical"}
        align={align}
      >
        {data.map((item, i) => (
          <ItemContainer
            key={
              listConfig.keyExtractorList ? listConfig.keyExtractorList() : i
            }
            itemSeparation={listConfig.itemSeparation || "10px"}
            align={align}
          >
            {renderItem(item)}
          </ItemContainer>
        ))}
      </ListSectionContainer>
    );
  }
};
