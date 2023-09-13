import React from "react";
import "jest-styled-components";
import { fireEvent, render, screen } from "@testing-library/react";
import { OrganismLocation, ILocationProps } from ".";

describe("[React] Organism Location", () => {
  const props: ILocationProps = {
    locationsList: [
      {
        id: "62acc7231f4e773df497bbb3",
        beesId: 43901,
        title: "Bar2Miami2",
        lat: 26.362,
        long: -8.012,
        address: "5150 Town Center Cir  Boca Raton  FL 33486",
      },
      {
        id: "62acc7231f4e773df497bbba",
        beesId: 27117,
        title: "Bar Art",
        lat: 19.432608,
        long: -99.133209,
        address: "Aguacate No. 19 El Rosario",
      },
      {
        id: "62f53819676c520009083ed3",
        beesId: 91085,
        title: "DEPOSITO LA PASADITA",
        lat: 8.562602,
        long: -37.927937,
        address: "CONOCIDO S/N LA CIUDAD",
      },
      {
        id: "62f5462a2b40eb00091c382d",
        beesId: 91086,
        title: "ABARROTES TITA",
        lat: 8.745062,
        long: -37.24344,
        address: "ZARAGOZA 50 MIGUEL AUZA",
      },
      {
        id: "62acc7231f4e773df497bbb2",
        beesId: 43899,
        title: "BarMiami1",
        lat: 25.831,
        long: -8.021,
        address: "5946 NW 12th Ave, Miami, FL 33127, Estados Unidos",
      },
      {
        id: "62acc7231f4e773df497bbb8",
        beesId: 27115,
        title: "Bar Cedrick",
        lat: 19.432608,
        long: -99.133209,
        address: "Aguacate No. 19 El Rosario",
      },
      {
        id: "62acc7231f4e773df497bbb7",
        beesId: 27116,
        title: "Bar Burley",
        lat: 19.432608,
        long: -99.133209,
        address: "Aguacate No. 19 El Rosario",
      },
      {
        id: "62acc7231f4e773df497bbb9",
        beesId: 43902,
        title: "BarWashington1",
        lat: 3.893,
        long: -7.707,
        address: "3101 Wisconsin Ave NW  Washington",
      },
      {
        id: "62acc7231f4e773df497bbb4",
        beesId: 43900,
        title: "BarNY1",
        lat: 4.079,
        long: -7.395,
        address: "1220 5th Ave  New York  NY 10029",
      },
      {
        id: "62acc7231f4e773df497bbb6",
        beesId: 27062,
        title: "Guevara Quispe Maria Hermelinda",
        lat: -7.224825,
        long: -79.428033,
        address: "Ca Triunfo 0598",
      },
      {
        id: "62acc7231f4e773df497bbb5",
        beesId: 27060,
        title: "Campos De Sanchez Gloria",
        lat: -7.230972,
        long: -79.429052,
        address: "Ca Chiclayo 0394",
      },
    ],
    onClose: () => {
      alert("close");
    },
  };

  const configTextMock = {
    title: "Redeem Locations",
    searchHint: "Type here by name to filter available locations",
    searchButton: "Search",
    emptyLocationList: "There are no locations available with your search.",
  };

  it("Render Location Organism with default configText", () => {
    const organismLocation = render(<OrganismLocation {...props} />);
    expect(organismLocation).toBeTruthy();
  });

  it("Render Location Organism", () => {
    props.configText = configTextMock;
    const organismLocation = render(<OrganismLocation {...props} />);
    expect(organismLocation).toBeTruthy();
  });

  it("Render LocationOrganism and change Search text", () => {
    const organismLocation = render(<OrganismLocation {...props} />);
    const searchInput = organismLocation.getByDisplayValue("");
    fireEvent.change(searchInput, { target: { value: "Mia" } });
    expect(organismLocation).toBeTruthy();
    expect((searchInput as HTMLInputElement).value).toBe("Mia");
  });

  it("Render and click search button", () => {
    const handleSearchButton = jest.fn();
    const organismLocation = render(<OrganismLocation {...props} />);
    const searchButton = organismLocation.getByText("Search");
    searchButton.onclick = handleSearchButton;
    fireEvent.click(searchButton);
    expect(organismLocation).toBeTruthy();
    expect(handleSearchButton).toHaveBeenCalledTimes(1);
  });

  it("Render and click search button with search text", () => {
    const handleSearchButton = jest.fn();
    const organismLocation = render(<OrganismLocation {...props} />);
    const searchInput = organismLocation.getByDisplayValue("");
    fireEvent.change(searchInput, { target: { value: "Mia" } });
    const searchButton = organismLocation.getByText("Search");
    searchButton.onclick = handleSearchButton;
    fireEvent.click(searchButton);
    expect(organismLocation).toBeTruthy();
    expect(handleSearchButton).toHaveBeenCalledTimes(1);
  });

  it("Render and click for redirection", () => {
    const handleRedirect = jest.fn();
    const organismLocation = render(<OrganismLocation {...props} />);
    const historyCards = organismLocation.getAllByTestId(
      "history-card-container"
    );
    historyCards[0].onclick = handleRedirect;
    fireEvent.click(historyCards[0]);
    expect(organismLocation).toBeTruthy();
    expect(handleRedirect).toHaveBeenCalledTimes(1);
  });
});
