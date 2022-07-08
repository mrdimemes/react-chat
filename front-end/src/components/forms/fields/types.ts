export type FieldProps = {
  parentClass?: string;
  type: string;
  placeholder: string;
  maxLength?: number;
  isRequired?: boolean;
}

export type SpecificFieldProps = {
  parentClass?: string;
}

export type FieldState = {
  value: string;
}