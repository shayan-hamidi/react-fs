import { FsButton, FsTable, FsTypography } from '@fs/core';
import { useMemo } from 'react';
import { Grid, Paper } from '@mui/material';
import type { GridColDef } from '@mui/x-data-grid';
import { ThemeProvider, type Direction } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { cacheLtr, cacheRtl, themes } from '@fs/utils';
import type { ThemeMode, ThemeTemplate, Language } from '@fs/utils';

interface ThemePreviewSectionProps {
  themeTemplate: ThemeTemplate;
  mode: ThemeMode;
  language: Language;
  fontSize: number;
  fontWeight: number;
  applySettings: () => void;
  resetSettings: () => void;
}

const ThemePreviewSection = ({
  themeTemplate,
  mode,
  language,
  fontSize,
  fontWeight,
  applySettings,
  resetSettings,
}: ThemePreviewSectionProps) => {
  const direction: Direction = language === 'fa' ? 'rtl' : 'ltr';

  const scaleTypography = (baseSize: number, weightLevel: number) => {
    const baseWeights: Record<number, number> = {
      1: 300,
      2: 400,
      3: 500,
      4: 700,
      5: 900,
    };
    const computedFontWeight = baseWeights[weightLevel] || 400;

    return {
      fontSize: baseSize,
      h1: { fontSize: baseSize * 2.5, fontWeight: computedFontWeight + 200 },
      h2: { fontSize: baseSize * 2.25, fontWeight: computedFontWeight + 150 },
      h3: { fontSize: baseSize * 2, fontWeight: computedFontWeight + 100 },
      h4: { fontSize: baseSize * 1.75, fontWeight: computedFontWeight },
      h5: { fontSize: baseSize * 1.5, fontWeight: computedFontWeight },
      h6: { fontSize: baseSize * 1.25, fontWeight: computedFontWeight },
      subtitle1: { fontSize: baseSize * 1.1, fontWeight: computedFontWeight },
      subtitle2: { fontSize: baseSize, fontWeight: computedFontWeight },
      body1: { fontSize: baseSize * 0.9, fontWeight: computedFontWeight },
      body2: { fontSize: baseSize * 0.8, fontWeight: computedFontWeight - 100 },
      caption: {
        fontSize: baseSize * 0.75,
        fontWeight: computedFontWeight - 100,
      },
      button: {
        fontSize: baseSize * 0.85,
        fontWeight: computedFontWeight + 100,
      },
      overline: {
        fontSize: baseSize * 0.7,
        fontWeight: computedFontWeight - 100,
      },
    };
  };

  const previewTheme = useMemo(() => {
    const baseTheme = (themes as any)[themeTemplate][mode];
    return {
      ...baseTheme,
      typography: {
        ...baseTheme?.typography,
        ...scaleTypography(fontSize, fontWeight),
      },
      direction,
    };
  }, [themeTemplate, mode, direction, fontSize, fontWeight]);

  const cache = useMemo(
    () => (direction === 'rtl' ? cacheRtl : cacheLtr),
    [direction]
  );

  const rows = [
    { id: 1, lastName: 'چمران', firstName: 'مصطفی' },
    { id: 2, lastName: 'همت', firstName: 'ابراهیم' },
    { id: 3, lastName: 'زین الدین', firstName: 'مهدی' },
    { id: 4, lastName: 'رجایی', firstName: 'علی' },
    { id: 5, lastName: 'باکری', firstName: 'مهدی' },
    { id: 6, lastName: 'باهنر', firstName: 'جواد' },
    { id: 7, lastName: 'جهان آرا', firstName: 'محمد' },
  ];
  const columns: GridColDef[] = [
    { field: 'firstName', headerName: 'نام', flex: 1 },
    { field: 'lastName', headerName: 'نام خانوادگی', flex: 1 },
  ];

  return (
    <>
      <FsTypography variant="h6" i18nKey={'پیش نمایش'} />
      <CacheProvider value={cache}>
        <ThemeProvider theme={previewTheme}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, mt: 4 }}>
            <Grid
              container
              columnSpacing={5}
              rowSpacing={{ xs: 5, lg: 0 }}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Grid item xs={12} lg={6}>
                <FsTypography i18nKey={'جدول'} fontWeight={'bold'} mb={3} />
                <FsTable
                  name={'table'}
                  columns={columns}
                  rows={rows}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 3,
                        page: 0,
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FsTypography i18nKey={'دکمه'} fontWeight={'bold'} mb={3} />
                <FsButton i18nKey="عنوان دکمه" variant="outlined" />
                <FsButton i18nKey="عنوان دکمه" sx={{ mx: 3 }} />
                <FsButton i18nKey="عنوان دکمه" variant="contained" />
              </Grid>
            </Grid>
            <Grid container columnSpacing={3} mt={3}>
              <Grid item xs={6}>
                <FsButton
                  i18nKey="پیش فرض"
                  variant="outlined"
                  fullWidth
                  onClick={resetSettings}
                />
              </Grid>
              <Grid item xs={6}>
                <FsButton
                  i18nKey="اعمال"
                  variant="contained"
                  fullWidth
                  onClick={applySettings}
                />
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default ThemePreviewSection;
