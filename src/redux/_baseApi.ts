import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosInstance } from "@/lib";
import type { AxiosError } from "axios";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url: url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  },

  endpoints: () => ({}),
  tagTypes: ["USER", "TRANSACTION", "APPLICATION"],
});
