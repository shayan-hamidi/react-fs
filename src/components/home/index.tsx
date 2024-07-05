import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../../public/vite.svg";
import { FsButton } from "@fs/core";
import { FsSelect } from "@fs/form";
import { FormProvider, useForm } from "react-hook-form";

const Home = () => {
  const [count, setCount] = useState(0);
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FsSelect name="ss" selectProps={{}} />
        </form>
      </FormProvider>
      <FsButton i18nKey="tooltipppp" tooltipProps={{ i18nKey: "ssss" }} />
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
