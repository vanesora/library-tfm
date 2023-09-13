/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { OrganismsFilterCategory, IFilterCategoryProps } from "./index";
import { theme } from "data/dataMx";

const data = [
  {
    offer_id: "624f14992e26f50009f47d8f",
    offer_type: "digital_fulfillment",
    tittle: "Bud Light x Shinesty Scatter Can Boxers",
    description: "MicroModal soft fabric. Moisture wicking. Shinesty brand.",
    platform: "Rewards_USA",
    program: "MyCooler",
    abi_sku: "",
    url_imagen:
      "https://ltassets.blob.core.windows.net/mobile/341303a8-4250-46df-a00e-e292a728ba0a/uat_event_241f10e0-9961-407e-a5cd-9dd095063f82_bud%20light%20x%20shinesty%20scatter%20can%20boxers.png",
    total_available: 99976,
    filter_type: "merchandising",
    filter_category: "Clothes",
    filter_subcategory: "",
    filter_product: "",
    filter_color: "",
    filter_size: "L",
    filter_brand: "Bud Light",
    fulfillment: "abinbev",
    store_id: "44fa8dfe-eb3e-4b4e-a389-70e0cae0e659",
    points: 40,
    terms: "",
    group_sku: "us_myc_BudlightCanBoxer",
    digital_product: false,
  },
  {
    offer_id: "624f14992e26f50009f47d8e",
    offer_type: "digital_fulfillment",
    tittle: "Bud Label Women s One Piece Swimsuit",
    description:
      "No matter where you are  this women s one piece swimsuit will bring you back to your fondest memories with your favorite beer  Budweiser! Brand  Shinesty",
    platform: "Rewards_USA",
    program: "MyCooler",
    abi_sku: "",
    url_imagen:
      "https://ltassets.blob.core.windows.net/mobile/341303a8-4250-46df-a00e-e292a728ba0a/uat_event_d794c5a4-1f50-4b24-bd45-580586db0231_red_bud%20label%20women%C2%B4s%20one%20piece%20swimsuit.png",
    total_available: 5,
    filter_type: "merchandising",
    filter_category: "Clothes",
    filter_subcategory: "",
    filter_product: "",
    filter_color: "Red",
    filter_size: "L",
    filter_brand: "Budweiser",
    fulfillment: "abinbev",
    store_id: "44fa8dfe-eb3e-4b4e-a389-70e0cae0e659",
    points: 30,
    terms: "",
    group_sku: "us_myc_budweiserlabelwomen",
    digital_product: false,
  },
  {
    offer_id: "6298097da5c7310009d45f95",
    offer_type: "digital_fulfillment",
    tittle: "Budweiser Camara",
    description:
      "Sensor CMOS APS-C de 18 MP Funciones creativas avanzadas LCD de 7 7 cm (3 ) con formato 3 2 y  ngulo variable V deos Full HD DIGIC 4 ISO 100-6400  H 12800 Disparos a 5 3 fps para un m ximo de 58 im genes en JPEG Sistema AF con 9 puntos de enfoque tipo cruz Medici n de iFCL con sensor de doble capa de 63 zonas",
    platform: "Rewards_USA",
    program: "MyCooler",
    abi_sku: "",
    url_imagen:
      "https://ltassets.blob.core.windows.net/mobile/341303a8-4250-46df-a00e-e292a728ba0a/uat_event_1e37b689-2872-4b9a-abc2-3949fc71e4d5_captura%20de%20pantalla%202022-05-20%20a%20la(s)%2014.57.10.png",
    total_available: 76,
    filter_type: "experience",
    filter_category: "sweepstake",
    filter_subcategory: "",
    filter_product: "",
    filter_color: "",
    filter_size: "",
    filter_brand: "Stella Artois",
    fulfillment: "abinbev",
    store_id: "44fa8dfe-eb3e-4b4e-a389-70e0cae0e659",
    points: 0,
    terms: "",
    group_sku: "myc_us_00005",
    digital_product: false,
  },
] as const;

describe("[Native] FilterCategory", () => {
  const props: IFilterCategoryProps = {
    filteredData: jest.fn(),
    data,
    icon: "diamond",
    text: "Sweepstakes",
    filterBy: [{ filter_category: "sweepstake" }],
    initialData: data,
    onPress: jest.fn(),
  };

  it("Render component", () => {
    const component = render(<OrganismsFilterCategory {...props} />);
    expect(component).toBeDefined();
  });

  it("Is inactive", async () => {
    props.isSelect = false;
    const component = render(<OrganismsFilterCategory {...props} />);

    const filterCategory = component.getByTestId("fc-btn");

    fireEvent.click(filterCategory);

    const styles = window.getComputedStyle(filterCategory);

    expect(styles.borderRadius).toBe("10px");
    expect(styles.borderWidth).toBe("2px");
    expect(styles.borderColor).toBe("transparent");
  });

  it("Is active", async () => {
    props.colorIcon = "primary";
    props.colorBorder = "primary";
    props.isSelect = true;
    props.height = "100%";
    props.width = "100%";
    props.url =
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    const component = render(<OrganismsFilterCategory {...props} />);

    const filterCategory = component.getByTestId("fc-btn");

    fireEvent.click(filterCategory);

    const styles = window.getComputedStyle(filterCategory);

    expect(styles.borderRadius).toBe("10px");
    expect(styles.borderWidth).toBe("2px");
    expect(styles.borderColor).toBe(theme.primary.toLowerCase());
  });
});
