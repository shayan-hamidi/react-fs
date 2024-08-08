import { createBaseApi } from '@fs/http';

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface CreateItemPayload {
  name: string;
  description: string;
  price: number;
}

export interface UpdateItemPayload {
  id: number;
  name?: string;
  description?: string;
  price?: number;
}

export const homeApi = createBaseApi('homeApi').injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query<Item[], void>({
      query: () => ({ url: '/items', method: 'GET' }),
    }),
    getItemById: builder.query<Item, number>({
      query: (id) => ({ url: `/items/${id}`, method: 'GET' }),
    }),
    createItem: builder.mutation<Item, CreateItemPayload>({
      query: (newItem) => ({
        url: '/items',
        method: 'POST',
        body: newItem,
      }),
    }),
    updateItem: builder.mutation<Item, UpdateItemPayload>({
      query: ({ id, ...updatedItem }) => ({
        url: `/items/${id}`,
        method: 'PUT',
        body: updatedItem,
      }),
    }),
    deleteItem: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `/items/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetItemsQuery,
  useGetItemByIdQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = homeApi;
