import { useMutation, UseMutationResult } from 'react-query';
import { usePageContext } from '../PageProvider/Context';

// Define the generic types for the service hook
type ActionType<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : never;

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
  Parameters<TService[TModuleName][TActionName]>[0]
> => {
  const { httpService } = usePageContext();

  if (!httpService || !httpService[moduleName]) {
    throw new Error(`Service for module ${String(moduleName)} is not defined.`);
  }

  const action = httpService[moduleName][actionName];
  if (!action) {
    throw new Error(
      `Action ${String(actionName)} not found in module ${String(moduleName)}.`
    );
  }

  return useMutation(
    (params: Parameters<TService[TModuleName][TActionName]>[0]) => {
      return action(params);
    }
  );
};

export default useService;
