import { FsTypography } from '@fs/core';
import { Divider, Grid, Paper } from '@mui/material';
import moment from 'moment-jalaali';
import { useEffect, useState } from 'react';
import { useVersion } from 'src/common/hooks/useVersion';

moment.loadPersian({ dialect: 'persian-modern' });

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.format('dddd jD jMMMM HH:mm');
  return <FsTypography sx={{ fontSize: '.7rem' }} i18nKey={formattedDate} />;
};

export const Footer = () => {
  const { version } = useVersion();

  return (
    <Paper
      sx={({ palette }) => ({
        background: palette.secondary[50],
        borderRadius: 0,
      })}
    >
      <Grid
        rowGap={1}
        container
        alignItems={'center'}
        justifyContent={'space-between'}
        px={2}
        py={0.1}
        sx={(theme) => ({
          borderTop: `.1rem ${theme.palette.secondary[200]} solid`,
        })}
      >
        <Grid item>
          <Grid container columnGap={2} alignItems={'center'}>
            <FsTypography
              sx={{ fontSize: '.7rem' }}
              i18nKey={'تمامی حقوق این سایت متعلق به سازمان شایان می باشد.'}
            />
          </Grid>
        </Grid>
        <Grid item>
          <FsTypography
            sx={{ fontSize: '.7rem' }}
            color={'primary'}
            i18nKey={'ارتباط با پشتیبانی : 11111111'}
          />
        </Grid>
        <Grid item>
          <DateTimeDisplay />
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <FsTypography
            sx={{ fontSize: '.7rem' }}
            i18nKey={` نسخه رابط کاربری ${version} نسخه سمت سرور ${'_'}`}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
