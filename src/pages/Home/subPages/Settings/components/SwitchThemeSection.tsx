import { FsToggleButtonGroup, FsTypography } from '@fs/core';
import { Box, Grid, Paper } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import spaceTheme from 'src/assets/images/space.png';
import jungleTheme from 'src/assets/images/jungle.png';
import earthTheme from 'src/assets/images/earth.png';
import shineTheme from 'src/assets/images/shine.png';
import woodTheme from 'src/assets/images/wood.png';
import defaultTheme from 'src/assets/images/default.png';
import type { MouseEvent } from 'react';
import type { ThemeMode, ThemeTemplate } from '@fs/utils';

interface SwitchThemeSectionProps {
  themeTemplate: ThemeTemplate;
  setThemeTemplate: (name: ThemeTemplate) => void;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const SwitchThemeSection = ({
  themeTemplate,
  setThemeTemplate,
  mode,
  setMode,
}: SwitchThemeSectionProps) => {
  type themeType = ThemeTemplate;
  const themeList: { image: string; title: string; value: themeType }[] = [
    {
      image: defaultTheme,
      title: '_SETTINGS.DEFAULT',
      value: 'default',
    },
    {
      image: jungleTheme,
      title: '_SETTINGS.GREEN',
      value: 'green',
    },
    {
      image: woodTheme,
      title: '_SETTINGS.BROWN',
      value: 'brown',
    },
    {
      image: shineTheme,
      title: '_SETTINGS.YELLOW',
      value: 'yellow',
    },
    {
      image: spaceTheme,
      title: '_SETTINGS.PURPLE',
      value: 'purple',
    },
    {
      image: earthTheme,
      title: '_SETTINGS.BLUE',
      value: 'blue',
    },
  ];
  const updateTheme = (val: themeType) => {
    setThemeTemplate(val);
  };
  const toggleModeOnChange = (
    _event: MouseEvent<HTMLElement>,
    newAlignment: ThemeMode
  ) => {
    setMode(newAlignment);
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
      <Grid container mb={2}>
        <Grid item>
          <FsTypography variant="h6" i18nKey={'_SETTINGS.THEME_SETTINGS'} />
        </Grid>
      </Grid>
      <Grid container mb={2}>
        <Grid xs={12} item>
          <FsToggleButtonGroup
            value={mode}
            onChange={toggleModeOnChange}
            exclusive
            fullWidth
            items={[
              {
                label: '_SETTINGS.LIGHT_MODE',
                value: 'light',
                startIcon: <LightModeOutlinedIcon />,
              },
              {
                label: '_SETTINGS.DARK_MODE',
                value: 'dark',
                startIcon: <BedtimeOutlinedIcon />,
              },
            ]}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {themeList.map(({ image, title, value }) => (
          <Grid item xs={12} sm={6} lg={4} key={value}>
            <Box
              sx={(theme) => ({
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: 1,
                border:
                  themeTemplate === value
                    ? `0.12rem solid ${theme.palette.primary.main}`
                    : '0.12rem solid transparent',
                boxShadow:
                  themeTemplate === value
                    ? `0 0 0.625rem ${theme.palette.primary.main}`
                    : 'none',
                transition:
                  'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover img': {
                  transform: 'scale(1.05)',
                },
                '&:hover .overlay': {
                  opacity: 0.8,
                  backgroundColor: theme.palette.background.paper,
                },
              })}
              onClick={() => updateTheme(value)}
            >
              <img
                src={image}
                alt={title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '0.25rem 0',
                  textAlign: 'center',
                  opacity: 0,
                  transition:
                    'opacity 0.3s ease-in-out, background-color 0.3s ease-in-out',
                }}
              >
                <FsTypography
                  i18nKey={title}
                  variant="caption"
                  fontWeight={'bold'}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default SwitchThemeSection;
