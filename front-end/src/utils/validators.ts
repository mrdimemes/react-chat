export const validateEmail = (email: string): boolean => {
  const re: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return re.test(email);
}

export const validateString = (string: string, minLength=6, maxLength=25): [boolean, string] => {
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