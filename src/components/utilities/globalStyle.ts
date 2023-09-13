import { createGlobalStyle } from "styled-components";

const NewGlobalStyle = createGlobalStyle`
*, *::before, *::after{
box-sizing: border-box;
}`;

export const GlobalStyle = NewGlobalStyle;
