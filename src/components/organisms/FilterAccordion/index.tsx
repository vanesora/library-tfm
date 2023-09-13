/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { useState, useEffect, useContext } from "react";
import { AtomButtonDefault } from "react/atoms/Buttons/Default";
import { AtomButtonGhost } from "react/atoms/Buttons/Ghost";
import { AtomButtonIcon } from "react/atoms/Buttons/Icon";
import { AtomCardContainer } from "react/atoms/CardContainer";
import { AtomCheckbox } from "react/atoms/Checkbox";
import { AtomLink } from "react/atoms/Link";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomSubtitle } from "react/atoms/Typography/Subtitle";
import { MoleculeButtonGroup } from "react/molecules/ButtonGroup";
import {
  IAccordionElementsProps,
  IButtonGroupToggleProps,
  IItemProps,
} from "./index.interfaces";
import {
  FilterAccordionContent,
  ButtonContainer,
  FilterRow,
  CollapsiblePanel,
  SortingRow,
  DismissContainer,
  TitleContainer,
  Bar,
  FilterAccordionSortButton,
  ShowMore,
} from "./styles";
import { ThemeContext } from "context/context";

export interface IFilterAccordionProps {
  accordionElements: IAccordionElementsProps[];
  clearButtonLabel?: string;
  handleClear: () => void;
  showResultsLabel?: string;
  handleShow: () => void;
  setShowMore: (state: boolean) => void;
  handleClose?: () => void;
  handleChange?: (element: any[]) => void;
  showMore?: boolean;
  allBrands: any[];
  setOpen: (state: boolean) => void;
}

const filterObject: any = {};
let sortButtons: IButtonGroupToggleProps[] = [];

