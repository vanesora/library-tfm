import React from "react";
import { AtomHeadline } from "react/atoms/Typography/Headline";
import { ITypographyProps } from "react/atoms/Typography/TypographyProps";
import { List } from "./styles";
import { GenericList } from "./GenericList";
import { IEmptyDataProps, MoleculeEmptyData } from "react/molecules/EmptyData";

type CustomTitleStylesType = Partial<Omit<ITypographyProps, "text">>;

interface ISectionList<T> {
  /** The title of the section */
  sectionTitle: string;
  /** Configuration of the list in each section */
  listConfig: IListConfig;
  /** Custom styles for the title */
  customTitleStyle?: CustomTitleStylesType;
  /** Array of data of each listed item */
  data: Array<T>;
}

export interface IListConfig {
  /** The component that will be renderer */
  renderComponent: any;
  /** How many columns the list will have (Only for vertical type) */
  numberOfColumns?: number;
  /** Function that is used to add key prop to each item to prevent React error when mapping arrays */
  keyExtractorList?: () => any;
  /** The type of list thet will be renderer */
  orientation?: "vertical" | "horizontal";
  /** Padding of the items */
  itemSeparation?: string;
  /** Array of data of each listed item */
  align?: "right" | "center" | "left";
}

export interface IListProps<T> {
  /** List of Data that wll be listed */
  listData: Array<ISectionList<T>>;
  /** The width of the list */
  listWidth?: string;
  /** Empty Data configuration */
  emptyDataProps?: Partial<IEmptyDataProps>;
}

export const OrganismsList = <T extends unknown>({
  listData,
  listWidth = "100%",
  emptyDataProps,
}: IListProps<T>) => {
  const _renderItem = ({ item, RenderComponent }: any) => {
    return <RenderComponent {...item} />;
  };

  const EmptyListData = () => {
    return (
      <MoleculeEmptyData
        {...emptyDataProps}
        iconName={emptyDataProps?.iconName || "empty-beer"}
        titleText={emptyDataProps?.titleText || "Hey Beer Lover!"}
        bodyText={
          emptyDataProps?.bodyText ||
          "New Offers comming soon, please stay tune for more"
        }
      />
    );
  };

  return (
    <List listWidth={listWidth}>
      {!listData.length ? (
        <EmptyListData />
      ) : (
        listData.map(
          ({
            sectionTitle,
            customTitleStyle,
            data,
            listConfig,
          }: ISectionList<T>) => {
            return (
              <div
                key={`${sectionTitle}-${listConfig.orientation}-${listConfig.numberOfColumns}`}
              >
                <AtomHeadline
                  size="small"
                  text={sectionTitle}
                  {...customTitleStyle}
                />
                {!data.length ? (
                  <EmptyListData />
                ) : (
                  <GenericList
                    data={data}
                    renderItem={(item: T) =>
                      _renderItem({
                        item,
                        RenderComponent: listConfig.renderComponent,
                      })
                    }
                    listConfig={listConfig}
                    align={listConfig.align}
                  />
                )}
              </div>
            );
          }
        )
      )}
    </List>
  );
};
