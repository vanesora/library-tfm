/*
{
  "field_type": "text", TYPE OF INFORMATION
  "field_label": "First Name", NAME IN THE TOP
  "field_name": "firstName",  NAME BACKEND
  "status": "Active", SHOW OR NOT THE ELEMENT
  "basic": true, NOT USED -- in the component
  "field_required": false, REQUIRED, SHOW RED INFO IF IT IS NOT FILLED
  "field_regex": "", REGEX TO BE USED
  "regex_description": "Must be a string without numbers and special characters", DESCRIPTION OF THE REGEX
  "field_min_length": 1, MIN LENGTH FOR INPUT
  "field_max_length": 100, MAX LENGTH FOR INPUT
  "position_H": 1, USED FOR BASIC -- DEPRECATED
  "position_V": 1, USED FOR BASIC -- in the component
  "place_holder": "First Name", PLACE HOLDER TO BE USED
  "default_value": "Beer", IF NOTHING IS FILLED USE THIS VALUE
  "allow_edit": false, ALLOW TO EDIT OR NOT 
},
*/

import { IInputDateSort } from "react/atoms/Input/InputTypes";

export interface ISchemaValidationFieldItems {
  value: string;
  order: number;
}

export interface IRequiredDataElement {
  field_type: string;
  field_label: string;
  field_name: string;
  status: "Active" | "Inactive";
  basic: boolean;
  field_required: boolean;
  field_regex?: string;
  regex_description?: string;
  field_min_length?: number;
  field_max_length?: number;
  position_H: number;
  position_V: number;
  field_format?: IInputDateSort;
  field_type_name?: string;
  subplatform?: string;
  platform?: string;
  url?: string;
  field_items?: ISchemaValidationFieldItems[];
  place_holder?: string;
  allow_edit?: boolean;
  default_value?: string;
  text?: string;
}
