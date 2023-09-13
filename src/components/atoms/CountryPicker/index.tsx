import React, { useEffect, useRef, useState, useContext } from "react";
import {
  Select,
  Option,
  ItemContainer,
  Value,
  ContainerText,
  ContainerIcon,
  ContainerInput,
  ContainerIconFlag,
  ContainerIconOptions,
} from "./styles";
import { AtomIcon } from "react/atoms/Icon";
import { AtomBody } from "react/atoms/Typography/Body";
import { ICountriesProps } from "interfaces";
import { countriesList } from "data/countries";
import { CSSObject } from "styled-components";
import { ThemeContext } from "context/context";

export interface ICountryPickerProps {
  /** Initial selected value */
  value?: string;
  /** Text when nothing is selected */
  placeholder?: string;
  /** Enable or disable the selector */
  disabled?: boolean;
  /** Country codes array that will appear first */
  importantItems?: string[];
  /** Flag showing name countries */
  viewCountry?: boolean;
  /** Unable to change selected value */
  readOnly?: boolean;
  /** Flag showing if there is an error */
  hasError?: boolean;
  /** Minimum width */
  minWidth?: string;
  /** Action of changing value selected */
  onChange?: (value: ICountriesProps) => void;
  /** Css proprieties */
  styles?: CSSObject;
}

