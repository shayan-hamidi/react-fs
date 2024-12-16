import moment from 'moment-jalaali';
import { NullTextHelper } from '../IfEmpty';

export function FarsiDate(data?: string | number | Date) {
  return data &&
    data !== 'null' &&
    data !== undefined &&
    data !== 0 &&
    moment(data).format('jYYYY/jMM/jDD') !== 'Invalid date'
    ? moment(data).format('jYYYY/jMM/jDD')
    : NullTextHelper;
}

export function FarsiTime(data?: string | number | Date) {
  return data !== undefined && data !== 0
    ? moment(data).format('HH:mm')
    : NullTextHelper;
}

export function FarsiWeekDay(data?: string | number | Date) {
  return data !== undefined && data !== 0
    ? moment(data).format('ddd')
    : NullTextHelper;
}

export function FarsiDateTime(data?: string | number | Date) {
  return data !== undefined && data !== 0
    ? `${moment(data).format('jYYYY/jMM/jDD')} - ${moment(data).format(
        'HH:mm'
      )}`
    : NullTextHelper;
}
