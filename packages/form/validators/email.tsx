export default function emailValidator(value: string) {
  if (value) {
    if (validateEmail(value)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}
const validateEmail = (input: string): boolean => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input);
};
