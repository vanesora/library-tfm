import React, { useContext, useMemo } from "react";
import iconSet from "../../../assets/icons/selection.json";
import { IconContext } from "../../../context/iconContext";
export interface IIconProps {
  icon: string;
  size: "large" | "medium" | "small";
  color?: string;
}

export const AtomIcon = ({ size, icon, color = "black" }: IIconProps) => {
  const viewBoxMax = 1024;
  const localOffset = (0 / 2) * -1024;
  const offsetedViewBox = viewBoxMax - localOffset;

  const { icons } = useContext(IconContext);

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

  const currentSize = useMemo(() => {
    let newSize = "";
    switch (size) {
      case "large":
        newSize = "45px";
        break;
      case "medium":
        newSize = "24px";
        break;
      case "small":
        newSize = "15px";
        break;
      default:
        break;
    }
    return newSize;
  }, [size]);

  return React.createElement(
    "svg",
    {
      fill: String(color),
      width: String(currentSize),
      height: String(currentSize),
      viewBox: ""
        .concat(`${localOffset}`, " ")
        .concat(`${localOffset}`, " ")
        .concat(`${offsetedViewBox}`, " ")
        .concat(`${offsetedViewBox}`),
    },
    paths
  );
};
