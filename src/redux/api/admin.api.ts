import type { IResponse, IsActive, IUser } from "@/types";
import { baseApi } from "../_baseApi";

export default baseApi.injectEndpoints({
  endpoints: ($) => ({
    retrieveAllUsers: $.query<IResponse<Array<IUser>>, string>({
      query: (query) => ({
        url: `/admin/all-users?${query}`,
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
    blockAndUnblockUser: $.mutation<
      IResponse<Array<IUser>>,
      { userId: string; isActive: IsActive }
    >({
      query: (data) => ({
        url: `/admin/block-unblock`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    retrieveAllAgentApplication: $.query<
      IResponse<
        Array<{
          _id: string;
          user: IUser;
          status: string;
        }>
      >,
      string
    >({
      query: (query) => ({
        url: `/admin/retrieve-all-application?${query}`,
        method: "GET",
      }),
      providesTags: ["APPLICATION"],
    }),
    updateToAgentStatus: $.mutation({
      query: (data) => ({
        url: "/admin/update-to-agent-status",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["APPLICATION"],
    }),
  }),
});
