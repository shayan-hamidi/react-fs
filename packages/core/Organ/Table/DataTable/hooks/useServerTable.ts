import { useEffect, useRef, useState } from 'react';
import { type FsDataGridTableProps, type TableFactoryType } from '../type';
import { getSerializedColumns, getSerializedRows } from '../utils';
import { useFilter } from './useFilter';
import {
  GridCallbackDetails,
  GridPaginationModel,
  GridSortModel,
} from '@mui/x-data-grid';

export const useServerTable = (
  props: FsDataGridTableProps
): TableFactoryType => {
  const { service, refresh, setRefresh, filters, search, filterOptions } =
    props;
  const { mutate } = service!;
  const { getFilterParamsArray } = useFilter();
  const [columns, setColumns] = useState(
    getSerializedColumns(props.columns, { hasRow: props.hasRow })
  );
  const [loading, setLoading] = useState(false);
  const [rowCount, setRowCount] = useState(0);
  const isInitialRender = useRef(true);

  const [rows, setRows] = useState<any[] | undefined>();
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  const getSortPattern = () => {
    const fieldSorted = sortModel[0];
    const sortOptions = columns.find(
      (col) => col.field === fieldSorted?.field
    )?.sortOptions;
    return {
      OrderBy: sortOptions?.key || fieldSorted?.field,
      IsDescendingOrder: fieldSorted?.sort
        ? fieldSorted?.sort === 'desc'
        : undefined,
    };
  };
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const onSortModelChange = (model: GridSortModel, _: GridCallbackDetails) => {
    setSortModel(model);
  };
  const onPaginationModelChange = (
    model: GridPaginationModel,
    _: GridCallbackDetails
  ) => {
    setPaginationModel(model);
  };
  const getData = () => {
    setLoading(true);
    mutate(
      {
        PageNumber: paginationModel.page + 1,
        FilterPattern: getFilterParamsArray(columns, filters, filterOptions),
        ...getSortPattern(),
      },
      {
        onSuccess(data) {
          setRows(
            getSerializedRows(data?.items, {
              hasRow: props.hasRow,
              paginationModel,
              service: props.service,
            })
          );
          setRowCount(data?.totalRecords);
        },
        onSettled() {
          setLoading(false);
          if (refresh) {
            setRefresh && setRefresh(false);
          }
        },
      }
    );
  };

  useEffect(() => {
    getData();
  }, [paginationModel, refresh, sortModel]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    getData();
  }, [filters, search]);

  return {
    ...props,
    columns,
    rows,
    setColumns,
    rowCount,
    setRows,
    paginationModel,
    loading,
    sortModel,
    onSortModelChange,
    onPaginationModelChange,
    sortingMode: 'server',
    paginationMode: 'server',
  };
};
