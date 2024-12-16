export const addCommaPattern = (numberString: string) => {
  const cleanNumberString = numberString?.replace(/,/g, '');

  return cleanNumberString?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
