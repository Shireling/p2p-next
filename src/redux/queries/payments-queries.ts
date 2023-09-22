import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const paymentsApi = createApi({
  reducerPath: "paymentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/payments" }),
  endpoints: (builder) => ({
    getAllPayments: builder.query({
      query: () => "/",
    })
  }),
})

export const { useGetAllPaymentsQuery } = paymentsApi