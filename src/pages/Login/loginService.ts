import { AxiosInstance } from 'axios';
const notificationBaseUrl = '/fs/login';

const counterService = (instance: AxiosInstance) => ({
  login: {
    search: (filters: any) => {
      return instance.post(notificationBaseUrl, {
        params: { ...filters },
      });
    },
  },
});
export default counterService;
