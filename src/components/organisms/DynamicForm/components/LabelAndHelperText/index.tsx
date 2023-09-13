import React, { useState, useEffect } from "react";
import { AtomCaption } from "react/atoms/Typography/Caption";
import { ITypographyProps } from "react/atoms/Typography/TypographyProps";

export const AddLabelAndHelperText: React.FC<{
  label: string;
  helperText: string;
  children: React.ReactNode;
  labelProps?: Partial<ITypographyProps>;
  helperTextProps?: Partial<ITypographyProps>;
}> = ({
  label = "",
  helperText = "",
  children,
  labelProps = {},
  helperTextProps = {},
}) => {
  return (
    <>
      <AtomCaption
        text={label}
        size="xlarge"
        weight="regular"
        {...labelProps}
      />
      {children}
      <AtomCaption
        size="medium"
        color={"neutral600"}
        weight="light"
        styles={{ marginBottom: "25px" }}
        text={helperText}
        {...helperTextProps}
      />
    </>
  );
};
