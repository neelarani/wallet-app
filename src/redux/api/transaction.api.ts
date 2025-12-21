import type { IResponse, ITransaction } from "@/types";
import { baseApi } from "../_baseApi";

export default baseApi.injectEndpoints({
  endpoints: ($) => ({
    depositMoney: $.mutation<IResponse<null>, { amount: number }>({
      query: (data) => ({
        url: "/transaction/top-up",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    withdrawMoney: $.mutation({
      query: (data) => ({
        url: "/transaction/withdraw",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    sendMoney: $.mutation({
      query: (data) => ({
        url: "/transaction/send-money",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    cashIn: $.mutation({
      query: (data) => ({
        url: "/transaction/cash-in",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    cashOut: $.mutation({
      query: (data) => ({
        url: "/transaction/cash-out",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    transactionHIstory: $.query<IResponse<Array<ITransaction>>, string>({
      query: (query) => ({
        url: `/transaction/transaction-history?${query}`,
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
  }),
});
