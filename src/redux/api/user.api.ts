import type { IResponse, IUser } from "@/types";
import { baseApi } from "../_baseApi";

export default baseApi.injectEndpoints({
  endpoints: ($) => ({
    userInfo: $.query<IResponse<IUser>, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    register: $.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        data,
      }),
      invalidatesTags: ["USER"],
    }),
    editProfile: $.mutation({
      query: (data) => ({
        url: "/user/edit",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["USER"],
    }),
    updatePassword: $.mutation<IResponse<null>, { password: string }>({
      query: (data) => ({
        url: "/user/update-password",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["USER"],
    }),
    requestForAgent: $.mutation<IResponse<null>, void>({
      query: () => ({
        url: "/user/request-for-agent",
        method: "POST",
      }),
    }),
  }),
});
