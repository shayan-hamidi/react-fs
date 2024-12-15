import { FsIconButton } from '@fs/core';
import { ArrowForward } from '@mui/icons-material';
import { UIMatch, useMatches, useNavigate } from 'react-router-dom';
import type { RouteHandle } from 'src/routes/type';

const BackButton = () => {
  const matchs = useMatches() as UIMatch<'', RouteHandle>[];
  const currentRoute = matchs[matchs.length - 1];
  const prevRoute = matchs[matchs.length - 2];
  const navigateTo = useNavigate();
  const checkIsShowPrevButton = () =>
    prevRoute &&
    prevRoute.handle.backToOptions?.indexed !== false &&
    currentRoute?.handle?.backTo !== false &&
    prevRoute.pathname !== '/' &&
    currentRoute.pathname !== '/';

  return (
    checkIsShowPrevButton() && (
      <FsIconButton onClick={() => navigateTo(prevRoute.pathname)} size="small">
        <ArrowForward fontSize="small" />
      </FsIconButton>
    )
  );
};

export default BackButton;
