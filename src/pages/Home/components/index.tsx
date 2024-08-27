import {
  FsAccordion,
  FsAlert,
  FsButton,
  FsChip,
  FsNotifiedAlert,
  FsToggleButtonGroup,
  FsTypography,
} from '@fs/core';
import {
  FsAutoComplete,
  FsCheckbox,
  FsDatePicker,
  FsDateTimePicker,
  FsRadioGroup,
  FsRangeSlider,
  FsSelect,
  FsSwitch,
  FsInput,
  FsTimePicker,
  FsUploadFile,
  FsFormProvider,
} from '@fs/form';
import { Box } from '@mui/material';
import { type MouseEvent, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import viteLogo from '../../../../public/vite.svg';
import reactLogo from '../../../assets/react.svg';

const Home = () => {
  const [value, setValue] = useState('value2');
  const methods = useForm();
  const handleChange = (
    _event: MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setValue(newAlignment);
  };
  const onSubmit = (data: any) => {
    console.log(data);
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
        <FsInput name="test" i18nKey="test" onlyNumbers />
        <FsButton i18nKey="submit" type="submit" />
      </FsFormProvider>
    </Box>
  );
};

export default Home;
