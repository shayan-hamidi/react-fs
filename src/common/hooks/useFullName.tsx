import { ifEmpty } from '@fs/utils';

export const useFullName = (firstName?: string, lastName?: string) => {
  const fullName = ifEmpty(firstName) + ' ' + ifEmpty(lastName);
  return fullName;
};
