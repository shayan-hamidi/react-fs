import { type DataGridProps } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type FsDataGridTableProps = DataGridProps & { hasRow?: boolean };

const useTable = ({ columns, hasRow }: FsDataGridTableProps) => {
  const [serializedColumns, setSerializedColumns] =
    useState<FsDataGridTableProps['columns']>(columns);
  const { t } = useTranslation();
  useEffect(() => {
    if (hasRow) {
      setSerializedColumns([
        { field: 'id', headerName: t('ROW'), width: 90, sortable: false },
        ...(columns || []),
      ]);
    }
  }, [columns, hasRow]);

  return { serializedColumns };
};

export default useTable;
