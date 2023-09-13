import React, { useMemo, useContext } from "react";
import { ILogoTheme, ILogoSize, ILogoText } from "./types";
import iconSet from "icons/logos/selection.json";
import { CSSObject } from "styled-components";
import { Link } from "../Link/styles";
import { ThemeContext } from "context/context";

export interface ILogoProps {
  /** Logo Size */
  size: ILogoSize;
  /** Add MyCooler text to the logo */
  text?: ILogoText;
  /** Select type of logo */
  logoTheme: ILogoTheme;
  /** Link where the logo redirect on press */
  /* To Do: validate the url is valid */
  url?: string;
  /* name of custom class that will be added to logo for CSS styling */
  className?: string;
  /* CSS object that will be applied to logo atom */
  style?: CSSObject;
}

export const logoSizes = {
  centered: {
    large: {
      width: 182,
      height: 150,
      viewBoxRatio: 6.9,
    },
    medium: {
      width: 125,
      height: 104,
      viewBoxRatio: 10,
    },
    small: {
      width: 80,
      height: 66,
      viewBoxRatio: 16,
    },
  },
  sided: {
    large: {
      width: 230,
      height: 70,
      viewBoxRatio: 14.5,
    },
    medium: {
      width: 160,
      height: 50,
      viewBoxRatio: 21,
    },
    small: {
      width: 108,
      height: 34,
      viewBoxRatio: 31,
    },
  },
  none: {
    large: {
      width: 94,
      height: 106,
      viewBoxRatio: 9.5,
    },
    medium: {
      width: 64,
      height: 72,
      viewBoxRatio: 14,
    },
    small: {
      width: 40,
      height: 44,
      viewBoxRatio: 23,
    },
  },
};

const icons = {
  light: {
    centered: "light-centered",
    sided: "light-sided",
    none: "light-dark-solo",
  },
  monocromatic: {
    centered: "monocromatic-centered",
    sided: "monocromatic-sided",
    none: "monocromatic-solo",
  },
  dark: {
    centered: "dark-centered",
    sided: "dark-sided",
    none: "light-dark-solo",
  },
};

export const AtomLogo = ({
  size,
  text = "none",
  logoTheme,
  url = "/",
  className = "atom__logo",
  style = {},
}: ILogoProps) => {
  const { palette } = useContext(ThemeContext);

  const getIcon = () => {
    return icons[logoTheme][text ?? "none"];
  };

  const currentIcon = useMemo(() => {
    // Any is used here in attrs because attrs can be diferent for each path
    return iconSet.icons
      .map(
        (item: {
          properties: { name: string };
          icon: { paths: string[] };
          attrs: any[];
        }) => {
          return {
            name: item.properties.name,
            paths: item.icon.paths,
            attrs: item.attrs,
          };
        }
      )
      .find((item: { name: string }) => {
        return item.name === getIcon();
      });
  }, [iconSet, getIcon()]);

  const paths = currentIcon?.paths.map((p: string, inx: number) =>
    React.createElement("path", {
      key: String(inx),
      d: p,
      ...currentIcon?.attrs[inx],
    })
  );

  const logoSizeConfig = logoSizes[text][size];
  const svgElement = React.createElement(
    "svg",
    {
      width: logoSizeConfig.width,
      height: logoSizeConfig.height,
      viewBox: "0 0 "
        .concat(`${logoSizeConfig.width * logoSizeConfig.viewBoxRatio}`, " ")
        .concat(`${logoSizeConfig.height * logoSizeConfig.viewBoxRatio}`),
    },
    paths
  );
  return (
    <Link
      colorPalette={palette}
      color={"custom"}
      customColor={"neutral"}
      disabled={false}
      className={className}
      href={url}
      styles={style}
    >
      {svgElement}
    </Link>
  );
};
