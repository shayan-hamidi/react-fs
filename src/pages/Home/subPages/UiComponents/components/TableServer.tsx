import { FsTable } from '@fs/core';
import { useService } from '@fs/utils';
import { uiComponentsActions } from '../uiComponentsService';

const Table = () => {
  const columns = [
    {
      field: 'bankName',
      headerName: 'اسم بانک',
    },
    {
      field: 'createdTime',
      headerName: 'تاریخ ایجاد',
    },
    {
      field: 'isActive',
      headerName: 'وضعیت',
    },
  ];
  const service = useService<uiComponentsActions, 'banks', 'getBank'>(
    'banks',
    'getBank'
  );

  return <FsTable name='table' hasRow service={service} columns={columns} />;
};

export default Table;
