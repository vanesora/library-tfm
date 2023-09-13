import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  fireEvent,
  waitFor,
  act,
  screen,
} from "@testing-library/react";
import { AtomInputPassword } from "./index";
import { theme } from "data/dataMx";
const iconEyeOn =
  "M91.338 512c4.663-8.060 10.845-18.33 18.503-30.187 19.67-30.455 48.8-70.959 86.619-111.299 76.415-81.51 183.252-157.181 315.54-157.181s239.125 75.672 315.541 157.181c37.815 40.34 66.948 80.843 86.618 111.299 7.659 11.857 13.841 22.127 18.505 30.187-4.663 8.060-10.846 18.33-18.505 30.187-19.669 30.455-48.802 70.959-86.618 111.3-76.416 81.506-183.253 157.18-315.541 157.18s-239.124-75.674-315.54-157.18c-37.818-40.341-66.949-80.845-86.619-111.3-7.658-11.857-13.84-22.127-18.503-30.187zM981.333 512c38.161-19.081 38.157-19.098 38.148-19.11l-0.068-0.137-0.149-0.294-0.482-0.947c-0.41-0.789-0.986-1.899-1.728-3.302-1.481-2.803-3.635-6.793-6.451-11.793-5.623-10.001-13.905-24.085-24.759-40.896-21.666-33.544-53.867-78.374-96.051-123.368-83.584-89.157-211.413-184.152-377.792-184.152s-294.209 94.995-377.794 184.152c-42.182 44.994-74.385 89.824-96.048 123.368-10.858 16.811-19.138 30.895-24.762 40.896-2.814 5.001-4.968 8.99-6.452 11.793-0.742 1.404-1.317 2.513-1.724 3.302l-0.484 0.947-0.147 0.294-0.050 0.098c-0.008 0.017-0.034 0.068 38.128 19.149l-38.162-19.081c-6.006 12.011-6.006 26.15 0 38.161l38.162-19.081c-38.162 19.081-38.17 19.063-38.162 19.081l0.084 0.166 0.147 0.294 0.484 0.947c0.407 0.789 0.982 1.899 1.724 3.302 1.484 2.803 3.638 6.793 6.452 11.793 5.624 10.001 13.904 24.085 24.762 40.896 21.663 33.545 53.866 78.374 96.048 123.366 83.585 89.161 211.415 184.154 377.794 184.154s294.208-94.993 377.792-184.154c42.185-44.992 74.385-89.822 96.051-123.366 10.854-16.811 19.136-30.895 24.759-40.896 2.816-5.001 4.971-8.99 6.451-11.793 0.742-1.404 1.318-2.513 1.728-3.302l0.482-0.947 0.149-0.294 0.047-0.098c0.009-0.017 0.034-0.068-38.127-19.149zM981.333 512l38.161 19.081c6.007-12.011 5.99-26.18-0.013-38.191l-38.148 19.11z";
const iconEyeOff =
  "M515.123 213.348l370.321 370.66c17.092-23.104 32.841-47.177 47.164-72.102-4.659-8.043-10.82-18.278-18.449-30.089-19.669-30.46-48.802-70.962-86.618-111.302-75.814-80.867-181.572-155.988-312.418-157.168zM981.333 512l38.161-19.081c6.191 12.378 5.99 26.991-0.533 39.194-27.298 51.072-59.857 99.153-97.139 143.467-7.701 9.148-18.88 14.643-30.827 15.155s-23.556-4.015-32.004-12.471l-466.775-467.2c-10.943-10.953-15.094-26.975-10.845-41.864s16.23-26.307 31.305-29.836c32.572-7.624 65.92-11.437 99.375-11.363 0.017 0 0.034 0 0.047 0l-0.098 42.667v-42.667c0.017 0 0.034 0 0.051 0 166.353 0.018 294.165 95.003 377.741 184.151 42.185 44.994 74.385 89.824 96.051 123.367 10.854 16.811 19.136 30.899 24.759 40.896 2.816 5.005 4.971 8.99 6.451 11.797 0.742 1.399 1.318 2.509 1.728 3.298l0.482 0.951 0.149 0.29 0.081 0.166c0.009 0.017 0 0-38.161 19.081zM232.666 224.651c16.987-12.972 40.951-11.373 56.064 3.741l162.82 162.819c0.098 0.098 0.196 0.197 0.294 0.296l180.646 180.645c0.102 0.102 0.201 0.201 0.303 0.303l162.816 162.816c8.704 8.704 13.227 20.745 12.403 33.028-0.828 12.284-6.916 23.612-16.708 31.074-80.175 61.116-177.805 94.976-278.609 96.623l-0.695 0.004c-166.379 0-294.209-94.993-377.794-184.149-42.182-44.996-74.385-89.826-96.048-123.366-10.858-16.815-19.138-30.899-24.762-40.9-2.814-5.001-4.968-8.99-6.452-11.793-0.742-1.404-1.317-2.509-1.724-3.302l-0.484-0.947-0.147-0.29-0.050-0.102c-0.008-0.013-0.034-0.068 38.128-19.149l-38.162 19.081c-6.2-12.399-5.989-27.038 0.566-39.253 55.949-104.267 133.549-195.363 227.595-267.177zM91.416 512.137c4.654 8.038 10.81 18.257 18.425 30.050 19.67 30.455 48.8 70.959 86.619 111.3 76.348 81.438 183.065 157.047 315.19 157.18 65.941-1.135 130.214-19.098 186.863-51.814l-99.055-99.051c-39.053 24.478-87.006 32.469-132.881 20.753-60.469-15.445-107.687-62.66-123.13-123.132-11.716-45.875-3.725-93.828 20.753-132.881l-108.751-108.751c-65.57 55.469-121.077 121.893-164.033 196.346zM427.857 488.196c-5.093 15.275-5.857 31.949-1.73 48.111 7.72 30.238 31.332 53.845 61.565 61.568 16.162 4.126 32.836 3.362 48.111-1.732l-107.947-107.947z";

