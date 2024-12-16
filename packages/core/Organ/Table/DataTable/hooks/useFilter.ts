import {
  FilterOptionsType,
  FilterType,
  FsGridColDef,
  SpecialPreffixEnum,
} from '../type';
import {
  capitalizeFirstLetter,
  defineFilterOperators,
  flattenObject,
} from '../utils';

export const useFilter = () => {
  const getSearchPattern = (columns: FsGridColDef[], search?: string) => {
    const searchableKeys = columns
      .filter((col) => col.searchable)
      .map((col) => col.searchOptions?.key || col.field);
    const searchKeys = reduceSearchKeys(searchableKeys, search);
    return searchKeys.join('||');
  };
  const reduceSearchKeys = (
    keys: (string | string[])[],
    search?: string
  ): string[] => {
    return keys.reduce((newArr: string[], value) => {
      if (Array.isArray(value)) {
        return [...newArr, ...reduceSearchKeys(value, search)];
      }
      const newValue = `${capitalizeFirstLetter(value)}|*|${search}`;
      return [...newArr, newValue];
    }, []);
  };
  const getValidValuesInFilters = (filters: FilterType) => {
    return Object.entries(filters)
      .filter(([_, value]) => {
        return value && `${value}`.trim();
      })
      .reduce((newObj, [key, value]) => {
        return {
          ...newObj,
          [key]: value,
        };
      }, {});
  };
  const getFilterParamsArray = (
    columns: FsGridColDef[],
    filters: FilterType | undefined,
    filterOptions?: FilterOptionsType[]
  ) => {
    if (!filters) return [];
    filters = flattenObject(filters);
    filters = getValidValuesInFilters(filters);
    return Object.entries(filters).reduce(
      (newArr: (string | FilterType)[], [key, value]) => {
        if (key === SpecialPreffixEnum.Search) {
          return [getSearchPattern(columns, value), ...newArr];
        }
        const newKey = capitalizeFirstLetter(replacedSpecialKeys(String(key)));
        const operator = getOperator(filterOptions, key);
        const newValue = capitalizeFirstLetter(
          String(getValue(filterOptions, key, value))
        );
        const formated = `${newKey}${operator}${newValue}`;
        return [formated, ...newArr];
      },
      Object.keys(getValidValuesInFilters(filters)).length !== 0
        ? [{ arrayFormat: 'repeat' }]
        : []
    );
  };
  const getOperator = (
    filterOptions: FilterOptionsType[] | undefined,
    key: string
  ) => {
    const option = filterOptions?.find((option) => option.key === key);
    if (option?.operator) return defineFilterOperators(option?.operator);
    return replacedSpecialOperators(key);
  };
  const getValue = (
    filterOptions: FilterOptionsType[] | undefined,
    key: string,
    value: string
  ) => {
    const option = filterOptions?.find((option) => option.key === key);
    return replacedSpecialValues(key, option, value);
  };
  const replacedSpecialOperators = (key: string) => {
    if (key?.includes(SpecialPreffixEnum.Min))
      return defineFilterOperators('moreEqual');
    if (key?.includes(SpecialPreffixEnum.Max))
      return defineFilterOperators('lessEqual');
    return defineFilterOperators();
  };
  const replacedSpecialKeys = (key: string) => {
    if (key?.includes(SpecialPreffixEnum.Min))
      return key?.replace(SpecialPreffixEnum.Min, '');
    if (key?.includes(SpecialPreffixEnum.Max))
      return key?.replace(SpecialPreffixEnum.Max, '');
    return key;
  };
  const replacedSpecialValues = (
    key: string,
    filterOptions?: FilterOptionsType,
    value?: string
  ) => {
    if (filterOptions?.type === 'date') {
      if (
        key.includes(SpecialPreffixEnum.Min) ||
        filterOptions?.operator?.includes('more')
      )
        return `${value}T00:00:00`;
      else if (
        key.includes(SpecialPreffixEnum.Max) ||
        filterOptions?.operator?.includes('less')
      )
        return `${value}T23:59:59`;
    }
    return value;
  };

  return {
    getFilterParamsArray,
  };
};
