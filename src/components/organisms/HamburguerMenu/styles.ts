import styled, { CSSObject } from "styled-components";

interface IStylesProps {
  styles?: CSSObject;
  display?: string;
}

export const HamburguerContainer = styled.div`
  display: ${({ display }: IStylesProps) => display};
  cursor: pointer;
  .bar1,
  .bar2,
  .bar3 {
    width: 24.75px;
    height: 3px;
    background-color: #333;
    margin: 0 0 3px 0;
    transition: 0.4s;
  }

  .bar1.change {
    -webkit-transform: rotate(-45deg) translate(-3px, 3px);
    transform: rotate(-45deg) translate(-3px, 3px);
  }

  .bar2.change {
    opacity: 0;
  }

  .bar3.change {
    -webkit-transform: rotate(45deg) translate(-5px, -6px);
    transform: rotate(45deg) translate(-5px, -6px);
  }
  .hide_logo {
    display: none;
  }
  .show_logo {
    float: right;
    display: block;
    margin-top: -10px;
  }
`;
export const OverlayMenuContainer = styled.div`
  display: none;
  &.change {
    display: grid;
  }
  object-fit: contain;
  justify-content: left;
  a {
    padding: 25px 0 25px 25px;
    width: 300px;
    svg {
      margin-right: 18px;
    }
    &:hover {
      background: #f3f8fa;
      border-radius: 8px;
    }
  }
`;
