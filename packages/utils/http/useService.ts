import { useMutation, UseMutationResult } from 'react-query';
import { usePageContext } from '../PageProvider/Context';
import type { AxiosResponse } from 'axios';

type ExtractPromiseAndAxios<T> = T extends Promise<AxiosResponse<infer S, any>>
  ? S
  : T;

const useService = <
  TService extends Record<string, Record<string, (...args: any[]) => any>>,
  TModuleName extends keyof TService,
  TActionName extends keyof TService[TModuleName]
>(
  moduleName: TModuleName,
  actionName: TActionName
) => {
  const { httpService } = usePageContext();

  const typedHttpService = httpService as TService | null;

  if (!typedHttpService || !typedHttpService[moduleName]) {
    throw new Error(`Service for module ${String(moduleName)} is not defined.`);
  }

  const action = typedHttpService[moduleName][actionName];
  if (!action) {
    throw new Error(
      `Action ${String(actionName)} not found in module ${String(moduleName)}.`
    );
  }

  return useMutation(
    async (
      params: Parameters<TService[TModuleName][TActionName]>[0] extends void
        ? void
        : Parameters<TService[TModuleName][TActionName]>[0]
    ) => {
      const givenData = await action(params);
      return givenData?.data?.data;
    }
  ) as UseMutationResult<
    ExtractPromiseAndAxios<ReturnType<TService[TModuleName][TActionName]>>,
    unknown,
    ExtractPromiseAndAxios<
      Parameters<TService[TModuleName][TActionName]>[0] extends void
        ? void
        : Parameters<TService[TModuleName][TActionName]>[0]
    >
  >;
};

export default useService;
