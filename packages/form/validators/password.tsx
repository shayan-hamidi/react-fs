export default function passwordValidator(str: string) {
  return (
    hasNumberCharacter(str) &&
    hasEnoughCharacters(str) &&
    hasCapitalLetters(str) &&
    hasSmallLetters(str) &&
    hasSpecialCharacter(str)
  );
}

const hasNumberCharacter = (str: string): boolean => {
  return /\d/.test(str);
};

const hasEnoughCharacters = (str: string): boolean => {
  return str?.length >= 8;
};

const hasCapitalLetters = (str: string): boolean => {
  const hasCapital = /[A-Z]/.test(str);
  return hasCapital;
};

const hasSmallLetters = (str: string): boolean => {
  const hasSmall = /[a-z]/.test(str);
  return hasSmall;
};

const hasSpecialCharacter = (str: string): boolean => {
  const hasSpecial = /[!@#$%^&*()_+{}\\[\]:;<>,.?~\\\\-]/.test(str);
  return hasSpecial;
};
