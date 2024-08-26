import { get } from 'lodash';

export default function useExtractErrorInfo(errors: object, name: string) {
  const error = get(errors, name);
  const errorType = get(error, 'type');
  const errorMessage = get(error, 'message');
  const errorI18nKey =
    typeof errorMessage === 'object' ? errorMessage.key : errorMessage;
  const errorInterpolationValue =
    typeof errorMessage === 'object'
      ? { [errorType]: errorMessage.values }
      : undefined;
  return { errorI18nKey, errorInterpolationValue };
}
