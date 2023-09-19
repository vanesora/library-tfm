
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
