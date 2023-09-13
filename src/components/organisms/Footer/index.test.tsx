import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { OrganismFooter, IFooterProps } from "./index";

describe("[React] Footer", () => {
  it("render component", () => {
    const props: IFooterProps = {
      appsButtons: {
        appstore: { appUrl: "/", showButton: true },
        playstore: { appUrl: "/", showButton: true },
      },
      footerText: "Esto es una prueba",
      footerLinks: [{ text: "Text Link", url: "https://mycooler.com/" }],
      logoTheme: "light",
    };
    const component = render(<OrganismFooter {...props} />);
    expect(component).toBeTruthy();
  });

  it("render social media icons", () => {
    const props: IFooterProps = {
      appsButtons: {
        appstore: { appUrl: "/", showButton: true },
        playstore: { appUrl: "/", showButton: true },
      },
      footerText: "Esto es una prueba",
      footerLinks: [{ text: "Text Link", url: "https://mycooler.com/" }],
      socialMediaIcons: [
        {
          iconName: "facebook",
          url: "/",
        },
        {
          iconName: "twitter",
          url: "/",
        },
        {
          iconName: "whatsapp",
          url: "/",
        },
      ],
      logoTheme: "light",
    };
    const component = render(<OrganismFooter {...props} />);
    expect(component).toBeTruthy();
    expect(props.socialMediaIcons).toBeDefined();
  });

  it("correct text on apps buttons", () => {
    const props: IFooterProps = {
      appsButtons: {
        appstore: { appUrl: "/", showButton: true },
        playstore: { appUrl: "/", showButton: false },
      },
      footerText: "Esto es una prueba",
      footerLinks: [{ text: "Text Link", url: "https://mycooler.com/" }],
      logoTheme: "light",
    };
    const component = render(<OrganismFooter {...props} />);
    const button = screen.getAllByRole("button");

    expect(component).toBeTruthy();
    expect(props.appsButtons).toBeDefined();

    button.forEach((btn) => {
      expect(btn).toHaveStyle({
        backgroundColor: "#20BBEC",
        display: "flex" || "none",
        width: "154px",
      });
      expect(btn).toHaveAttribute("color", "primary");
      expect(btn).toHaveAttribute("type", "button");
    });

    expect(screen.getByTestId("appleBtn").textContent).toBe("App Store");
    expect(screen.getByTestId("googleBtn").textContent).toBe("Play Store");
  });

  it("not showing app store button", () => {
    const props: IFooterProps = {
      appsButtons: {
        appstore: { appUrl: "/", showButton: false },
        playstore: { appUrl: "/", showButton: true },
      },
      footerText: "Esto es una prueba",
      footerLinks: [{ text: "Text Link", url: "https://mycooler.com/" }],
      logoTheme: "light",
    };
    const component = render(<OrganismFooter {...props} />);
    const button = screen.getAllByRole("button");

    expect(component).toBeTruthy();
    expect(props.appsButtons).toBeDefined();

    button.forEach((btn) => {
      expect(btn).toHaveStyle({
        display: "flex" || "none",
      });
    });
  });

  it("verify if footer links are showing", () => {
    const props: IFooterProps = {
      appsButtons: {
        appstore: { appUrl: "/", showButton: true },
        playstore: { appUrl: "/", showButton: false },
      },
      footerText: "Esto es una prueba",
      footerLinks: [{ text: "Text Link", url: "https://mycooler.com/" }],
      logoTheme: "light",
      socialMediaIcons: [
        {
          iconName: "facebook",
          url: "/",
        },
        {
          iconName: "twitter",
          url: "/",
        },
        {
          iconName: "whatsapp",
          url: "/",
        },
      ],
    };
    const component = render(<OrganismFooter {...props} />);

    expect(component).toBeTruthy();
    expect(props).toBeTruthy();
    expect(props.footerLinks).toBeTruthy();
    expect(screen.getAllByRole("link")).toBeDefined();
  });
});
