import type { IAdminOverview, IResponse, IUserAndAgentOverview } from "@/types";
import { baseApi } from "../_baseApi";

export default baseApi.injectEndpoints({
  endpoints: ($) => ({
    adminOverView: $.query<IResponse<IAdminOverview>, void>({
      query: () => ({
        url: "/stats/admin-overview",
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
    userOverView: $.query<IResponse<IUserAndAgentOverview>, void>({
      query: () => ({
        url: "/stats/user-overview",
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
    agentOverView: $.query<IResponse<IUserAndAgentOverview>, void>({
      query: () => ({
        url: "/stats/agent-overview",
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
  }),
});
