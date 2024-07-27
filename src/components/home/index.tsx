import {
  FsAccordion,
  FsAlert,
  FsButton,
  FsChip,
  FsNotifiedAlert,
  FsToggleButtonGroup,
  FsTypography,
  useModal,
} from "@fs/core";
import {
  FsAutoComplete,
  FsCheckbox,
  FsDatePicker,
  FsFormProvider,
  FsRadioGroup,
  FsRangeSlider,
  FsSelect,
  FsSwitch,
  FsTextInput,
} from "@fs/form";
import { Box } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import viteLogo from "../../../public/vite.svg";
// import reactLogo from "../../assets/react.svg";
import { default as Test1Modal, default as TestModal } from "./Test1Modal";
import Test2Modal from "./Test2Modal";

const Home = () => {
  const [value, setValue] = useState("value2");
  const [count, setCount] = useState(0);
  const { open: openTest1Modal } = useModal("test1Modal");
  const { open: openTest2Modal } = useModal("test2Modal");
  const methods = useForm();
  // const { openModal, closeModal } = useModal();
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
      <FsFormProvider
        methods={methods}
        formProps={{ onSubmit: methods.handleSubmit(onSubmit) }}
      >
        <FsNotifiedAlert i18nkey="new notification" severity="error" />
        <FsAlert i18nkey="new notification" severity="info" />
        <FsDatePicker name={"asdadadasdasdasdasd"} i18nKey={"ss"} />
        <FsChip i18nkey="Chip" />
        <FsRadioGroup
          name="radio"
          i18nKey="radiolabel"
          list={[
            { label: "11", value: "1" },
            { label: "22", value: "2" },
            { label: "33", value: "3" },
          ]}
          rules={{
            required: "پر کردن فیلد اجباری است.",
          }}
        />
        <FsSwitch name="ssss" i18nKey="lable" />
        <FsSelect
          name="assssss"
          i18nKey="ss"
          items={[{ label: "shine", value: "asdjkaojd" }]}
          rules={{
            required: "پر کردن فیلد اجباری است.",
          }}
        />
        <FsCheckbox
          name="checkbox"
          i18nKey="saasd"
          rules={{
            required: "پر کردن فیلد اجباری است.",
          }}
        />
        <FsAutoComplete
          name="autoComplete"
          options={[
            { value: "1", label: "11" },
            { value: "2", label: "22" },
            { value: "3", label: "33" },
            { value: "4", label: "44" },
          ]}
          i18nKey="sssss"
          rules={{
            required: "پر کردن فیلد اجباری است.",
          }}
        />
        <FsRangeSlider
          name="rangeSlider"
          rules={{
            required: "پر کردن فیلد اجباری است.",
          }}
        />
        <FsTextInput
          name="sdsd"
          i18nKey="dsdsds"
          rules={{
            required: "پر کردن فیلد اجباری است.",
          }}
        />
        <FsButton i18nKey="ssssssss" type="submit" />
      </FsFormProvider>
      <FsButton
        i18nKey="open test 1 modal"
        onClick={() => openTest1Modal({ userId: "12" })}
      />
      <FsButton i18nKey="open test 2 modal" onClick={openTest2Modal} />
      <Test1Modal />
      <Test2Modal />
      <TestModal />
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
      <FsTypography component="h3" i18nKey="header3" variant="h3" />
      <FsTypography component="p" i18nKey="paragraph1" variant="body1" />
      <FsTypography component="span" i18nKey="span1" variant="caption" />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
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
