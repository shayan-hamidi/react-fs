import axios from 'axios';

export type InstanceConfigType = {
  baseUrl: string;
};

export function getInstance() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const instance = axios.create({
    baseURL: 'Asdkajodjaosdo',
    cancelToken: Boolean(source) ? source.token : undefined,
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      lang: 'FA',
    },
    maxRedirects: 0,
  });

  return { instance, source, CancelToken };
}
