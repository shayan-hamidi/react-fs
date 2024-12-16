import { FsTypography } from '@fs/core';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useMatches } from 'react-router-dom';
import { usePageInfo } from 'src/common/contexts/PageInfoContext';
import type { AppRouteObject } from 'src/routes/type';
import Breadcrumbs from './Breadcrumbs';
import BackButton from './BackButton';

const MainHeader = () => {
  const { prefix, setTitle, suffix, title, setPrefix, setSuffix } =
    usePageInfo();
  const matches = useMatches();
  const currentRoute = matches[matches.length - 1] as AppRouteObject;
  useEffect(() => {
    setTitle(currentRoute.handle?.title || '');
    setPrefix('');
    setSuffix('');
  }, [currentRoute]);
  return (
    <Box mb={5}>
      <Box display={'flex'} alignItems={'center'} columnGap={1}>
        <BackButton />
        <FsTypography
          variant="h6"
          color="secondary"
          fontWeight={'bold'}
          i18nKey={`${prefix} ${title} ${suffix}`}
        />
      </Box>
      <Box mt={2}>
        <Breadcrumbs />
      </Box>
    </Box>
  );
};

export default MainHeader;
