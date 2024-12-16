import { ifEmpty, useService } from '@fs/utils';
import type {
  FilterOperatorType,
  FsDataGridTableProps,
  FsGridColDef,
} from './type';

export const getSerializedColumns = (
  columns: FsDataGridTableProps['columns'],
  options?: {
    hasRow?: boolean;
  }
): FsGridColDef[] => {
  if (!options?.hasRow) {
    return columns.map((col) => ({
      flex: 1,
      sortable: col.sortable || false,
      ...col,
    }));
  } else {
    return [
      {
        field: 'ROW',
        headerName: 'ردیف',
        maxWidth: 90,
      },
      ...columns,
    ].map((col) => ({
      flex: 1,
      sortable: col.sortable || false,
      ...col,
    }));
  }
};
export const getSerializedRows = (
  rows: any[] | undefined,
  options?: {
    hasRow?: boolean;
    service?: ReturnType<typeof useService>;
    paginationModel?: {
      page: number;
      pageSize: number;
    };
  }
): any[] | undefined => {
  const serializedRows = rows?.map((item: any) => {
    return Object.entries(item).reduce(
      (before, [key, value]) => ({
        ...before,
        [key]: Array.isArray(value)
          ? value
          : typeof value === 'boolean' ||
            value == 0 ||
            (typeof value === 'object' && value) ||
            value === ''
          ? value
          : ifEmpty(value as string),
      }),
      {}
    );
  });
  return createRows(serializedRows, options);
};
export const createRows = (
  rows: any[] | undefined,
  options?: {
    hasRow?: boolean;
    service?: ReturnType<typeof useService>;
    paginationModel?: {
      page: number;
      pageSize: number;
    };
  }
) => {
  if (options?.hasRow) {
    return rows?.map((item: Object, index: number) => {
      return {
        ROW: options.service
          ? Number(options?.paginationModel?.page) *
              Number(options?.paginationModel?.pageSize) +
            index +
            1
          : index + 1,
        ...item,
      };
    });
  }
  return rows;
};
export const defineFilterOperators = (operator?: FilterOperatorType) => {
  switch (operator) {
    case 'equal':
      return '|=|';
    case 'less':
      return '|<|';
    case 'lessEqual':
      return '|<=|';
    case 'more':
      return '|>|';
    case 'moreEqual':
      return '|>=|';
    default:
      return '|=|';
  }
};
export function capitalizeFirstLetter(string: string): string {
  if (string?.includes('.')) {
    return string
      .split('.')
      .map((word) => capitalizeFirstLetter(word))
      .join('.');
  }
  return string?.charAt(0).toUpperCase() + string?.slice(1);
}
export const flattenObject = (
  obj: Record<string, any>,
  parentKey: string = '',
  result: Record<string, any> = {}
): Record<string, any> => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (
        typeof obj[key] === 'object' &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
};