jest.useFakeTimers();

describe("[React] AtomInputPassword", () => {
  it("Rendered component", async () => {
    const mockChange = jest.fn();
    const mockErrorCallback = jest.fn();
    const component = render(
      <AtomInputPassword
        placeholder={"placeholder"}
        value={""}
        onChange={mockChange}
        errorCallback={mockErrorCallback}
      />
    );

    const input = document.querySelector("input") as HTMLInputElement;
    const path = document.querySelector("path") as SVGPathElement;

    fireEvent.change(input, { target: { value: "query" } });
    fireEvent.blur(input);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(path.hasAttribute(iconEyeOn));
    expect(mockChange).toHaveBeenCalled();
    await waitFor(() => expect(mockErrorCallback).not.toHaveBeenCalled());
  });

  it("Valid password regex", async () => {
    const mockChange = jest.fn();
    const mockErrorCallback = jest.fn();

    const component = render(
      <AtomInputPassword
        required={false}
        placeholder={"placeholder"}
        value={""}
        regex="^[0-9]+$"
        onChange={mockChange}
        errorCallback={mockErrorCallback}
      />
    );

    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "123456" } });
    fireEvent.blur(input);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(mockChange).toHaveBeenCalled();
    await waitFor(() => expect(mockErrorCallback).not.toHaveBeenCalled());
  });

  it("Invalid password regex", async () => {
    const mockChange = jest.fn();
    const mockErrorCallback = jest.fn();

    const component = render(
      <AtomInputPassword
        required={true}
        placeholder={"placeholder"}
        value={""}
        regex="^[0-9]+$"
        onChange={mockChange}
        errorCallback={mockErrorCallback}
      />
    );

    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "abcdefgh" } });
    fireEvent.blur(input);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(mockChange).toHaveBeenCalled();
    await waitFor(() => expect(mockErrorCallback).toHaveBeenCalled());
  });

  test("Verify click show password", () => {
    const mockChange = jest.fn();
    const component = render(
      <AtomInputPassword
        name={"name"}
        required={true}
        placeholder={"placeholder"}
        disabled={false}
        value={"123"}
        onChange={mockChange}
      />
    );

    const showPasswordButton = document.getElementById(
      "showPassword"
    ) as HTMLDivElement;
    fireEvent.click(showPasswordButton);

    const input = component.container.querySelector("input");
    const path = document.querySelector("path") as SVGPathElement;

    expect(showPasswordButton).not.toBeNull();
    expect(input).toHaveAttribute("type", "text");
    expect(path.hasAttribute(iconEyeOff));
  });

  test("Verify click hide password", () => {
    const mockChange = jest.fn();
    const component = render(
      <AtomInputPassword
        name={"name"}
        required={true}
        placeholder={"placeholder"}
        disabled={false}
        onChange={mockChange}
      />
    );

    const showPasswordButton = document.getElementById(
      "showPassword"
    ) as HTMLDivElement;
    fireEvent.click(showPasswordButton);
    fireEvent.click(showPasswordButton);

    const input = component.container.querySelector("input");

    expect(showPasswordButton).not.toBeNull();
    expect(input).toHaveAttribute("type", "password");
  });

  test("Render disabled", () => {
    const component = render(<AtomInputPassword name="name" disabled={true} />);

    const input = component.container.querySelector("input");
    const showPasswordButton = document.getElementById(
      "showPassword"
    ) as HTMLDivElement;
    fireEvent.click(showPasswordButton);

    expect(showPasswordButton).not.toBeNull();
    expect(input).toHaveAttribute("disabled");
  });
  test("Render not disabled", () => {
    const component = render(
      <AtomInputPassword name="name" disabled={false} />
    );

    const input = component.container.querySelector("input");
    const showPasswordButton = document.getElementById(
      "showPassword"
    ) as HTMLDivElement;
    fireEvent.click(showPasswordButton);

    expect(showPasswordButton).not.toBeNull();
    expect(input).not.toHaveAttribute("disabled");
  });

  test("Icon fill color enabled", () => {
    const props = {
      name: "name",
      disabled: false,
      label: "Label text",
    } as const;

    const component = render(<AtomInputPassword {...props} />);

    const svg = document.querySelector("svg") as SVGElement;

    expect(svg).toHaveAttribute("fill", theme.neutral600);
  });

  test("Icon fill color disabled", () => {
    render(
      <AtomInputPassword
        name={"name"}
        required={true}
        placeholder={"placeholder"}
        disabled={true}
        value={"123"}
      />
    );

    const svg = document.querySelector("svg") as SVGElement;

    expect(svg).toHaveAttribute("fill", theme.neutral400);
  });

  it("Valid password required", async () => {
    const mockErrorCallback = jest.fn();
    render(
      <AtomInputPassword
        errorCallback={mockErrorCallback}
        required={true}
        value={""}
      />
    );
    const input = document.querySelector("input") as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.blur(input);
    await waitFor(() => expect(mockErrorCallback).toHaveBeenCalled());
  });
});
