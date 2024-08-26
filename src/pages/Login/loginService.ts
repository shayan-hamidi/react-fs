import { type AxiosInstance } from 'axios';

const listBaseUrl = 'https://jsonplaceholder.typicode.com/posts';

const loginService = (instance: AxiosInstance) => ({
  login: {
    getList: () => {
      return instance.get(listBaseUrl);
    },
  },
});

export type LoginServiceActions = ReturnType<typeof loginService>;

export default loginService;
