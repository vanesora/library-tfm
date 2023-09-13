import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { OrganismDynamicForm } from "./index";
import { IRequiredDataElement } from "./interfaces/schemas";

const data: IRequiredDataElement[] = [
  {
    field_type: "text",
    field_label: "First Name",
    field_name: "firstName",
    status: "Active",
    basic: true,
    field_required: true,
    field_regex: "^[a-z A-Z]*$",
    regex_description:
      "Must be a string without numbers and special characters",
    field_min_length: 1,
    field_max_length: 100,
    position_H: 1,
    position_V: 1,
    place_holder: "First Name",
    default_value: "Beer",
    allow_edit: false,
  },
  {
    field_type: "text",
    field_label: "Last Name",
    field_name: "lastName",
    status: "Active",
    basic: true,
    field_required: true,
    field_regex: "^[a-z A-Z]*$",
    regex_description:
      "Must be a string without numbers and special characters <br>And non no no no never super especial characters",
    field_min_length: 1,
    field_max_length: 100,
    position_H: 1,
    position_V: 2,
    place_holder: "Last Name",
    default_value: "Lover",
    allow_edit: true,
  },
  {
    field_type: "date",
    field_label: "Birthdate",
    field_name: "birthdate",
    status: "Active",
    basic: true,
    field_required: true,
    regex_description: "Invalid date",
    field_format: "MM-DD-YYYY",
    position_H: 1,
    position_V: 2,
    default_value: "12-01-1995",
    allow_edit: true,
  },
  {
    field_type: "select",
    field_label: "Gender",
    field_name: "gender",
    status: "Active",
    basic: true,
    field_required: true,
    regex_description: "",
    field_items: [
      {
        value: "Male",
        order: 1,
      },
      {
        value: "Female",
        order: 2,
      },
      {
        value: "Non-Binary",
        order: 3,
      },
    ],
    position_H: 1,
    position_V: 4,
    default_value: "",
    allow_edit: true,
  },
  {
    field_type: "text",
    field_label: "Email",
    field_name: "email",
    status: "Active",
    basic: true,
    field_required: true,
    field_regex:
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",
    regex_description: "It must be an email",
    field_min_length: 1,
    field_max_length: 50,
    position_H: 1,
    position_V: 5,
    place_holder: "user1@domain.com",
    default_value: "",
    allow_edit: false,
  },
  {
    field_type: "password",
    field_label: "Password",
    field_name: "password",
    status: "Active",
    basic: true,
    field_required: true,
    field_regex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9d]{8,}$",
    regex_description:
      "Must contain at least eight characters, at least one number and both lower and uppercase letters",
    field_min_length: 1,
    field_max_length: 100,
    position_H: 1,
    position_V: 6,
    default_value: "Abc123456",
  },
  {
    field_type: "password",
    field_label: "Confirm Password",
    field_name: "confirmPassword",
    status: "Active",
    basic: true,
    field_required: true,
    field_regex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9d]{7,}$",
    regex_description: "",
    field_min_length: 1,
    field_max_length: 100,
    position_H: 1,
    position_V: 7,
    allow_edit: true,
  },
  {
    field_type: "phone",
    field_label: "Phone",
    field_name: "phoneNumber",
    status: "Active",
    basic: true,
    field_required: false,
    field_regex: "",
    regex_description: "Must have a length between 9 or 13",
    field_min_length: 9,
    field_max_length: 13,
    position_H: 1,
    position_V: 8,
    default_value: "COL-3209354953",
    allow_edit: true,
  },
  {
    field_type: "text",
    field_label: "Zip Code",
    field_name: "zipcode",
    status: "Active",
    basic: true,
    field_required: false,
    field_regex: "^[0-9]+$",
    regex_description: "Please enter a valid zip code.",
    field_min_length: 5,
    field_max_length: 5,
    position_H: 1,
    position_V: 9,
    place_holder: "33011",
    default_value: "54001",
    allow_edit: false,
  },
  {
    field_type: "checkbox",
    field_label:
      "By submitting this form, you agree to receive recurring automated promotional and personalized marketing text and email messages from MyCooler and its affiliates at the cell number and email used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg and data rates may apply.",
    field_name: "advertisement",
    status: "Active",
    basic: true,
    field_required: false,
    regex_description: "",
    position_H: 1,
    position_V: 10,
    field_type_name: "",
    subplatform: "",
    url: "",
    allow_edit: false,
  },
  {
    field_type: "checkbox",
    field_label:
      'I have read and I agree to the MyCooler <a href="https://www.google.com">Terms of Use</a> and <a href="https://www.youtube.com">Privacy Policy</a>, which describe how the information I provide may be used.',
    field_name: "termsAndConditionsRewardsUSA",
    status: "Active",
    basic: true,
    field_required: true,
    regex_description: "",
    position_H: 1,
    position_V: 11,
    field_type_name: "termsAndConditions",
    subplatform: "MyCooler",
    url: "https://www.mycooler.com/en/terms-conditions.html",
    allow_edit: true,
  },
  {
    field_type: "number",
    field_label: "Migration Points",
    field_name: "migration_points",
    status: "Active",
    basic: true,
    field_required: false,
    field_regex: "^[1234]*$",
    regex_description:
      "You must insert only numbers, between the min and max length",
    field_min_length: 1,
    field_max_length: 2,
    position_H: 0,
    position_V: 0,
    allow_edit: true,
  },
];

describe("[React] OrganismDynamicForm", () => {
  it("render component", () => {
    const component = render(
      <OrganismDynamicForm data={data} onChangeData={(response) => {}} />
    );
    expect(component).toBeDefined();
  });

  it("create default values", async () => {
    const component = render(
      <OrganismDynamicForm data={data} onChangeData={(response) => {}} />
    );
    await component.findByDisplayValue("Beer");
    await component.findByText("12");
    await component.findByText("01");
    await component.findByText("1995");
    await component.findByDisplayValue("Abc123456");
    await component.findByPlaceholderText("+57 Colombia");
    await component.findByDisplayValue("3209354953");
  });

  it("display custom error messages", async () => {
    const component = render(
      <OrganismDynamicForm
        data={data}
        onChangeData={(response) => {}}
        errors={[true, false, true]}
      />
    );
    await component.findByText(
      "Must be a string without numbers and special characters"
    );
    await component.findByText("Invalid date");
  });

  it("Change input values", async () => {
    const component = render(
      <OrganismDynamicForm data={data} onChangeData={(response) => {}} />
    );
    const firstInput = await component.findByDisplayValue("Beer");
    fireEvent.change(firstInput, { target: { value: "aloja" } });
    await component.findByDisplayValue("aloja");
  });
});
