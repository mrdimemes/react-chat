import { forwardRef } from "react";
import Field from "./Field";
import { SpecificFieldProps } from "./types";

const EmailField = forwardRef<Field>(
  ({ parentClass }: SpecificFieldProps, ref) => {
    return (
      <Field
        type="email"
        placeholder="E-mail"
        parentClass={parentClass}
        ref={ref}
        maxLength={50}
        isRequired={true}
      />
    )
  }
);

export default EmailField;