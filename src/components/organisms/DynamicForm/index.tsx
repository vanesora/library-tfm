import React, { useState, useEffect, useMemo, useCallback } from "react";
import { TransformDataElementToComponent } from "./components/DataToComponent/index";
import { IRequiredDataElement } from "./interfaces/schemas";
import { AddLabelAndHelperText } from "./components/LabelAndHelperText/index";

interface IElementToSort {
  basic: boolean;
  horizontalPosition: number;
  verticalPositiion: number;
  component: JSX.Element;
}

interface IDataToReturn {
  response: null | string | boolean;
  error: boolean;
  fieldName: string;
}

function comparator(first: IElementToSort, second: IElementToSort): number {
  if (first.basic && second.basic) {
    return first.verticalPositiion - second.verticalPositiion;
  }
  return 0;
}

export const CreateComponent: React.FC<{
  dataElement: IRequiredDataElement;
  onChange: (value: string | boolean) => void;
  onError: (isError: boolean) => void;
  error?: boolean;
}> = ({ dataElement, onChange, onError, error = false }) => {
  const [helperText, setHelperText] = useState("");
  const [errorInComponent, setErrorInComponent] = useState(false);

  const onErrorComponent = (isError: boolean): void => {
    setErrorInComponent(isError);
    onError(isError);
  };

  const isError = error || errorInComponent;

  useEffect(() => {
    if (isError && dataElement.regex_description !== undefined) {
      setHelperText(dataElement.regex_description);
    } else {
      setHelperText(" ");
    }
  }, [isError, dataElement]);

  return (
    <AddLabelAndHelperText
      label={dataElement.field_label}
      helperText={helperText}
      helperTextProps={{ color: "secondary300" }}
    >
      <TransformDataElementToComponent
        onChange={onChange}
        dataElement={dataElement}
        onError={onErrorComponent}
      />
    </AddLabelAndHelperText>
  );
};

export const TransformDataArrayToComponents: React.FC<{
  data: IRequiredDataElement[];
  onChange: (index: number, value: string | boolean) => void;
  onError: (index: number, isError: boolean) => void;
  errors?: boolean[];
}> = ({ onChange, data, onError, errors }) => {
  const componentsToDisplay = useMemo(() => {
    const components = data.map(
      (dataElement: IRequiredDataElement, index: number) => {
        const onChangeComponent = (value: string | boolean): void => {
          return onChange(index, value);
        };

        const onErrorComponent = (isError: boolean): void => {
          return onError(index, isError);
        };

        return {
          basic: dataElement.basic,
          horizontalPosition: dataElement.position_H,
          verticalPositiion: dataElement.position_V,
          component: (
            <CreateComponent
              onChange={onChangeComponent}
              onError={onErrorComponent}
              dataElement={dataElement}
              error={errors?.[index]}
              key={index}
            />
          ),
        };
      }
    );

    components.sort(comparator);
    return components.map((element: IElementToSort) => element.component);
  }, [data, errors, onChange, onError]);

  return <>{componentsToDisplay}</>;
};

export const OrganismDynamicForm: React.FC<{
  data: IRequiredDataElement[];
  onChangeData: (response: IDataToReturn[]) => void;
  errors?: boolean[];
}> = ({ data, onChangeData, errors }) => {
  const [response, setResponse] = useState<
    Array<{
      response: null | string | boolean;
      error: boolean;
      fieldName: string;
    }>
  >(
    data.map((dataELement) => {
      return {
        response: null,
        error: false,
        fieldName: dataELement.field_name,
        type: dataELement.field_type,
      };
    })
  );

  useEffect(() => {
    onChangeData(response);
  }, [response, onChangeData]);

  const onChange = useCallback(
    (index: number, value: string | boolean): void => {
      setResponse((previous) => {
        const newResponse = [...previous];
        newResponse[index] = {
          ...previous[index],
          response: value,
        };
        return newResponse;
      });
    },
    []
  );

  const onError = useCallback((index: number, error: boolean): void => {
    setResponse((previous) => {
      const newResponse = [...previous];
      newResponse[index] = {
        ...previous[index],
        error,
      };
      return newResponse;
    });
  }, []);

  return (
    <TransformDataArrayToComponents
      onChange={onChange}
      data={data}
      onError={onError}
      errors={errors}
    />
  );
};
