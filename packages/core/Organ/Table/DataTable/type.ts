import { useService } from '@fs/utils';
import type {
  DataGridProps,
  GridCallbackDetails,
  GridColDef,
  GridPaginationModel,
  GridSortModel,
  GridValidRowModel,
} from '@mui/x-data-grid';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

export type FsGridColDef<T extends GridValidRowModel = any> = Omit<
  GridColDef<T>,
  'filterOperators' | 'filterable'
> & {
  searchOptions?: SearchOptionsType;
  sortOptions?: sortOptionsType;
  searchable?: boolean;
  searchKey?: string;
  isDefault?: boolean;
};
export type FsDataGridTableProps = Omit<
  DataGridProps,
  'slots' | 'rows' | 'columns'
> & {
  hasRow?: boolean;
  rows?: any[];
  columns: FsGridColDef[];
  toolbarTitle?: string;
  toolbarActions?: ReactNode;
  service?: ReturnType<typeof useService>;
  search?: string;
  filters?: FilterType;
  filterOptions?: FilterOptionsType[];
  refresh?: boolean;
  setRefresh?: (refresh: boolean) => void;
  name: string;
  hideToolbar?: boolean;
};

export type TableFactoryType = FsDataGridTableProps & {
  setColumns: Dispatch<SetStateAction<GridColDef[]>>;
  setRows: Dispatch<SetStateAction<any[] | undefined>>;
  onPaginationModelChange?:
    | ((model: GridPaginationModel, details: GridCallbackDetails) => void)
    | undefined;
  onSortModelChange?:
    | ((model: GridSortModel, details: GridCallbackDetails) => void)
    | undefined;
};

export type FilterType = { [key in string]: any };

export type FilterOptionsType = {
  key: string;
  operator?: FilterOperatorType;
  type?: 'date';
};
export type SearchOptionsType = {
  key: string | string[];
};
export type sortOptionsType = {
  key: string | string[];
};

export type FilterOperatorType =
  | 'equal'
  | 'less'
  | 'lessEqual'
  | 'more'
  | 'moreEqual';

export enum SpecialPreffixEnum {
  Min = '_min',
  Max = '_max',
  Search = 'search',
}
