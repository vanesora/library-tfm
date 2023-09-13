import React from "react";
import { StyledIframe } from "./styles";

export interface IWebViewProps {
  src: string;
}

export const AtomWebView = ({ src }: IWebViewProps) => (
  <StyledIframe src={src} />
);
