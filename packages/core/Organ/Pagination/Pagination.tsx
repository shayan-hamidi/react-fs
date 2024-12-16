import { Pagination, PaginationProps, SxProps, Theme } from '@mui/material';

type FsPaginationProps = Omit<PaginationProps, 'children'>;

const getStyles = (theme: Theme): SxProps => ({
  '& .MuiPaginationItem-root': {
    borderRadius: '0.5rem',
    borderColor: 'transparent',
    borderWidth: '0.125rem !important',
  },
  '& .Mui-selected': {
    borderColor: theme.palette.primary.main + '!important',
    '&:disabled': {
      borderColor: theme.palette.grey[200] + '!important',
    },
  },
  '& .MuiPaginationItem-previousNext': {
    color: 'primary.main',
  },
  '& .MuiPagination-ul': {
    width: 'max-content',
  },
});

const FsPagination = ({
  shape = 'rounded',
  color = 'primary',
  variant = 'outlined',
  sx,
  ...rest
}: FsPaginationProps) => {
  return (
    <Pagination
      variant={variant}
      shape={shape}
      color={color}
      sx={(theme) => ({
        ...getStyles(theme),
        ...sx,
      })}
      {...rest}
    />
  );
};

export default FsPagination;