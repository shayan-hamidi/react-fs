export default function postalCodeValidator(value: string) {
  if (validatePostalCode(value) && value) {
    return true;
  } else {
    return false;
  }
}

const validatePostalCode = (input: string): boolean => {
  if (/^[13456789]{5}[0-9]{5}$/.test(input)) return true;
  return false;
};
