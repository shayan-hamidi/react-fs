import { AxiosInstance } from "axios";
const notificationBaseUrl = "/taxpayer/rest/notification";

const homeService = (instance: AxiosInstance) => ({
  home: {},

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
export default homeService;
