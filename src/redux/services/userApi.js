import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: 'user',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API,
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
        url: "/clienteAuth/resendOtp",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    postForgetPassword: builder.mutation({
      query: (data) => ({
        url: "clienteAuth/forgetPassword",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    postContactForm: builder.mutation({
      query: (data) => ({
        url: "clienteAuth/contactForm",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    putResetPassword: builder.mutation({
      query: (data) => ({
        url: "clienteAuth/resetPassword",
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    postLogout: builder.mutation({
      query: () => ({
        url: "/clienteAuth/logout",
        method: "POST",
        credentials: "include",
      }),
    }),

    postSendOTPUpdateEmail: builder.mutation({
      query: (data) => ({
        url: "clienteAuth/sendOtpUpdateEmail",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    putUpdateEmail: builder.mutation({
      query: (data) => ({
        url: "clienteAuth/updateEmail",
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    putUpdatePassword: builder.mutation({
      query: (data) => ({
        url: "clienteAuth/updatePassword",
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    postReservaMesas: builder.mutation({
      query: (data) => ({
        url: "reserva/mesas",
        method: "POST",
        body: data,
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
  usePostResendOTPMutation,
  usePostForgetPasswordMutation,
  usePostContactFormMutation,
  usePutResetPasswordMutation,
  usePostLogoutMutation,
  usePutUpdateEmailMutation,
  usePostSendOTPUpdateEmailMutation,
  usePutUpdatePasswordMutation,

  usePostReservaMesasMutation
} = userApi;
