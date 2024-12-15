import { FsToggleButtonGroup, FsTypography } from '@fs/core';
import type { Language } from '@fs/utils';
import { Box, Grid, Paper } from '@mui/material';
import { type MouseEvent, useState } from 'react';

interface SwitchLanguageSectionProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const SwitchLanguageSection = ({
  language,
  setLanguage,
}: SwitchLanguageSectionProps) => {
  const [toggledLanguage, setToggledLanguage] = useState<Language>(language);

  const toggleLanguageOnChange = (
    _event: MouseEvent<HTMLElement>,
    newAlignment: Language
  ) => {
    setToggledLanguage(newAlignment);
    setLanguage(newAlignment);
  };
  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          borderRadius: 1,
        }}
      >
        <Grid container>
          <Grid item xs={12} mb={2}>
            <FsTypography variant="h6" i18nKey={'تنظیمات زبان'} />
          </Grid>
          <Grid xs={12} item>
            <FsToggleButtonGroup
              value={toggledLanguage}
              onChange={toggleLanguageOnChange}
              exclusive
              fullWidth
              items={[
                {
                  label: 'فارسی(FA)',
                  value: 'fa',
                  disabled: true,
                },
                {
                  label: 'انگلیسی(EN)',
                  value: 'en',
                  disabled: true,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
export default SwitchLanguageSection;