export const AtomCountryPicker = ({
  disabled = false,
  value,
  importantItems,
  viewCountry = true,
  hasError = false,
  placeholder = "-",
  minWidth = "180px",
  readOnly = false,
  onChange,
  styles = {},
  ...props
}: ICountryPickerProps) => {
  const [countriesListNew, setCountriesListNew] = useState([...countriesList]);
  const [items, setItems] = useState(countriesListNew);
  const [view, setView] = useState(false);
  const [actualValue, setActualValue] = useState(
    countriesListNew.find((x) => x.id == value)
  );
  const positionInit = items.find((item) => item.id === actualValue?.id);
  const [valueSelect, setValueSelect] = useState(
    positionInit ? items.indexOf(positionInit) : 0
  );
  const [valueInput, setValueInput] = useState("");
  const [viewIcon, setViewIcon] = useState(!!actualValue?.id);

  const myOptions = useRef<null | HTMLUListElement>(null);


  const useOutsideClick = (callback: any): any => {
    const ref = useRef<any>(null);

    useEffect(() => {
      const handleClick = (event: any) => {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (ref?.current && !ref?.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener("click", handleClick, true);

      return () => {
        document.removeEventListener("click", handleClick, true);
      };
    }, [ref]);

    return ref;
  };

  const handleClickOutside = (): void => {
    setView(false);
    setViewIcon(true);
  }

  const ref = useOutsideClick(handleClickOutside)

  const handlerSetValueSelect = () => {
    const position: any = items.find((item) => item.id === actualValue?.id);
    setValueSelect(position ? items.indexOf(position) : 0);
  };

  const scroll = (keyBoard?: string) => {
    if (keyBoard && myOptions && myOptions.current) {
      const actualScroll = myOptions.current.scrollTop;
      if (keyBoard == "up") {
        myOptions.current.scrollTo({
          top: actualScroll > 40 ? actualScroll - 40 : 0,
        });
      } else if (keyBoard == "down") {
        myOptions.current.scrollTo({
          top: actualScroll + 40,
        });
      } else {
        myOptions.current.scrollTo({
          top: 0,
        });
      }
    } else {
      const positionItem = items.findIndex((x) => x.id === actualValue?.id);
      myOptions &&
        myOptions.current?.scrollTo({
          top: actualValue?.id ? positionItem * 40 : 0,
        });
    }
  };

  const toggleOptions = () => {
    if (!disabled && !readOnly) {
      handlerSetValueSelect();
      setView(true);
      setViewIcon(false);
      setTimeout(() => {
        scroll();
      }, 50);
    }
  };

  const handleChange = (event: any): void => {
    setView(true);
    setValueInput(event.target.value);
    const NewItems = countriesListNew.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setItems(NewItems);
    const value = NewItems.findIndex((item) => item.id == actualValue?.id);
    if (value > 0) {
      setValueSelect(value);
    } else {
      setValueSelect(0);
      scroll("clear");
    }
  };

  const setSelectedThenCloseDropdown = (index: number) => {
    onChange && onChange(items[index]);
    setActualValue(items[index]);
    setValueInput("");
    setValueSelect(index);
    setView(false);
    setItems(countriesListNew);
    setViewIcon(true);
  };

  const handleListKeyDown = (e: any) => {
    if (disabled || readOnly) {
      return;
    }
    if (view) {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          handlerSetValueSelect();
          setValueInput("");
          setView(false);
          setViewIcon(true);
          setItems(countriesListNew);
          break;
        case "ArrowUp":
          e.preventDefault();
          setValueSelect(valueSelect - 1 >= 0 ? valueSelect - 1 : 0);
          scroll("up");
          break;
        case "ArrowDown":
          e.preventDefault();
          setValueSelect(
            valueSelect == items.length - 1 ? valueSelect : valueSelect + 1
          );
          scroll("down");
          break;
        case "Enter":
          e.preventDefault();
          setSelectedThenCloseDropdown(valueSelect);
          break;
        default:
          break;
      }
    }
  };

  const sortArray = () => {
    let count = 0;
    const list = [...countriesListNew];
    importantItems?.forEach((item) => {
      const element = list.find((country) => country.id == item);
      if (element) {
        const indexOf = items.indexOf(element);
        list.splice(indexOf, 1);
        list.splice(count, 0, element);
        count++;
      }
    });
    setCountriesListNew(list);
    setItems(list);
  };

  useEffect(() => {
    setActualValue(countriesListNew.find((x) => x.id == value));
  }, [value]);

  useEffect(() => {
    if (!disabled) {
      sortArray();
    }
  }, [importantItems, disabled]);

  const { palette } = useContext(ThemeContext);

  return (
    <Select ref={ref} onKeyDown={(e) => handleListKeyDown(e)}>
      <ContainerInput colorPalette={palette} minWidth={minWidth} disabled={disabled}>
        {viewIcon && (
          <ContainerIconFlag onClick={() => toggleOptions()}>
            <AtomIcon icon={actualValue?.icon ?? ""} size={24} />
          </ContainerIconFlag>
        )}
        <Value
          disabled={disabled}
          colorPalette={palette}
          onClick={() => toggleOptions()}
          onChange={(e) => handleChange(e)}
          aria-haspopup="listbox"
          aria-expanded={view}
          value={valueInput}
          actualValue={!!actualValue?.id}
          readOnly={readOnly}
          placeholder={
            !viewIcon && actualValue?.id
              ? ""
              : actualValue?.id
                ? `+${actualValue.code} ${viewCountry ? actualValue.name : ""}`
                : placeholder
          }
          hasError={hasError}
          styles={styles}
          {...props}
        ></Value>
        {!disabled && (
          <ContainerIcon onClick={() => toggleOptions()}>
            <AtomIcon
              icon={"keyboard_arrow_down"}
              size={10}
              color={"neutral600"}
            />
          </ContainerIcon>
        )}
      </ContainerInput>
      {view && !disabled && (
        <Option theme={palette} role="listbox" tabIndex={-1} ref={myOptions}>
          {items.map((item: ICountriesProps, index) => (
            <ItemContainer
              key={item.id}
              colorPalette={palette}
              disabled={disabled}
              id={item.id}
              role="option"
              aria-selected={valueSelect == index}
              tabIndex={0}
              backGround={
                item.id == items[valueSelect]?.id
                  ? palette.neutral200
                  : palette.neutral100
              }
              onClick={() => {
                setSelectedThenCloseDropdown(index);
              }}
            >
              <ContainerIconOptions>
                <AtomIcon icon={item.icon} size={24}></AtomIcon>
              </ContainerIconOptions>
              <ContainerText>
                <AtomBody
                  size="large"
                  text={`+${item.code} ${item.name}`}
                  align="left"
                  color={"neutral700"}
                  weight="regular"
                />
              </ContainerText>
            </ItemContainer>
          ))}
        </Option>
      )}
    </Select>
  );
};
