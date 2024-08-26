import { type AxiosInstance } from 'axios';
const notificationBaseUrl = '/taxpayer/rest/notification';

const counterService = (instance: AxiosInstance) => ({
  counter: {},

  notification: {
    search: (filters: any) => {
      return instance.get(`${notificationBaseUrl}/search`, {
        params: { ...filters },
      });
    },
    setAsRead: (id: string) => {
      return instance.get(`${notificationBaseUrl}/set-as-read/${id}`);
    },
  },
});
export default counterService;
