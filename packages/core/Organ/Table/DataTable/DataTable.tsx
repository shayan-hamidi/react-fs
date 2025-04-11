import { Box, CircularProgress, Grid, Skeleton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { NoRowsOverlay } from './components/NoOverly';
import { CustomPagination } from './components/Pagination';
import { useTableFactory } from './hooks/useTableFactory';
import type { FsDataGridTableProps } from './type';
import { addCommaPattern } from '@fs/utils';
import { FsTypography } from '../../../Atom';
import TableToolbar from './components/TableToolbar';
import { useState } from 'react';
import { tableBasicStyles } from './styles';

const FsDataTable = (props: FsDataGridTableProps) => {
  const {
    sx,
    toolbarTitle,
    toolbarActions,
    loading,
    rowCount,
    columns,
    name,
    hideToolbar,
    ...rest
  } = useTableFactory(props);

  const [openSetting, setOpenSetting] = useState(false);
  const [columnVisibilityModel, setColumnVisibilityModel] = useState(() =>
    columns
      .filter(
        (col) =>
          col.field != 'ROW' &&
          !col.field.includes('action') &&
          col.hideable !== false
      )
      .reduce((newObj, col) => {
        return {
          ...newObj,
          [col.field]: col.isDefault !== false,
        };
      }, {})
  );

  const CustomLoadingOverlay = () => (
    <Box sx={{ width: '100%', padding: 1 }}>
      {[...Array(5)].map((_, index) => (
        <Skeleton
          key={index}
          variant="rounded"
          animation="pulse"
          height={40}
          sx={{ marginBottom: 1 }}
        />
      ))}
    </Box>
  );

  return (
    <DataGrid
      data-cy={`${name}Table`}
      columns={columns}
      columnVisibilityModel={columnVisibilityModel}
      rowCount={rowCount}
      loading={loading}
      density="compact"
      autoHeight
      disableColumnMenu
      disableColumnSelector
      disableRowSelectionOnClick
      showCellVerticalBorder
      disableDensitySelector
      disableAutosize
      disableVirtualization
      disableColumnResize
      slots={{
        loadingOverlay: CustomLoadingOverlay,
        pagination: () => (
          <Grid
            container
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Grid item xs={4} />
            <Grid item xs={4} justifyContent={'center'} display={'flex'}>
              <CustomPagination />
            </Grid>
            <Grid item xs={4} justifyContent={'end'} display={'flex'}>
              {loading ? (
                <CircularProgress size={22} />
              ) : rowCount ? (
                <FsTypography
                  variant="body2"
                  i18nKey={
                    String(rowCount) === '0'
                      ? 'موردی یافت نشد'
                      : `${addCommaPattern(String(rowCount))} مورد یافت شد`
                  }
                />
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        ),
        noRowsOverlay: NoRowsOverlay,
        toolbar: () => {
          if (!hideToolbar) {
            return (
              <TableToolbar
                toolbarTitle={toolbarTitle}
                toolbarActions={toolbarActions}
                open={openSetting}
                setOpen={setOpenSetting}
                columnVisibilityModel={columnVisibilityModel}
                columns={columns}
                setColumnVisibilityModel={setColumnVisibilityModel}
              />
            );
          }
        },
      }}
      sx={(theme) => ({
        ...sx,
        ...tableBasicStyles(theme, rowCount!),
      })}
      {...rest}
    />
  );
};
export default FsDataTable;
