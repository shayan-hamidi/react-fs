import { Box, Grid } from '@mui/material';
import { FsButton, FsChip, FsTypography } from '../../../../Atom';
import IconSetting from '@mui/icons-material/Settings';
import { Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react';
import SettingsBackupRestoreOutlinedIcon from '@mui/icons-material/SettingsBackupRestoreOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { FsGridColDef } from '../type';
import { ifEmpty } from '@fs/utils';

const TableToolbar = ({
  columns,
  columnVisibilityModel,
  setColumnVisibilityModel,
  open,
  setOpen,
  toolbarActions,
  toolbarTitle,
}: {
  columns: FsGridColDef[];
  columnVisibilityModel: Record<string, string>;
  setColumnVisibilityModel: Dispatch<SetStateAction<{}>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  toolbarActions: ReactNode;
  toolbarTitle?: string;
}) => {
  const [columnsFilters, _] = useState<FsGridColDef[]>(
    columns.filter((col) =>
      Object.keys(columnVisibilityModel).includes(col.field)
    )
  );

  const activeDefaultColumns = () => {
    columnsFilters.forEach((col) => {
      setColumnVisibilityModel((prev) => ({
        ...prev,
        [col.field]: col.isDefault !== false,
      }));
    });
  };
  const isActiveDefaultButton = useMemo(() => {
    return columnsFilters.every((col) =>
      col.isDefault === false
        ? !columnVisibilityModel[col.field]
        : columnVisibilityModel[col.field]
    );
  }, [columnVisibilityModel]);
  const isActiveClearButton = useMemo(() => {
    return Object.values(columnVisibilityModel).some((v) => v);
  }, [columnVisibilityModel]);
  const handleChipClick = (key: string) => {
    setColumnVisibilityModel((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };
  const clearActiveColumns = () => {
    columnsFilters.forEach((col) => {
      setColumnVisibilityModel((prev) => ({
        ...prev,
        [col.field]: false,
      }));
    });
  };
  return (
    <Box sx={{ p: 2 }}>
      <Grid
        mb={3}
        container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <FsTypography
          i18nKey={toolbarTitle || ''}
          fontWeight={'bold'}
          fontSize={'1.1rem'}
        />
        <Box display={'flex'} alignItems={'center'} gap={2}>
          <FsButton
            startIcon={<IconSetting />}
            onClick={() => setOpen((prev) => !prev)}
          >
            تنظیمات
          </FsButton>
          {toolbarActions}
        </Box>
      </Grid>

      {open && (
        <Grid container sx={{ mt: 1 }}>
          <Grid
            item
            xs={12}
            gap={2}
            display={'flex'}
            flexWrap={'wrap'}
            alignItems={'center'}
          >
            <FsButton
              i18nKey="پیش‌ فرض"
              variant="outlined"
              size="small"
              startIcon={<SettingsBackupRestoreOutlinedIcon />}
              onClick={() => activeDefaultColumns()}
              sx={({ palette }) =>
                isActiveDefaultButton
                  ? {
                      background: palette.primary[100],
                    }
                  : {}
              }
            />
            <FsButton
              i18nKey="حذف همه"
              variant="outlined"
              size="small"
              startIcon={<DeleteOutlineOutlinedIcon />}
              onClick={() => clearActiveColumns()}
              disabled={!isActiveClearButton}
            />
            {columnsFilters.map((col, index) => {
              return (
                <FsChip
                  key={index}
                  i18nkey={String(ifEmpty(col.headerName))}
                  variant={
                    columnVisibilityModel[col.field] ? 'filled' : 'outlined'
                  }
                  clickable
                  color={
                    columnVisibilityModel[col.field] ? 'primary' : 'default'
                  }
                  onClick={() => handleChipClick(col.field)}
                  icon={
                    columnVisibilityModel[col.field] ? (
                      <DoneIcon fontSize="small" />
                    ) : undefined
                  }
                />
              );
            })}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default TableToolbar;
