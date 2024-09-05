import { DataGrid, type DataGridProps } from '@mui/x-data-grid';
import useTable from './useTable';

type FsDataGridTableProps = DataGridProps & { hasRow?: boolean };

const FsDataTable = (props: FsDataGridTableProps) => {
  const { columns, ...rest } = props;

  const { serializedColumns } = useTable(props);
  return (
    <DataGrid
      columns={serializedColumns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      {...rest}
    />
  );
};
export default FsDataTable;
