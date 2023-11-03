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

    putUpdate: builder.mutation({
      query: (data) => ({
        url: "/cliente/",
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    postSendOTP: builder.mutation({
      query: (data) => ({
        url: "/clienteAuth/sendOtp",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),


    postResendOTP: builder.mutation({
      query: (data) => ({
        url: "clienteAuth/resendOtp",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),


  }),
});

export const {
  usePostLoginMutation,
  usePostRegisterMutation,
  useGetProfileQuery,
  useGetVerifyQuery,
  usePutUpdateMutation,
  usePostSendOTPMutation,
  usePostResendOTPMutation
} = userApi;
