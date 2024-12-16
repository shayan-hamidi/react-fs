import { NullTextHelper } from '../IfEmpty';

export default function maskPhoneNumber(phoneNumber: number | string | null) {
  const phoneString = (phoneNumber ?? '').toString() || NullTextHelper;
  return `${phoneString.slice(8)} **** ${phoneString.slice(0, 4)}`;
}
