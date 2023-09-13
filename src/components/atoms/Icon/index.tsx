import React, { useContext, useMemo } from "react";
import iconSet from "icons/selection.json";
import { keysTheme } from "data/dataMx";
import { CSSObject } from "styled-components";
import { IconContext } from "../../../../context/iconContext";
import { ThemeContext } from "context/context";

export interface IIconProps {
  icon: string;
  size: number;
  color?: keysTheme;
  styles?: CSSObject;
}

export const AtomIcon = ({
  size,
  icon,
  color = "neutral700",
  styles = {},
}: IIconProps) => {
  const viewBoxMax = 1024;
  const localOffset = (0 / 2) * -1024;
  const offsetedViewBox = viewBoxMax - localOffset;

  const { icons } = useContext(IconContext);
  const { palette } = useContext(ThemeContext);

  const currentIcon = useMemo(() => {
    // Any is used here in attrs because attrs can be diferent for each path

    if (icons !== undefined) {
      return icons
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
          return item.name === icon;
        });
    }
  }, [iconSet, icon]);

  const paths = currentIcon?.paths.map((p: string, inx: number) =>
    React.createElement("path", {
      key: String(inx),
      d: p,
      ...currentIcon?.attrs[inx],
    })
  );

  return React.createElement(
    "svg",
    {
      style: styles,
      fill: palette[color],
      width: String(size),
      height: String(size),
      viewBox: ""
        .concat(`${localOffset}`, " ")
        .concat(`${localOffset}`, " ")
        .concat(`${offsetedViewBox}`, " ")
        .concat(`${offsetedViewBox}`),
    },
    paths
  );
};
