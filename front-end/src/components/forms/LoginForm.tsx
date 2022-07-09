import React, { FC, useState, useRef } from "react";
import { LoginErrors } from "./types";
import { Field, EmailField, PasswordField } from "./fields";
import { validateLoginForm } from "../../utils/validators";
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/slices/authSlice";

const LoginForm: FC = () => {
  const [errors, setErrors] = useState<LoginErrors>({} as LoginErrors);
  const emailRef = useRef<Field>(null);
  const passwordRef = useRef<Field>(null);
  const dispatch = useAppDispatch();

  const isFormValid = (formErrors: LoginErrors): boolean => {
    return !(formErrors.emailError || formErrors.passwordError)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const email = emailRef.current?.state.value;
    const password = passwordRef.current?.state.value;
    const formErrors = validateLoginForm(email, password);
    if (
      isFormValid(formErrors) &&
      (typeof email === "string") &&
      (typeof password === "string")
    ) {
      dispatch(login({ email, password }));
    }
    setErrors(formErrors);
  }

  return (
    <form className="form login-form">
      <EmailField ref={emailRef} />
      {errors.emailError && (
        <p className="form__field-error">{errors.emailError}</p>
      )}

      <PasswordField ref={passwordRef} />
      {errors.passwordError && (
        <p className="form__field-error">{errors.passwordError}</p>
      )}

      <button
        className="form__submit login-form__submit"
        onClick={handleSubmit}
        children="Log In"
      />
    </form>
  )
}


export default LoginForm;