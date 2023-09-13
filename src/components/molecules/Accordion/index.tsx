import React, {
  FunctionComponent,
  useEffect,
  useState,
  useContext,
} from "react";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomSubtitle } from "react/atoms/Typography/Subtitle";
import { AtomIcon } from "react/atoms/Icon";
import {
  StyledAccordion,
  StyledContainer,
  StyledHeader,
  StyledHeaderText,
  StyledPanel,
} from "./styles";
import { CSSObject } from "styled-components";
import { ThemeContext } from "context/context";

export interface IAccordionProps {
  data: IItemProps[];
  stylesAccordion?: CSSObject;
  stylesPanel?: CSSObject;
  stylesContainer?: CSSObject;
}
interface IItemProps {
  header: string; // Value to write as header
  detail: string; // Value to write as detail
  _id: any; // Value to use as key
}

export const MoleculeAccordion: FunctionComponent<IAccordionProps> = ({
  data,
  stylesAccordion,
  stylesPanel,
  stylesContainer,
}) => {
  const { palette } = useContext(ThemeContext);

  const [array, setArray] = useState(
    data.map((item) => {
      return {
        ...item,
        open: false,
      };
    })
  );

  const handlerPress = (row: any) => {
    const newArray = array.map((item) => {
      return {
        ...item,
        open: item._id === row._id ? !item.open : item.open,
      };
    });
    setArray(newArray);
  };

  useEffect(() => {
    setArray(
      data.map((item) => {
        return {
          ...item,
          open: false,
        };
      })
    );
  }, [data]);

  return (
    <StyledAccordion styles={stylesAccordion}>
      {array.map((item: any) => {
        return (
          <StyledPanel key={item._id} id={`accordion`} styles={stylesPanel}>
            <StyledHeader
              colorPalette={palette}
              onClick={() => handlerPress(item)}
              id={`item_${item._id}`}
            >
              <StyledHeaderText>
                <AtomSubtitle
                  size="xsmall"
                  text={item.header}
                  weight="medium"
                  align="left"
                  styles={{ margin: 0 }}
                />
              </StyledHeaderText>
              <AtomIcon icon={item.open ? "remove" : "add"} size={19} />
            </StyledHeader>
            {item.open && (
              <StyledContainer styles={stylesContainer}>
                <AtomBody
                  size="xlarge"
                  text={item.detail}
                  align="left"
                  weight="regular"
                />
              </StyledContainer>
            )}
          </StyledPanel>
        );
      })}
    </StyledAccordion>
  );
};
