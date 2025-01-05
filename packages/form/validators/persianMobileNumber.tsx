export default function persianMobileNumber(value: string) {
  if (value) {
    if (validatePersianMobileNumber(value)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}
const validatePersianMobileNumber = (input: string): boolean => {
  const mobileReg = /^(\+98|0098|98|0)?[ \-()]{0,2}9(?:[ \-()]*\d){9}$/;
  return mobileReg.test(input);
};
