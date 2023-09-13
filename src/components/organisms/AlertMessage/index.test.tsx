import React from "react";
import { OrganismAlertMessage, IAlertMessageProps } from "./index";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { theme } from "data/dataMx";

describe("[React] AlertMessage", () => {
  const props: IAlertMessageProps = {
    type: "info",
    title: "This is sample message for info modals",
    message:
      "Lorem ipsum dolors sit amet proin gravid electum sum prompectum delect.",
    textFirstBtn: "Yes, leave quiz",
    textSecondBtn: "Cancel",

    onClickFirstBtn: () => {},
  };

  it("Render component AlertMessage", async () => {
    await act(async () => {
      const component = render(<OrganismAlertMessage {...props} />);

      expect(component).toBeDefined();
    });
  });

  it("Render component AlertMessage success", async () => {
    await act(async () => {
      props.type = "success";
      const component = render(<OrganismAlertMessage {...props} />);
      const svg = component.container.querySelector("svg") as SVGSVGElement;

      expect(svg.getAttribute("fill")).toEqual(theme.quaternary);
    });
  });

  it("Render component AlertMessage error", async () => {
    await act(async () => {
      props.type = "error";
      const component = render(<OrganismAlertMessage {...props} />);
      const svg = component.container.querySelector("svg") as SVGSVGElement;

      expect(svg.getAttribute("fill")).toEqual(theme.secondary);
    });
  });

  it("Render component AlertMessage info", async () => {
    await act(async () => {
      props.type = "info";
      const component = render(<OrganismAlertMessage {...props} />);
      const svg = component.container.querySelector("svg") as SVGSVGElement;

      expect(svg.getAttribute("fill")).toEqual(theme.neutral300);
    });
  });

  it("Render component AlertMessage movile info", async () => {
    await act(async () => {
      window = Object.assign(window, { innerWidth: 414 });
      render(<OrganismAlertMessage {...props} />);

      const screenWidth = window.innerWidth;

      expect(screenWidth).toEqual(414);
    });
  });

  it("Render component AlertMessage descktop info", async () => {
    await act(async () => {
      window = Object.assign(window, { innerWidth: 800 });
      render(<OrganismAlertMessage {...props} />);

      const screenWidth = window.innerWidth;

      expect(screenWidth).toEqual(800);
    });
  });

  it("Render component AlertMessage movile success", async () => {
    await act(async () => {
      props.type = "success";
      window = Object.assign(window, { innerWidth: 414 });
      render(<OrganismAlertMessage {...props} />);

      const screenWidth = window.innerWidth;

      expect(screenWidth).toEqual(414);
    });
  });

  it("Render component AlertMessage descktop success", async () => {
    await act(async () => {
      props.type = "success";
      window = Object.assign(window, { innerWidth: 800 });
      render(<OrganismAlertMessage {...props} />);

      const screenWidth = window.innerWidth;

      expect(screenWidth).toEqual(800);
    });
  });

  it("Render component AlertMessage movile error", async () => {
    await act(async () => {
      props.type = "error";
      window = Object.assign(window, { innerWidth: 414 });
      render(<OrganismAlertMessage {...props} />);

      const screenWidth = window.innerWidth;

      expect(screenWidth).toEqual(414);
    });
  });

  it("Render component AlertMessage descktop error", async () => {
    await act(async () => {
      props.type = "error";
      window = Object.assign(window, { innerWidth: 800 });
      render(<OrganismAlertMessage {...props} />);

      const screenWidth = window.innerWidth;

      expect(screenWidth).toEqual(800);
    });
  });

  it("Render component AlertMessage custom icon descktop", async () => {
    await act(async () => {
      props.enableSecundaryBtn = true;
      props.type = "custom";
      props.customIcon = "beer";
      props.customColor = "tertiary500";
      window = Object.assign(window, { innerWidth: 800 });
      render(<OrganismAlertMessage {...props} />);

      const screenWidth = window.innerWidth;

      expect(screenWidth).toEqual(800);
    });
  });

  it("Render component AlertMessage custom icon movile", async () => {
    await act(async () => {
      props.enableSecundaryBtn = true;
      props.type = "custom";
      props.customIcon = "beer";
      props.customColor = "tertiary500";
      window = Object.assign(window, { innerWidth: 414 });
      render(<OrganismAlertMessage {...props} />);

      const screenWidth = window.innerWidth;

      expect(screenWidth).toEqual(414);
    });
  });

  it("Render component AlertMessage enable secundary button error", async () => {
    await act(async () => {
      props.enableSecundaryBtn = true;
      props.type = "error";
      const element = render(<OrganismAlertMessage {...props} />);

      expect(element.getByText("Cancel")).toBeDefined();
    });
  });

  it("Render component AlertMessage custom icon", async () => {
    await act(async () => {
      props.enableSecundaryBtn = true;
      props.type = "custom";
      props.customIcon = "beer";
      props.customColor = "tertiary500";
      const component = render(<OrganismAlertMessage {...props} />);

      const svg = component.container.querySelector("svg") as SVGSVGElement;

      expect(svg.getAttribute("fill")).toEqual(theme.tertiary500);
    });
  });
  it("Render component AlertMessage disable secundary button success", async () => {
    await act(async () => {
      props.type = "success";
      props.message = undefined;
      props.textSecondBtn = undefined;
      props.enableSecundaryBtn = false;
      const element = await render(<OrganismAlertMessage {...props} />);

      expect(element.queryByText("Cancel")).toBeNull();
    });
  });

  it("Render component AlertMessage enable secundary button info", async () => {
    await act(async () => {
      props.type = "info";
      props.enableSecundaryBtn = true;
      props.textSecondBtn = "Cancel";
      const element = await render(<OrganismAlertMessage {...props} />);

      expect(element.queryByText("Cancel")).not.toBeNull();
    });
  });

  it("Render component AlertMessage desktop success with backgrounColor and custom size", async () => {
    await act(async () => {
      props.type = "success";
      props.backgroundColor = "rgba(0,0,0,0.3)";
      props.width = "400px";
      props.height = "400px";
      window = Object.assign(window, { innerWidth: 800 });
      const component = render(<OrganismAlertMessage {...props} />);

      expect(component).toBeDefined();
    });
  });

  it("Render component AlertMessage desktop error with backgrounColor and custom size", async () => {
    await act(async () => {
      props.type = "error";
      props.backgroundColor = "rgba(0,0,0,0.3)";
      props.width = "400px";
      props.height = "400px";
      window = Object.assign(window, { innerWidth: 800 });
      const component = render(<OrganismAlertMessage {...props} />);

      expect(component).toBeDefined();
    });
  });

  it("Render component AlertMessage desktop info with backgrounColor and custom size", async () => {
    await act(async () => {
      props.type = "info";
      props.backgroundColor = "rgba(0,0,0,0.3)";
      props.width = "400px";
      props.height = "400px";
      window = Object.assign(window, { innerWidth: 800 });
      const component = render(<OrganismAlertMessage {...props} />);

      expect(component).toBeDefined();
    });
  });

  it("Render component AlertMessage desktop custom with backgrounColor and custom size", async () => {
    await act(async () => {
      props.type = "custom";
      props.backgroundColor = "rgba(0,0,0,0.3)";
      props.width = "400px";
      props.height = "400px";
      window = Object.assign(window, { innerWidth: 800 });
      const component = render(<OrganismAlertMessage {...props} />);

      expect(component).toBeDefined();
    });
  });

  it("Render component AlertMessage desktop custom with customColorBtn and custom size", async () => {
    await act(async () => {
      props.type = "custom";
      props.width = "400px";
      props.height = "400px";
      props.customColorBtn = "primary";
      window = Object.assign(window, { innerWidth: 800 });
      const component = render(<OrganismAlertMessage {...props} />);

      expect(component).toBeDefined();
    });
  });

  it("Render component AlertMessage desktop custom with customColorBtn and custom size innerWidthParent", async () => {
    await act(async () => {
      props.type = "custom";
      props.width = "400px";
      props.height = "400px";
      props.innerWidthParent = window.innerWidth;
      window = Object.assign(window, { innerWidth: 800 });
      const component = render(<OrganismAlertMessage {...props} />);

      expect(component).toBeDefined();
    });
  });
});
