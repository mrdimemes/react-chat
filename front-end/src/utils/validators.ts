import { RegistrationErrors, LoginErrors } from "../components/forms/types";

export const validateEmail = (email: string | undefined): [boolean, string] => {
  if (typeof email === "undefined") {
    return [false, "incorrect value"]
  }
  if (email.length === 0) {
    return [false, "empty value"];
  }
  const re: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  const isValid: boolean = re.test(email);
  return [isValid, isValid?"":"invalid e-mail"];
}

export const validateString = (
  string: string | undefined,
  minLength = 6,
  maxLength = 30
): [boolean, string] => {
  if (typeof string === "undefined") {
    return [false, "incorrect value"]
  }
  if (string.length === 0) {
    return [false, "empty value"];
  }
  if (string.length < minLength) {
    return [false, "too short"];
  }
  if (string.length > maxLength) {
    return [false, "too long"];
  }
  const re: RegExp = new RegExp(/\w+/);
  if (!re.test(string)) {
    return [false, "incorrect charset"];
  }
  return [true, ""];
}

export const validateRegistrationForm = (
  email: string | undefined,
  name: string | undefined,
  password: string | undefined,
  passwordConfirmation: string | undefined,
): RegistrationErrors => {
  const formErrors: RegistrationErrors = {} as RegistrationErrors;
  const [isEmailCorrect, emailErr] = validateEmail(email);
  if (!isEmailCorrect) { formErrors.emailError = emailErr }
  const [isNameCorrect, nameErr] = validateString(name);
  if (!isNameCorrect) { formErrors.nameError = nameErr }
  const [isPasswordCorrect, passErr] = validateString(password);
  if (!isPasswordCorrect) { formErrors.passwordError = passErr }
  if (password !== passwordConfirmation) {
    formErrors.passwordError = "passwords do not match"
  }
  return formErrors;
}

export const validateLoginForm = (
  email: string | undefined,
  password: string | undefined,
): LoginErrors => {
  const formErrors: LoginErrors = {} as LoginErrors;
  const [isEmailCorrect, emailErr] = validateEmail(email);
  if (!isEmailCorrect) { formErrors.emailError = emailErr }
  const [isPasswordCorrect, passErr] = validateString(password);
  if (!isPasswordCorrect) { formErrors.passwordError = passErr }
  return formErrors;
}
