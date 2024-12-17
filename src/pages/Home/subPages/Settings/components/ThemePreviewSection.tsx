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
    const baseTheme = themes[themeTemplate][mode];
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

  const faRows = [
    { id: 1, lastName: 'چمران', firstName: 'مصطفی' },
    { id: 2, lastName: 'همت', firstName: 'ابراهیم' },
    { id: 3, lastName: 'زین الدین', firstName: 'مهدی' },
    { id: 4, lastName: 'رجایی', firstName: 'علی' },
    { id: 5, lastName: 'باکری', firstName: 'مهدی' },
    { id: 6, lastName: 'باهنر', firstName: 'جواد' },
    { id: 7, lastName: 'جهان آرا', firstName: 'محمد' },
  ];
  const enRows = [
    { id: 1, lastName: 'Chamran', firstName: 'Mostafa' },
    { id: 2, lastName: 'Hemat', firstName: 'Ebrahim' },
    { id: 3, lastName: 'Zeinodin', firstName: 'Mahdi' },
    { id: 4, lastName: 'Rajjaiee', firstName: 'Ali' },
    { id: 5, lastName: 'Bakeri', firstName: 'Mahdi' },
    { id: 6, lastName: 'Bahonar', firstName: 'Javad' },
    { id: 7, lastName: 'Jahanara', firstName: 'mohammad' },
  ];

  const faColumns: GridColDef[] = [
    { field: 'firstName', headerName: 'نام', flex: 1 },
    { field: 'lastName', headerName: 'نام خانوادگی', flex: 1 },
  ];
  const enColumns: GridColDef[] = [
    { field: 'firstName', headerName: 'Name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
  ];

  return (
    <>
      <FsTypography variant="h6" i18nKey={'_SETTINGS.PREVIEW'} />
      <ThemeProvider theme={previewTheme}>
        <CacheProvider value={cache}>
          <div dir={direction}>
            <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, mt: 4 }}>
              <Grid
                container
                columnSpacing={5}
                rowSpacing={{ xs: 5, lg: 0 }}
                display={'flex'}
                justifyContent={'space-between'}
              >
                <Grid item xs={12} lg={6}>
                  <FsTypography
                    i18nKey={language === 'en' ? 'Table' : 'جدول'}
                    fontWeight={'bold'}
                    mb={3}
                  />
                  <FsTable
                    name={'table'}
                    columns={language === 'en' ? enColumns : faColumns}
                    rows={language === 'en' ? enRows : faRows}
                    hideToolbar
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
                  <FsTypography
                    i18nKey={language === 'en' ? 'Button' : 'دکمه'}
                    fontWeight={'bold'}
                    mb={3}
                  />
                  <FsButton
                    i18nKey={language === 'en' ? 'Button title' : 'عنوان دکمه'}
                    variant="outlined"
                  />
                  <FsButton
                    i18nKey={language === 'en' ? 'Button title' : 'عنوان دکمه'}
                    sx={{ mx: 3 }}
                  />
                  <FsButton
                    i18nKey={language === 'en' ? 'Button title' : 'عنوان دکمه'}
                    variant="contained"
                  />
                </Grid>
              </Grid>
              <Grid container columnSpacing={3} mt={3}>
                <Grid item xs={6}>
                  <FsButton
                    i18nKey={language === 'en' ? 'Default' : 'پیش فرض'}
                    variant="outlined"
                    fullWidth
                    onClick={resetSettings}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FsButton
                    i18nKey={language === 'en' ? 'Apply' : 'اعمال'}
                    variant="contained"
                    fullWidth
                    onClick={applySettings}
                  />
                </Grid>
              </Grid>
            </Paper>
          </div>
        </CacheProvider>
      </ThemeProvider>
    </>
  );
};

export default ThemePreviewSection;
