import {
  FsAccordion,
  FsAlert,
  FsBarChart,
  FsButton,
  FsChip,
  FsLineChart,
  FsNotifiedAlert,
  FsPieChart,
  FsScatterChart,
  FsToggleButtonGroup,
  FsTypography,
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
import { Box, Grid } from '@mui/material';
import { type MouseEvent, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import viteLogo from '../../../../public/vite.svg';
import reactLogo from '../../../assets/react.svg';

const Home = () => {
  const [value, setValue] = useState('value2');
  const methods = useForm();
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
  return (
    <Box p={4}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FsNotifiedAlert i18nkey="new notification" severity="error" />
          <FsAlert i18nkey="new notification" severity="info" />
          <FsChip i18nkey="Chip" />
          <FsRadioGroup
            name="radio"
            i18nKey="radiolabel"
            list={[
              { label: '11', value: '1' },
              { label: '22', value: '2' },
              { label: '33', value: '3' },
            ]}
          />
          <FsDatePicker
            name="datePicker"
            i18nKey="تقویم"
            rules={{
              required: 'پر کردن فیلد اجباری است.',
            }}
          />
          <FsTimePicker
            name="timePicker"
            i18nKey="ساعت"
            rules={{
              required: 'پر کردن فیلد اجباری است.',
            }}
          />
          <FsDateTimePicker
            name="dateTimePicker"
            i18nKey="تقویم - ساعت"
            rules={{
              required: 'پر کردن فیلد اجباری است.',
            }}
          />
          <FsSwitch name="ssss" i18nKey="lable" />
          <FsSelect
            name="assssss"
            i18nKey="ss"
            items={[{ label: 'shine', value: 'asdjkaojd' }]}
          />
          <FsCheckbox name="checkbox" i18nKey="saasd" />
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
          <FsRangeSlider name="rangeSlider" />
          <FsInput name="sdsd" i18nKey="dsdsds" />
          <FsUploadFile
            name="uploadFile"
            rules={{
              required: 'پر کردن فیلد اجباری است.',
            }}
          />
          <FsButton i18nKey="ssssssss" type="submit" />
        </form>
      </FormProvider>
      <FsAccordion
        children={<Box sx={{ background: 'Accordion detials' }}>sssss</Box>}
        titleKey={'Accordion Title'}
      ></FsAccordion>
      <FsButton i18nKey="tooltipppp" tooltipProps={{ i18nKey: 'ssss' }} />
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
      <FsTypography component="h3" i18nKey="header3" variant="h3" />
      <FsTypography component="p" i18nKey="paragraph1" variant="body1" />
      <FsTypography component="span" i18nKey="span1" variant="caption" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <FsFormProvider
        name="s"
        formProps={{ onSubmit: methods.handleSubmit(onSubmit) }}
        methods={methods}
      >
        <FsInput name="test" i18nKey="test" maxLength={5} />
        <FsSmsVerification name={'sms'} />
        <FsButton i18nKey="submit" type="submit" />
      </FsFormProvider>
      <Grid container>
        <Grid item>
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
        <Grid item>
          <FsLineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
          />
        </Grid>
        <Grid item>
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
        <Grid item>
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
    </Box>
  );
};

export default Home;
