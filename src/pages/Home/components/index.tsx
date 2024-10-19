import {
  FsAccordion,
  FsAlert,
  FsBarChart,
  FsButton,
  FsChip,
  FsHorizontalStepper,
  FsLineChart,
  FsNotifiedAlert,
  FsPieChart,
  FsScatterChart,
  FsTable,
  FsToggleButtonGroup,
  FsTypography,
  FsVerticalStepper,
  useAlert,
} from '@fs/core';
import {
  FsAutoComplete,
  FsCheckbox,
  FsDatePicker,
  FsDateTimePicker,
  FsFormProvider,
  FsInput,
  FsRadioGroup,
  FsRangeSlider,
  FsSelect,
  FsSmsVerification,
  FsSwitch,
  FsTimePicker,
  FsUploadFile,
} from '@fs/form';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';
import { type MouseEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import viteLogo from '../../../../public/vite.svg';
import reactLogo from '../../../assets/react.svg';
import { useThemeContext } from '@fs/utils';

const Home = () => {
  const [value, setValue] = useState('value2');
  const [flipCardActive, setFlipCardActive] = useState(false);
  const methods = useForm();
  const { setThemeName } = useThemeContext();
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [themeType, setThemeType] = useState<
    'default' | 'forest' | 'space' | 'desert'
  >('default');
  const themeList = [
    { label: 'desert', value: 'desert' },
    { label: 'default', value: 'default' },
    { label: 'space', value: 'space' },
    { label: 'forest', value: 'forest' },
  ];
  const rows = [
    { id: 1, lastName: 'اسنو', firstName: 'جان', age: 14 },
    { id: 2, lastName: 'لنیستر', firstName: 'سرسی', age: 31 },
    { id: 3, lastName: 'لنیستر', firstName: 'جیمی', age: 31 },
    { id: 4, lastName: 'استارک', firstName: 'آریا', age: 11 },
    { id: 5, lastName: 'تارگرین', firstName: 'دنریس', age: 22 },
    { id: 7, lastName: 'کلیفورد', firstName: 'فررا', age: 44 },
    { id: 8, lastName: 'فرانس', firstName: 'راسینی', age: 36 },
    { id: 9, lastName: 'بولتون', firstName: 'رمزی', age: 65 },
  ];
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'firstName',
      headerName: 'نام',
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'نام خانوادگی',
      editable: true,
    },
    {
      field: 'age',
      headerName: 'سن',
      type: 'number',
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'نام کامل',
      description: 'قابل طبقه بندی نیست',
      sortable: false,
      valueGetter: (_value, row) =>
        `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
  const { triggerAlert } = useAlert();
  const data = [
    {
      id: 'data-0',
      x1: 329.39,
      x2: 391.29,
      y1: 443.28,
      y2: 153.9,
    },
    {
      id: 'data-1',
      x1: 96.94,
      x2: 139.6,
      y1: 110.5,
      y2: 217.8,
    },
    {
      id: 'data-2',
      x1: 336.35,
      x2: 282.34,
      y1: 175.23,
      y2: 286.32,
    },
    {
      id: 'data-3',
      x1: 159.44,
      x2: 384.85,
      y1: 195.97,
      y2: 325.12,
    },
  ];
  const handleChange = (
    _event: MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setValue(newAlignment);
  };
  const onSubmit = (data: any) => {
    console.log(data);
    triggerAlert('1', 2000, { severity: 'warning' });
    setTimeout(() => {
      triggerAlert('2', 2000, { severity: 'error' });
    }, 2000);
    setTimeout(() => {
      triggerAlert('3', 2000, { severity: 'info' });
    }, 4000);
  };
  const updateMode = (e: boolean) => {
    if (!e) {
      setMode('light');
    } else {
      setMode('dark');
    }
  };
  useEffect(() => {
    setThemeName(themeType, mode);
  }, [mode, themeType]);

  const themeFormMethods = useForm();
  return (
    <Box p={4} sx={{ backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      {/* Section for Animations */}
      <Typography variant="h4" gutterBottom sx={{ color: '#333', mb: 3 }}>
        Animations Showcase
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Pulse Animation</Typography>
            <Box
              className="pulse"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background: 'lightBlue',
                mt: 2,
              }}
            >
              animation
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Typing Effect Animation</Typography>
            <Box
              className="typing-effect"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background: 'lightBlue',
                mt: 2,
              }}
            >
              Typing Effect Animation
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Heart Beat Animation</Typography>
            <Box
              className="heartbeat"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background: 'lightBlue',
                mt: 2,
              }}
            >
              animation
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Bounce In Animation</Typography>
            <Box
              className="bounce-in"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background: 'lightBlue',
                mt: 2,
              }}
            >
              animation
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Rotate Scale Animation</Typography>
            <Box
              className="rotate-scale"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background: 'lightBlue',
                mt: 2,
              }}
            >
              animation
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Wiggle Animation</Typography>
            <Box
              className="wiggle"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background: 'lightBlue',
                mt: 2,
              }}
            >
              animation
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Fade In Out Animation</Typography>
            <Box
              className="fade-in-out"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                background: 'lightBlue',
                mt: 2,
              }}
            >
              animation
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Border On Hover Animation</Typography>
            <Box
              className="border-on-hover"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 2,
              }}
            >
              animation
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Spinner Border Animation</Typography>
            <Box
              className="spinner-border"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 2,
              }}
            >
              <FsTypography
                i18nKey="animation"
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Gradient Border Animation</Typography>
            <Box
              className="gradient-border"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 2,
              }}
            >
              <FsTypography
                i18nKey="animation"
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Gradient Border Animation</Typography>
            <Box
              className="pulse-border"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 2,
              }}
            >
              <FsTypography
                i18nKey="animation"
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Flip Card Section */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '#333', mt: 5, mb: 3 }}
      >
        Flip Card with Expand/Collapse
      </Typography>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Box className="flip-card" sx={{ width: '18.75rem', margin: 'auto' }}>
          <Box className="flip-card-inner">
            <Box className="flip-card-front" sx={{ p: 2, textAlign: 'center' }}>
              <FsTypography i18nKey="Front Side" component={'h2'} />
            </Box>
            <Box
              className="flip-card-back"
              sx={{
                p: 2,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <FsTypography i18nKey="Back Side" component={'h2'} />
              <FsButton onClick={() => setFlipCardActive(true)}>
                More Info
              </FsButton>
              <Box
                className={`expand-collapse ${flipCardActive && 'active'}`}
                sx={{ mt: 2 }}
              >
                <FsTypography
                  i18nKey="This is additional information that expands and collapses when
                  you click the button."
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Form Components Section */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '#333', mt: 5, mb: 3 }}
      >
        Form Components
      </Typography>
      <FsFormProvider
        name="form"
        methods={methods}
        formProps={{ onSubmit: methods.handleSubmit(onSubmit) }}
      >
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FsNotifiedAlert i18nkey="new notification" severity="error" />
            </Grid>
            <Grid item xs={12}>
              <FsAlert i18nkey="new notification" severity="info" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsChip i18nkey="Chip" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsRadioGroup
                name="radio"
                i18nKey="radiolabel"
                list={[
                  { label: '11', value: '1' },
                  { label: '22', value: '2' },
                  { label: '33', value: '3' },
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsSmsVerification
                numInputs={6}
                name="smsCode"
                rules={{
                  required: 'پر کردن فیلد اجباری است.',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsDatePicker
                name="datePicker"
                i18nKey="تقویم"
                rules={{
                  required: 'پر کردن فیلد اجباری است.',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsTimePicker
                name="timePicker"
                i18nKey="ساعت"
                rules={{
                  required: 'پر کردن فیلد اجباری است.',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsDateTimePicker
                name="dateTimePicker"
                i18nKey="تقویم - ساعت"
                rules={{
                  required: 'پر کردن فیلد اجباری است.',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsSwitch name="ssss" i18nKey="lable" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsSelect
                name="assssss"
                i18nKey="shayan"
                size="small"
                items={[{ label: 'shine', value: 'asdjkaojd' }]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsCheckbox name="checkbox" i18nKey="saasd" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsAutoComplete
                name="autoComplete"
                options={[
                  { value: '1', label: '11' },
                  { value: '2', label: '22' },
                  { value: '3', label: '33' },
                  { value: '4', label: '44' },
                ]}
                i18nKey="sssss"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsRangeSlider name="rangeSlider" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsInput name="sdsd" i18nKey="dsdsds" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FsUploadFile
                name="uploadFile"
                rules={{
                  required: 'پر کردن فیلد اجباری است.',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FsButton i18nKey="submit" type="submit" />
            </Grid>
          </Grid>
        </Paper>
      </FsFormProvider>

      {/* Data Visualization Section */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '#333', mt: 5, mb: 3 }}
      >
        Data Visualization
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FsBarChart
            xAxis={[
              {
                id: 'barCategories',
                data: ['bar A', 'bar B', 'bar C'],
                scaleType: 'band',
              },
            ]}
            series={[
              {
                data: [2, 5, 3],
              },
            ]}
            height={300}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FsLineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FsPieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FsScatterChart
            width={600}
            height={300}
            series={[
              {
                label: 'Series A',
                data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
              },
              {
                label: 'Series B',
                data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
              },
            ]}
          />
        </Grid>
      </Grid>

      {/* Miscellaneous Section */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '#333', mt: 5, mb: 3 }}
      >
        Miscellaneous Components
      </Typography>
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12}>
          <FsHorizontalStepper steps={['مرحله یک', 'مرحله دو', 'مرحله سه']} />
        </Grid>
        <Grid item xs={12}>
          <FsVerticalStepper
            steps={[
              {
                label: 'عنوان مرحله اول',
                description: `جزئیات مرحله اول`,
              },
              {
                label: 'عنوان مرحله دوم',
                description: `جزئیات مرحله دوم`,
              },
              {
                label: 'عنوان مرحله سوم',
                description: `جزئیات مرحله سوم`,
              },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <FsAccordion
            titleKey={'Accordion Title'}
            children={<Box>Accordion detials</Box>}
          />
        </Grid>
        <Grid item xs={12}>
          <FsTable columns={columns} rows={rows} hasRow />
        </Grid>
        <Grid item xs={12}>
          <FsButton i18nKey="tooltipppp" tooltipProps={{ i18nKey: 'ssss' }} />
        </Grid>
        <Grid item xs={12}>
          <FsToggleButtonGroup
            color="primary"
            value={value}
            exclusive
            onChange={handleChange}
            items={[
              { label: 'label', value: 'value' },
              { label: 'label2', value: 'value2' },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <FsTypography component="h3" i18nKey="header3" variant="h3" />
        </Grid>
        <Grid item xs={12}>
          <FsTypography component="p" i18nKey="paragraph1" variant="body1" />
        </Grid>
        <Grid item xs={12}>
          <FsTypography component="span" i18nKey="span1" variant="caption" />
        </Grid>
        <Grid item xs={12}>
          <Box>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography className="read-the-docs">
            Click on the Vite and React logos to learn more
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '#333', mt: 5, mb: 3 }}
      >
        Theme Switcher
      </Typography>
      <Paper sx={{ background: (theme) => theme.palette.background.default }}>
        <FsFormProvider name="theme-form" methods={themeFormMethods}>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={5}
          >
            <Box sx={{ width: '100%' }}>
              <FsSelect
                name="theme"
                items={themeList}
                i18nKey="theme"
                onChange={(e) =>
                  setThemeType(
                    e.target.value as 'default' | 'forest' | 'space' | 'desert'
                  )
                }
              />
            </Box>
            <FsSwitch
              name="mode"
              i18nKey="mode"
              onChange={(e) =>
                updateMode(e.target.checked as unknown as boolean)
              }
            />
          </Box>
        </FsFormProvider>
      </Paper>
    </Box>
  );
};

export default Home;