export const OrganismFilterAccordion = ({
  accordionElements,
  clearButtonLabel = "Clear all",
  handleClear,
  showResultsLabel = "Show Rewards",
  handleShow,
  handleClose,
  handleChange,
  showMore,
  setShowMore,
  allBrands,
  setOpen,
}: IFilterAccordionProps): JSX.Element => {
  const { palette } = useContext(ThemeContext);

  accordionElements.forEach((element) => {
    if (typeof filterObject[element.value] === "undefined") {
      if (element.value !== "") {
        filterObject[element.value] = [];
      }
    }
  });
  const [collapsed, setCollapsed] = useState(true);
  const [sortButtonsModified, setSortButtons] = useState(sortButtons);
  const [filterSelection, setFileterSelection] = useState<any[]>([]);

  useEffect(() => {
    handleChange && handleChange(filterSelection);
  }, [filterSelection]);

  useEffect(() => {
    const [sortButtonsArray] = accordionElements.filter(
      (element) => element.sortButtons.length > 0
    );
    if (
      sortButtonsArray?.sortButtons &&
      sortButtonsArray.sortButtons.length > 0
    ) {
      sortButtons = [];
      sortButtonsArray.sortButtons.forEach((element) => {
        const buttons: IItemProps[] = [];
        element.buttons.forEach((button, index) => {
          const newElement: IItemProps = {
            ...button,
            id: index,
            disabled: false,
            color: "primary",
            type: "outline",
          };
          buttons.push(newElement);
        });
        sortButtons.push({ title: element.title, buttons });
      });
      setSortButtons(sortButtons);
    }
  }, [accordionElements]);

  const handleClick = (elementId: number): void => {
    const [selectedElement] = accordionElements.filter(
      (element) => element.id === elementId
    );
    selectedElement.open = !selectedElement.open;
    setCollapsed(!collapsed);
    setOpen(false);
  };

  const getCheckValue = (selection: any, checked: any): void => {
    if (checked) {
      setFileterSelection([...filterSelection, selection]);
      handleChange && handleChange([...filterSelection, selection]);
    } else {
      setFileterSelection(
        filterSelection.filter((item) => item.value !== selection.value)
      );
      handleChange &&
        handleChange(
          filterSelection.filter((item) => item.value !== selection.value)
        );
    }
  };

  const handleClearFilter = (): void => {
    setFileterSelection([]);
    handleClear();
  };

  return (
    <>
      <AtomCardContainer
        flexDirection="column"
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
        bgColor={"neutral100"}
        height="auto"
        shadowSize="small"
        width="100%"
      >
        <FilterAccordionContent>
          <TitleContainer colors={palette}>
            <AtomSubtitle
              align="left"
              color={"neutral700"}
              size="small"
              text="Filters"
              weight="semibold"
              styles={{ margin: "24px" }}
            />
            <DismissContainer
              className={"container change"}
              onClick={handleClose}
              data-testid="id"
              key={"dismiss-container"}
            >
              <Bar className={"bar1 change"} colors={palette} />
              <Bar className={"bar2 change"} colors={palette} />
              <Bar className={"bar3 change"} colors={palette} />
            </DismissContainer>
          </TitleContainer>
          {accordionElements.map((element, index) => {
            return (
              <>
                <AtomButtonIcon
                  color="custom"
                  customColor="neutral"
                  icon={element.open ? "arrow_drop_up" : "arrow_drop_down"}
                  iconAlign="right"
                  onClick={() => handleClick(element.id)}
                  shape="default"
                  size="medium"
                  styles={{
                    color: `${palette.neutral700}`,
                    justifyContent: "space-between",
                    borderBottom: `1px solid ${palette.neutral300}`,
                    transition: "all ease .3s",
                    borderRadius: "0",
                    height: "auto",
                    padding: "24px",
                  }}
                  text={element.accordionTitle}
                  type="button"
                  typeButtonIcon="ghost"
                  width="100%"
                  disabled={false}
                  data-testid={`button-${index}`}
                />
                <CollapsiblePanel
                  data-testid={`collapsible-${index}`}
                  style={{ display: !element.open ? "none" : "block" }}
                >
                  {element.filters.map((filter) => {
                    return (
                      <FilterRow
                        data-testid={"checkbox-" + filter.value}
                        link={!!filter.link}
                        active={filter.active}
                        key={filter.text}
                        check={filter.type === "check"}
                        colors={palette}
                      >
                        {filter.type === "link" && (
                          <AtomLink
                            url={filter.link ? filter.link : ""}
                            typeIcon={"noIcon"}
                            text={filter.text}
                            color={"custom"}
                            customColor={"neutral"}
                            target={"_self"}
                            styles={{
                              width: "100%",
                              padding: "10px 25px",
                            }}
                          />
                        )}
                        {filter.type === "check" && (
                          <AtomCheckbox
                            onChange={(checked: boolean) =>
                              getCheckValue(
                                { text: filter.text, value: filter.value },
                                checked
                              )
                            }
                            checked={filter.checked ? filter.checked : false}
                            value={filter.value}
                            label={filter.text}
                          />
                        )}
                      </FilterRow>
                    );
                  })}
                  {element.value === "brands" && allBrands.length > 5 && (
                    <ShowMore
                      colors={palette}
                      onClick={() => {
                        setShowMore(!showMore);
                        setOpen(true);
                      }}
                    >
                      <AtomBody
                        align="left"
                        color={"primary"}
                        size="medium"
                        text={showMore ? "Show less..." : "Show all..."}
                        weight="semibold"
                      />
                    </ShowMore>
                  )}
                  {element.sortButtons.length > 0 &&
                    sortButtonsModified.map((buttons, index) => {
                      return (
                        <SortingRow key={index} colors={palette}>
                          <AtomBody
                            align="left"
                            color={"neutral700"}
                            size="medium"
                            styles={{ margin: 0 }}
                            text={buttons.title}
                            weight="regular"
                          />
                          <FilterAccordionSortButton>
                            <MoleculeButtonGroup
                              data={buttons.buttons}
                              direction="row"
                              groupStyle="toggle"
                            />
                          </FilterAccordionSortButton>
                        </SortingRow>
                      );
                    })}
                </CollapsiblePanel>
              </>
            );
          })}
        </FilterAccordionContent>
        <ButtonContainer>
          <AtomButtonGhost
            color="primary"
            customColor="tertiary"
            onClick={handleClearFilter}
            size="medium"
            text={clearButtonLabel}
            type="reset"
            width=""
            disabled={false}
          />
          <AtomButtonDefault
            color="primary"
            customColor="tertiary"
            onClick={handleShow}
            size="medium"
            text={showResultsLabel}
            type="submit"
            width=""
            disabled={false}
          />
        </ButtonContainer>
      </AtomCardContainer>
    </>
  );
};
