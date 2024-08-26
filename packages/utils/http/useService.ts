import { useMutation, UseMutationResult } from 'react-query';
import { usePageContext } from '../PageProvider/Context';

const useService = <
  TService extends Record<string, Record<string, (...args: any[]) => any>>,
  TModuleName extends keyof TService,
  TActionName extends keyof TService[TModuleName]
>(
  moduleName: TModuleName,
  actionName: TActionName
): UseMutationResult<
  ReturnType<TService[TModuleName][TActionName]>,
  unknown,
  Parameters<TService[TModuleName][TActionName]>[0] extends void
    ? void
    : Parameters<TService[TModuleName][TActionName]>[0]
> => {
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
    (
      params: Parameters<TService[TModuleName][TActionName]>[0] extends void
        ? void
        : Parameters<TService[TModuleName][TActionName]>[0]
    ) => {
      return action(params);
    }
  );
};

export default useService;
