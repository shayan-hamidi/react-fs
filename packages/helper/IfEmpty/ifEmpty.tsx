export default function ifEmpty(data: string | number | null | undefined) {
  const NullTextHelper = "-----------";
  return data ? data : NullTextHelper;
}
