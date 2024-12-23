import { FsToggleButtonGroup, FsTypography } from '@fs/core';
import { FsRadioGroup, FsRangeSlider } from '@fs/form';
import { Box, Grid, Paper } from '@mui/material';
import { useState, type MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface SwitchFontSectionProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  fontWeight: number;
  setFontWeight: (weight: number) => void;
}

const SwitchFontSection = ({
  fontSize,
  setFontSize,
  fontWeight,
  setFontWeight,
}: SwitchFontSectionProps) => {
  const [toggledFontVariant, setToggledFontVariant] = useState<
    'type' | 'size' | 'weight'
  >('type');

  const toggleFontVariantOnChange = (
    _event: MouseEvent<HTMLElement>,
    newAlignment: 'type' | 'size' | 'weight'
  ) => {
    setToggledFontVariant(newAlignment);
  };
  const { t } = useTranslation();
  const fontWeightLabels: Record<number, string> = {
    1: '300',
    2: '400',
    3: '500',
    4: '700',
    5: '900',
  };
  const fontSizesLabels: Record<number, string> = {
    12: t('_SETTINGS.12PX'),
    16: t('_SETTINGS.16PX'),
    20: t('_SETTINGS.20PX'),
    24: t('_SETTINGS.24PX'),
    28: t('_SETTINGS.28PX'),
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
            <FsTypography variant="h6" i18nKey={'_SETTINGS.FONT_SETTINGS'} />
          </Grid>
          <Grid xs={12} item mb={3}>
            <FsToggleButtonGroup
              value={toggledFontVariant}
              onChange={toggleFontVariantOnChange}
              exclusive
              fullWidth
              items={[
                {
                  label: '_SETTINGS.TYPE',
                  value: 'type',
                },
                {
                  label: '_SETTINGS.SIZE',
                  value: 'size',
                },
                {
                  label: '_SETTINGS.WEIGHT',
                  value: 'weight',
                },
              ]}
            />
          </Grid>
          <Grid xs={12} item>
            {toggledFontVariant === 'type' && (
              <FsRadioGroup
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  columnGap: '5rem',
                }}
                name="fontType"
                defaultValue={'irSans'}
                list={[
                  { value: 'irSans', label: '_SETTINGS.IRAN_SANS_DEFAULT' },
                  {
                    value: 'irYekan',
                    label: '_SETTINGS.IRAN_Yekan',
                    disabled: true,
                  },
                ]}
              />
            )}
            {toggledFontVariant === 'size' && (
              <FsRangeSlider
                name="fontSize"
                step={4}
                min={12}
                max={28}
                value={fontSize}
                onChange={(_, value) => setFontSize(value as number)}
                valueLabelFormat={(value) => fontSizesLabels[value]}
              />
            )}
            {toggledFontVariant === 'weight' && (
              <FsRangeSlider
                name="fontWeight"
                step={1}
                min={1}
                max={5}
                value={fontWeight}
                onChange={(_, value) => setFontWeight(value as number)}
                valueLabelFormat={(value) => fontWeightLabels[value]}
                marks={[
                  { value: 1 },
                  { value: 2 },
                  { value: 3 },
                  { value: 4 },
                  { value: 5 },
                ]}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default SwitchFontSection;
