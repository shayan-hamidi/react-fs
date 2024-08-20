import { AxiosInstance } from "axios";
const notificationBaseUrl = "https://api.quotable.io/random";

const loginService = (instance: AxiosInstance) => ({
  login: {
    search: (filters: any) => {
      return instance.get(notificationBaseUrl, {
        params: { ...filters },
      });
    },
  },
});

export default loginService;
