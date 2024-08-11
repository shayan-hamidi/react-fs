import { createBaseApi } from '@fs/http';

export const homeApi = createBaseApi('homeApi').injectEndpoints({
  endpoints: (builder) => ({
    getHomeData: builder.query<unknown, void>({
      query: () => ({ url: '/home', method: 'GET' }),
    }),
  }),
});

export const { useGetHomeDataQuery } = homeApi;
