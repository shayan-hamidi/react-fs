import { type DataGridProps } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

type FsDataGridTableProps = DataGridProps & { hasRow?: boolean };

const useTable = ({ columns, hasRow }: FsDataGridTableProps) => {
  const [serializedColumns, setSerializedColumns] =
    useState<FsDataGridTableProps['columns']>(columns);
  useEffect(() => {
    if (hasRow) {
      setSerializedColumns([
        { field: 'id', headerName: 'ردیف', width: 90, sortable: false },
        ...(columns || []),
      ]);
    }
  }, [columns, hasRow]);

  return { serializedColumns };
};

export default useTable;
