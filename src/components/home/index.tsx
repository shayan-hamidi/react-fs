import {
  FsAccordion,
  FsAlert,
  FsButton,
  FsChip,
  FsNotifiedAlert,
  FsToggleButtonGroup,
} from "@fs/core";
import {
  FsAutoComplete,
  FsCheckbox,
  FsRadioGroup,
  FsRangeSlider,
  FsSelect,
  FsSwitch,
  FsTextInput,
} from "@fs/form";
import { Box } from "@mui/material";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import viteLogo from "../../../public/vite.svg";
import reactLogo from "../../assets/react.svg";

const Home = () => {
  const [value, setValue] = useState("value2");
  const [count, setCount] = useState(0);
  const methods = useForm();
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setValue(newAlignment);
  };
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FsNotifiedAlert i18nkey="new notification" severity="error" />
          <FsAlert i18nkey="new notification" severity="info" />
          <FsChip i18nkey="Chip" />
          <FsRadioGroup
            name="radio"
            i18nKey="radiolabel"
            list={[
              { label: "11", value: "1" },
              { label: "22", value: "2" },
              { label: "33", value: "3" },
            ]}
          />
          <FsSwitch name="ssss" i18nKey="lable" />
          <FsSelect
            name="assssss"
            i18nKey="ss"
            items={[{ label: "shine", value: "asdjkaojd" }]}
          />
          <FsCheckbox name="checkbox" i18nKey="saasd" />
          <FsAutoComplete
            name="autoComplete"
            options={[
              { value: "1", label: "11" },
              { value: "2", label: "22" },
              { value: "3", label: "33" },
              { value: "4", label: "44" },
            ]}
            i18nKey="sssss"
          />
          <FsRangeSlider name="rangeSlider" />
          <FsTextInput name="sdsd" i18nKey="dsdsds" />
          <FsButton i18nKey="ssssssss" type="submit" />
        </form>
      </FormProvider>
      <FsAccordion
        children={<Box sx={{ background: "Accordion detials" }}>sssss</Box>}
        titleKey={"Accordion Title"}
      ></FsAccordion>
      <FsButton i18nKey="tooltipppp" tooltipProps={{ i18nKey: "ssss" }} />
      <FsToggleButtonGroup
        color="primary"
        value={value}
        exclusive
        onChange={handleChange}
        items={[
          { label: "label", value: "value" },
          { label: "label2", value: "value2" },
        ]}
      />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default Home;
