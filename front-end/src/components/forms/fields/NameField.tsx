import { forwardRef } from "react";
import Field from "./Field";
import { SpecificFieldProps } from "./types";

const NameField = forwardRef<Field>(
  ({ parentClass }: SpecificFieldProps, ref) => {
    return (
      <Field
        type="text"
        placeholder="Your Name"
        parentClass={parentClass}
        ref={ref}
        maxLength={30}
        isRequired={true}
      />
    )
  }
);

export default NameField;