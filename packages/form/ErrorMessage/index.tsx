import { FsTypography } from '@fs/core';

const ErrorMessage = ({ i18nKey }: { i18nKey: string }) => (
  <FsTypography
    component={'span'}
    variant="body2"
    i18nKey={i18nKey}
    color={'error'}
    pt={1}
    pb={1.5}
  />
);
export default ErrorMessage;
