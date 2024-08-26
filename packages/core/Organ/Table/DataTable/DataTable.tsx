import { DataGrid, type DataGridProps } from '@mui/x-data-grid';

const DataTable = ({ ...rest }: DataGridProps) => {
  return (
    <DataGrid
      {...rest}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  );
};
export default DataTable;
