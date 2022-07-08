import { forwardRef } from "react";
import Field from "./Field";
import { SpecificFieldProps } from "./types";

const PasswordConfirmationField = forwardRef<Field>(
  ({ parentClass }: SpecificFieldProps, ref) => {
    return (
      <Field
        type="password"
        placeholder="Repeat Password"
        parentClass={parentClass}
        ref={ref}
        maxLength={30}
        isRequired={true}
      />
    )
  }
);

export default PasswordConfirmationField;