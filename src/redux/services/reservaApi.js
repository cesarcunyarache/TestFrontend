import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reservaApi = createApi({
  reducerPath: 'reservas',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API,
    credentials: "include",
  }),
  tagTypes: ["Reservas"],
  endpoints: (builder) => ({

    postMeseroForReserva: builder.mutation({
      query: (data) => ({
        url: "mesero/reserva",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    postReservaMesas: builder.mutation({
      query: (data) => ({
        url: "reserva/mesas",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    postCreateReserva: builder.mutation({
      query: (data) => ({
        url: "reserva/",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

  }),
});

export const {
  usePostReservaMesasMutation,
  usePostCreateReservaMutation,
  usePostMeseroForReservaMutation,
} = reservaApi;
