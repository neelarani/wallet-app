import { baseApi } from "../_baseApi";

export default baseApi.injectEndpoints({
  endpoints: ($) => ({
    login: $.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
      invalidatesTags: ["USER"],
    }),
    logout: $.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "DELETE",
      }),
    }),
    getVerifyURL: $.mutation({
      query: (data) => ({
        url: "/auth/get-verify-token",
        method: "POST",
        data,
      }),
    }),
  }),
});
