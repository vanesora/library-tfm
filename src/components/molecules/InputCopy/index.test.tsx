import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { MoleculeInputCopy } from "./index";

const iconCopy =
  "M469.333 426.667c-23.565 0-42.667 19.102-42.667 42.667v384c0 23.565 19.102 42.667 42.667 42.667h384c23.565 0 42.667-19.102 42.667-42.667v-384c0-23.565-19.102-42.667-42.667-42.667h-384zM341.333 469.333c0-70.692 57.308-128 128-128h384c70.694 0 128 57.308 128 128v384c0 70.694-57.306 128-128 128h-384c-70.692 0-128-57.306-128-128v-384z";

describe("[React] MoleculeInputCopy", () => {
  it("Render component", async () => {
    const component = render(<MoleculeInputCopy />);
    const path = document.querySelector("path") as SVGPathElement;
    expect(path.hasAttribute(iconCopy));
  });

  it("Copy text", async () => {
    const component = render(
      <MoleculeInputCopy value={"query"} copyMessage={"Copied!"} />
    );
    const copyButton = document.getElementById("copyText") as HTMLDivElement;
    fireEvent.click(copyButton);
    expect(copyButton).not.toBeNull();
  });

  it("Change value", async () => {
    const component = render(<MoleculeInputCopy value={"query"} />);
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "query2" } });
    fireEvent.blur(input);
    expect(input.value).toBe("query2");
  });

  it("Change value error", async () => {
    const component = render(<MoleculeInputCopy value={""} />);
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);
    expect(input.value).toBe("");
  });
});
