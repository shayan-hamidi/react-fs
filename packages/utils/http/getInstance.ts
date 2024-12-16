import axios from 'axios';
import { showAlert } from '../../core/Organ/Alert/AlertService';

export type InstanceConfigType = {
  baseUrl: string;
};

export function getInstance() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const instance = axios.create({
    baseURL: '/baseUrl',
    cancelToken: Boolean(source) ? source.token : undefined,
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'fa-Ir',
      lang: 'FA',
    },
    maxRedirects: 0,
  });
  instance.interceptors.response.use(undefined, (err) => {
    if (err.status === 401) {
      window.location.href = '/login';
    } else if (err.status === 422) {
      showAlert(err?.response?.data?.data?.ValidationErrors[0], 2000, {
        severity: 'error',
      });
      throw err;
    } else if (err.status >= 400 && err.status < 500) {
      showAlert(err?.response?.data?.data?.GeneralError, 2000, {
        severity: 'error',
      });
      throw err;
    } else if (err.status >= 500) {
      showAlert('مشکلی در سرور رخ داده است', 2000, {
        severity: 'error',
      });
      throw err;
    }
  });
  return { instance, source, CancelToken };
}
