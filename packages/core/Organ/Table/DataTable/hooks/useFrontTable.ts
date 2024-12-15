import { useState } from 'react';
import type { FsDataGridTableProps, TableFactoryType } from '../type';
import { getSerializedColumns, getSerializedRows } from '../utils';

export const useFrontTable = (
  props: FsDataGridTableProps
): TableFactoryType => {
  const [columns, setColumns] = useState(
    getSerializedColumns(props.columns, { hasRow: props.hasRow })
  );
  const [rows, setRows] = useState<any[] | undefined>(
    getSerializedRows(props.rows, {
      hasRow: props.hasRow,
    })
  );
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
