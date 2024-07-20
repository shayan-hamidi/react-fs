import { createBaseApi } from '@fs/http';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { homeApi } from '../pages/Home/homeService';

const baseApi = createBaseApi('baseApi');

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(homeApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
