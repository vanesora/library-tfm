import "@testing-library/jest-dom";
import { convertHexToRGBA } from "./functions";

describe("convertHexToRGBA", () => {
  it("convertHexToRGBA", async () => {
    const rgb = convertHexToRGBA("#FFFFFF");
    expect(rgb).toEqual("rgb(255, 255, 255)");
  });

  it("convertHexToRGBA hex.length === 3", async () => {
    const rgb = convertHexToRGBA("#FFF");
    expect(rgb).toEqual("rgb(255, 255, 255)");
  });
});
