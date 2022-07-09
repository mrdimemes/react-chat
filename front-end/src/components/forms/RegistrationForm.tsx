import React, { FC, useState, useRef } from "react";
import { RegistrationErrors } from "./types";
import { Field, EmailField, NameField, PasswordField, PasswordConfirmationField } from "./fields";
import { validateRegistrationForm } from "../../utils/validators";
import { useAppDispatch } from "../../redux/hooks";
import { register } from "../../redux/slices/authSlice";

const RegistrationForm: FC = () => {
  const [errors, setErrors] = useState<RegistrationErrors>({} as RegistrationErrors);
  const emailRef = useRef<Field>(null);
  const nameRef = useRef<Field>(null);
  const passwordRef = useRef<Field>(null);
  const passwordConfirmationRef = useRef<Field>(null);
  const dispatch = useAppDispatch();

  const isFormValid = (formErrors: RegistrationErrors): boolean => {
    return !(formErrors.emailError || formErrors.nameError || formErrors.passwordError)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const email = emailRef.current?.state.value;
    const name = nameRef.current?.state.value;
    const password = passwordRef.current?.state.value;
    const passwordConfirmation = passwordConfirmationRef.current?.state.value;
    const formErrors = validateRegistrationForm(email, name, password, passwordConfirmation);
    if (
      isFormValid(formErrors) &&
      (typeof email === "string") &&
      (typeof password === "string") &&
      (typeof passwordConfirmation === "string") &&
      (typeof name === "string")
    ) {
      dispatch(register({ email, password, name }));
    }
    setErrors(formErrors);
  }

  return (
    <form className="form registration-form">

      <EmailField ref={emailRef} />
      {errors.emailError && (
        <p className="form__field-error">{errors.emailError}</p>
      )}

      <NameField ref={nameRef} />
      {errors.nameError && (
        <p className="form__field-error">{errors.nameError}</p>
      )}

      <PasswordField ref={passwordRef} />
      {errors.passwordError && (
        <p className="form__field-error">{errors.passwordError}</p>
      )}

      <PasswordConfirmationField ref={passwordConfirmationRef} />

      <button
        className="form__submit registration-form__submit"
        onClick={handleSubmit}
        children="Sign Up"
      />
    </form>
  )
}

export default RegistrationForm;