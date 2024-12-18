import { Box, Grid } from '@mui/material';
import { FsFormProvider } from '@fs/form';
import { useForm } from 'react-hook-form';
import SwitchThemeSection from './SwitchThemeSection';
import SwitchLanguageSection from './SwitchLanguageSection';
import SwitchFontSection from './SwitchFontSection';
import ThemePreviewSection from './ThemePreviewSection';
import { useFsTheme } from '@fs/utils';
import { useEffect, useState } from 'react';
import { useAlert } from '@fs/core';

const Settings = () => {
  const methods = useForm();
  const { triggerAlert } = useAlert();
  const {
    themeTemplate,
    mode,
    language,
    fontSize,
    fontWeight,
    setThemeTemplate,
    setMode,
    setLanguage,
    setFontSize,
    setFontWeight,
  } = useFsTheme();

  // Temporary state for preview
  const [tempThemeTemplate, setTempThemeTemplate] = useState(themeTemplate);
  const [tempMode, setTempMode] = useState(mode);
  const [tempLanguage, setTempLanguage] = useState(language);
  const [tempFontSize, setTempFontSize] = useState(fontSize);
  const [tempFontWeight, setTempFontWeight] = useState(fontWeight);

  // Update temporary state when global context changes
  useEffect(() => {
    setTempThemeTemplate(themeTemplate);
    setTempMode(mode);
    setTempLanguage(language);
    setTempFontSize(fontSize);
    setTempFontWeight(fontWeight);
  }, [themeTemplate, mode, language, fontSize, fontWeight]);

  const applySettings = () => {
    if (
      tempMode === mode &&
      tempLanguage === language &&
      tempFontSize === fontSize &&
      tempFontWeight === fontWeight &&
      tempThemeTemplate === themeTemplate
    ) {
      triggerAlert('_SETTINGS.NO_CHANGES', 2000, { severity: 'warning' });
    } else {
      setThemeTemplate(tempThemeTemplate);
      setMode(tempMode);
      setLanguage(tempLanguage);
      setFontSize(tempFontSize);
      setFontWeight(tempFontWeight);
    }
  };

  const resetSettings = () => {
    const isDefaultMode = mode === 'light' && tempMode === 'light';
    const isDefaultLanguage = language === 'fa' && tempLanguage === 'fa';
    const isDefaultFontSize = fontSize === 16 && tempFontSize === 16;
    const isDefaultFontWeight = fontWeight === 2 && tempFontWeight === 2;
    const isDefaultThemeTemplate =
      themeTemplate === 'default' && tempThemeTemplate === 'default';
    if (
      isDefaultMode &&
      isDefaultLanguage &&
      isDefaultFontSize &&
      isDefaultFontWeight &&
      isDefaultThemeTemplate
    ) {
      triggerAlert('_SETTINGS.ALREADY_DEFAULT', 2000, { severity: 'warning' });
    } else {
      // update deault preview
      setTempThemeTemplate('default');
      setTempMode('light');
      setTempLanguage('fa');
      setTempFontSize(16);
      setTempFontWeight(2);
      //update default theme
      setFontWeight(2);
      setFontSize(16);
      setLanguage('fa');
      setMode('light');
      setThemeTemplate('default');
    }
  };

  return (
    <FsFormProvider name="settings" methods={methods}>
      <Box>
        <Grid container columnSpacing={3}>
          <Grid item xs={12} md={6}>
            <SwitchThemeSection
              themeTemplate={tempThemeTemplate}
              setThemeTemplate={setTempThemeTemplate}
              mode={tempMode}
              setMode={setTempMode}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              height={'100%'}
              display={'flex'}
              alignContent={'space-between'}
            >
              <Grid item xs={12}>
                <SwitchFontSection
                  fontSize={tempFontSize}
                  setFontSize={setTempFontSize}
                  fontWeight={tempFontWeight}
                  setFontWeight={setTempFontWeight}
                />
              </Grid>
              <Grid item xs={12}>
                <SwitchLanguageSection
                  language={tempLanguage}
                  setLanguage={setTempLanguage}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={6}>
            <ThemePreviewSection
              themeTemplate={tempThemeTemplate}
              mode={tempMode}
              language={tempLanguage}
              fontSize={tempFontSize}
              fontWeight={tempFontWeight}
              applySettings={applySettings}
              resetSettings={resetSettings}
            />
          </Grid>
        </Grid>
      </Box>
    </FsFormProvider>
  );
};

export default Settings;
