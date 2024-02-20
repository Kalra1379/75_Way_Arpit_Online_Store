import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query<any[], void>({
      query: () => 'products',
    }),
    registerUser: builder.mutation<any, { email: string; password: string }>({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData, 
      }),
    }),
    loginUser: builder.mutation<any, { email: string; password: string }>({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useRegisterUserMutation, useLoginUserMutation } = productsApi;
