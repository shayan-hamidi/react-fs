import { useFrontTable } from './useFrontTable';
import type { FsDataGridTableProps } from '../type';
import { useServerTable } from './useServerTable';

type FrontTableResult = ReturnType<typeof useFrontTable>;
type ServiceTableResult = ReturnType<typeof useServerTable>;

export const useTableFactory = (
  props: FsDataGridTableProps
): FrontTableResult | ServiceTableResult => {
  return props?.service ? useServerTable(props) : useFrontTable(props);
};
