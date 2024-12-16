import {
  FsAccordion,
  FsAlert,
  FsBarChart,
  FsButton,
  FsChip,
  FsDescription,
  FsHorizontalStepper,
  FsLineChart,
  FsNotifiedAlert,
  FsPagination,
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
import { Box, Grid, Paper } from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';
import { ClearIcon } from '@mui/x-date-pickers/icons';
import { type MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
  const [value, setValue] = useState('value2');
  const [flipCardActive, setFlipCardActive] = useState(false);
  const methods = useForm();
  const rows = [
    { id: 1, lastName: 'اسنو', firstName: 'جان', age: 14 },
    { id: 2, lastName: 'لنیستر', firstName: 'سرسی', age: 31 },
    { id: 3, lastName: 'لنیستر', firstName: 'جیمی', age: 31 },
    { id: 4, lastName: 'استارک', firstName: 'آریا', age: 11 },
    { id: 5, lastName: 'تارگرین', firstName: 'دنریس', age: 22 },
    { id: 7, lastName: 'کلیفورد', firstName: 'فررا', age: 44 },
    { id: 8, lastName: 'فرانس', firstName: 'راسینی', age: 36 },
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
      editable: true,
      sortable: true,
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
  const onSubmit = () => {
    triggerAlert('1', 2000, { severity: 'warning' });
    setTimeout(() => {
      triggerAlert('2', 2000, { severity: 'error' });
    }, 2000);
    setTimeout(() => {
      triggerAlert('3', 2000, { severity: 'info' });
    }, 4000);
  };
  return (
    <>
      <Box
        p={4}
        sx={(theme) => ({
          minHeight: '100vh',
          background: theme.palette.grey[50],
          borderRadius: 3,
        })}
      >
        {/* Section for Description */}
        <FsTypography
          i18nKey={'Description'}
          variant="h4"
          gutterBottom
          sx={{ mb: 3, mt: 5 }}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FsDescription title="نام ">شایان</FsDescription>
          </Grid>
          {/* or */}
          <Grid item xs={6}>
            <FsDescription title="نام خانوادگی " text="حمیدی" />
          </Grid>
        </Grid>
        {/* Section for Pagination */}
        <FsTypography
          i18nKey={'Pagination'}
          variant="h4"
          gutterBottom
          sx={{ mb: 3, mt: 5 }}
        />
        <Box>
          <FsPagination sx={{ mt: 2 }} count={10} />
          <FsPagination sx={{ mt: 2 }} disabled count={10} />
        </Box>
        {/* Section for Button */}
        <FsTypography
          i18nKey={'Buttons'}
          variant="h4"
          gutterBottom
          sx={{ mb: 3, mt: 5 }}
        />
        <Grid container spacing={2}>
          <Grid item>
            <FsButton disabled size="large" variant="contained" color="primary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton loading size="large" variant="contained" color="primary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton loading variant="contained" color="secondary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton loading size="small" variant="contained" color="error">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton size="large" variant="contained" color="primary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton variant="contained" color="secondary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton size="small" variant="contained" color="error">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton
              startIcon={<ClearIcon />}
              variant="contained"
              color="warning"
            >
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton endIcon={<ClearIcon />} variant="contained" color="info">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton variant="contained" color="success">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton variant="contained" color="inherit">
              کلیک
            </FsButton>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item>
            <FsButton disabled size="large" variant="outlined" color="primary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton loading size="large" variant="outlined" color="primary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton loading variant="outlined" color="secondary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton loading size="small" variant="outlined" color="error">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton size="large" variant="outlined" color="primary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton variant="outlined" color="secondary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton size="small" variant="outlined" color="error">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton
              startIcon={<ClearIcon />}
              variant="outlined"
              color="warning"
            >
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton endIcon={<ClearIcon />} variant="outlined" color="info">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton variant="outlined" color="success">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton variant="outlined" color="inherit">
              کلیک
            </FsButton>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item>
            <FsButton disabled size="large" variant="text" color="primary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton loading size="large" variant="text" color="primary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton loading variant="text" color="secondary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton loading size="small" variant="text" color="error">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton size="large" variant="text" color="primary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton variant="text" color="secondary">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton size="small" variant="text" color="error">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton startIcon={<ClearIcon />} variant="text" color="warning">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton endIcon={<ClearIcon />} variant="text" color="info">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton variant="text" color="success">
              کلیک
            </FsButton>
          </Grid>
          <Grid item>
            <FsButton variant="text" color="inherit">
              کلیک
            </FsButton>
          </Grid>
        </Grid>

        {/* Section for Animations */}
        <FsTypography
          i18nKey={'Animations Showcase'}
          variant="h4"
          gutterBottom
          sx={{ mb: 3, mt: 5 }}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <FsTypography i18nKey={'Pulse Animation'} variant="h6" />
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
              <FsTypography i18nKey={'Typing Effect Animation'} variant="h6" />
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
              <FsTypography i18nKey={'Heart Beat Animation'} variant="h6" />
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
              <FsTypography i18nKey={'Bounce In Animation'} variant="h6" />
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
              <FsTypography i18nKey={'Rotate Scale Animation'} variant="h6" />
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
              <FsTypography i18nKey={'Wiggle Animation'} variant="h6" />
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
              <FsTypography i18nKey={'Fade In Out Animation'} variant="h6" />
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
              <FsTypography
                i18nKey={'Border On Hover Animation'}
                variant="h6"
              />
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
              <FsTypography i18nKey={'Spinner Border Animation'} variant="h6" />
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
              <FsTypography
                i18nKey={'Gradient Border Animation'}
                variant="h6"
              />
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
              <FsTypography
                i18nKey={'Gradient Border Animation'}
                variant="h6"
              />
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
        <FsTypography
          i18nKey={'Flip Card with Expand/Collapse'}
          variant="h4"
          gutterBottom
          sx={{ mt: 5, mb: 3 }}
        />
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Box className="flip-card" sx={{ width: '18.75rem', margin: 'auto' }}>
            <Box className="flip-card-inner">
              <Box
                className="flip-card-front"
                sx={{ p: 2, textAlign: 'center' }}
              >
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
        <FsTypography
          i18nKey={'Form Components'}
          variant="h4"
          gutterBottom
          sx={{ mt: 5, mb: 3 }}
        />
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
        <FsTypography
          i18nKey={'Data Visualization'}
          variant="h4"
          gutterBottom
          sx={{ mt: 5, mb: 3 }}
        />
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
        <FsTypography
          i18nKey={'Miscellaneous Components'}
          variant="h4"
          gutterBottom
          sx={{ mt: 5, mb: 3 }}
        />
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
            <FsTable
              name={'table'}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 2,
                    page: 0,
                  },
                },
              }}
              columns={columns}
              rows={rows}
              hasRow
            />
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
                {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
              </a>
              <a href="https://react.dev" target="_blank">
                {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
              </a>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <FsTypography
              i18nKey={'Click on the Vite and React logos to learn more'}
              className="read-the-docs"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
