import {
  createApi,
  BaseQueryFn,
  FetchBaseQueryError,
  CombinedState,
} from '@reduxjs/toolkit/query/react';
import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from 'axios';

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: '/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = new AxiosHeaders(config.headers);
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          try {
            const { data } = await axios.post('/api/auth/refresh-token', {
              token: refreshToken,
            });
            localStorage.setItem('token', data.token);
            originalRequest.headers = {
              ...originalRequest.headers,
              Authorization: `Bearer ${data.token}`,
            };
            return instance(originalRequest);
          } catch (err) {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            window.location.href = '/login';
          }
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const baseQueryWithAxios =
  (
    axiosInstance: AxiosInstance
  ): BaseQueryFn<
    { url: string; method?: string; body?: unknown; params?: unknown } | string,
    unknown,
    FetchBaseQueryError
  > =>
  async (args) => {
    const {
      url,
      method = 'GET',
      body,
      params,
    } = typeof args === 'string' ? { url: args } : args;

    try {
      const result = await axiosInstance({
        url,
        method,
        data: body,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status ?? 500,
          data: err.response?.data ?? err.message,
        },
      };
    }
  };

export const createBaseApi = (reducerPath: string) => {
  const axiosInstance = createAxiosInstance();

  return createApi({
    reducerPath,
    baseQuery: baseQueryWithAxios(axiosInstance),
    endpoints: () => ({}),
    extractRehydrationInfo(action, { reducerPath }) {
      if (action.type === 'persist/REHYDRATE') {
        return (
          action.payload as {
            [key: string]: CombinedState<Record<string, never>, never, 'api'>;
          }
        )[reducerPath];
      }
    },
  });
};
