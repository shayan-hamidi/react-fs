const NullTextHelper = '-----------';
const ifEmpty = (data: string | number | null | undefined) => {
  return data ? data : NullTextHelper;
};
export default { ifEmpty, NullTextHelper };
