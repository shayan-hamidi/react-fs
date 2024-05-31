export default function emailValidator(value: string) {
  if (validateEmail(value) && value) {
    return true;
  } else {
    return false;
  }
}
const validateEmail = (input: string): boolean => {
  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input))
    return true;
  return false;
};
