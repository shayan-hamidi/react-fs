import { FsTypography } from '@fs/core';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import Link from '@mui/material/Link';
import { NavLink, UIMatch, useLocation, useMatches } from 'react-router-dom';
import type { RouteHandle } from 'src/routes/type';

const Breadcrumbs = () => {
  const matches = useMatches() as UIMatch<'', RouteHandle>[];
  const location = useLocation();
  const matchesHasCrumb = matches.filter(
    (route) => route?.handle?.cumbs !== false
  );

  return (
    <MuiBreadcrumbs>
      {matchesHasCrumb.map((route, index) =>
        route.pathname === location.pathname ? (
          <FsTypography
            key={index}
            color="secondary"
            i18nKey={route?.handle?.title || ''}
          />
        ) : route.handle?.cumbsOptions?.isReadonly ? (
          <FsTypography
            key={index}
            sx={({ palette }) => ({
              color: palette.secondary[400],
            })}
            i18nKey={route?.handle?.title || ''}
          />
        ) : (
          <Link
            key={index}
            underline="none"
            component={NavLink}
            to={route?.pathname}
          >
            <FsTypography
              sx={({ palette }) => ({
                color: palette.secondary[400],
                ':hover': {
                  color: palette.secondary[600],
                },
              })}
              i18nKey={route?.handle?.title || ''}
            />
          </Link>
        )
      )}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
