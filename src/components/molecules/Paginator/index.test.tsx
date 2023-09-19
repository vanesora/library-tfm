import { act, screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IPaginatorProps, MoleculePaginator } from ".";

describe("[React] MoleculeButtonGroup", () => {
  const handlePress = jest.fn();
  const body: IPaginatorProps = {
    totalPages: 20,
    onPageChange: handlePress,
    currentPage: 1,
  };

  it("Render MoleculePaginator component", () => {
    render(<MoleculePaginator {...body} />);
    expect(screen).toBeTruthy();
  });
});
