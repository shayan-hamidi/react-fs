import { useEffect, useState } from 'react';
import type {
  FsDataGridTableProps,
  FsGridColDef,
  TableFactoryType,
} from '../type';
import { getSerializedColumns, getSerializedRows } from '../utils';

export const useFrontTable = (
  props: FsDataGridTableProps
): TableFactoryType => {
  const [columns, setColumns] = useState<FsGridColDef[]>(
    getSerializedColumns(props.columns, { hasRow: props.hasRow })
  );
  const [rows, setRows] = useState<any[] | undefined>();
  useEffect(() => {
    setColumns(getSerializedColumns(props.columns, { hasRow: props.hasRow }));
  }, [props.columns]);

  useEffect(() => {
    setRows(
      getSerializedRows(props.rows, {
        hasRow: props.hasRow,
      })
    );
  }, [props.rows]);
  return {
    ...props,
    columns,
    rows,
    setColumns,
    setRows,
    sortingMode: 'client',
    paginationMode: 'client',
  };
};
