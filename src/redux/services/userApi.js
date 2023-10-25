import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: 'user',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost/api",
    credentials: "include",
  }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (data) => ({
        url: "/clienteAuth/login",
        method: "POST",
        body: data,
      }),
    }),

    postRegister: builder.mutation({
      query: (data) => ({
        url: "/clienteAuth/register",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    getProfile: builder.query({
      query: () => "/clienteAuth/profile",
      providesTags: ["Profile"],
    }),

    getVerify: builder.query({
      query: () => "/clienteAuth/verify",
    }),
  }),
});

export const {
  usePostLoginMutation,
  usePostRegisterMutation,
  useGetProfileQuery,
  useGetVerifyQuery
} = userApi;
