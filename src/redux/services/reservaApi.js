import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reservaApi = createApi({
  reducerPath: 'reserva',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost/api",
    credentials: "include",
  }),
  tagTypes: ["Reserva"],
  endpoints: (builder) => ({
    

  }),
});

export const {
  
} = reservaApi;
