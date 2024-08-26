export default function nationalCodeValidator(value: string) {
  if (validateNationalCode(value) && value) {
    return true;
  } else {
    return false;
  }
}
const validateNationalCode = (input: string): boolean => {
  if (!/^(?!(\d)\1{9})\d{10}$/.test(input)) return false;
  const check = +input[9];
  const sum =
    input
      .split('')
      .slice(0, 9)
      .reduce(
        (previousValue, currentValue, currentIndex) =>
          previousValue + +currentValue * (10 - currentIndex),
        0
      ) % 11;
  return sum < 2 ? check === sum : check + sum === 11;
};
