import { createContext, Context } from "react";
import iconSet from "../assets/icons/selection.json";

interface IconContextProps {
  IcoMoonType: string;
  icons: any;
  height: number;
  metadata: any;
  preferences: any;
}

export const DefaultContext: IconContextProps = {
  IcoMoonType: iconSet.IcoMoonType,
  icons: iconSet.icons,
  height: iconSet.height,
  metadata: iconSet.metadata,
  preferences: iconSet.preferences,
};

export const IconContext: Context<IconContextProps> =
  createContext(DefaultContext);
