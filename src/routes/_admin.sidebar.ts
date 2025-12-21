import type { ISidebarItem } from "@/types";
import commonSidebar from "./_common.sidebar";
import * as component from "@/components";

const adminSidebarItems: Array<ISidebarItem> = [
  ...commonSidebar,
  {
    title: "MANAGE",
    items: [
      {
        title: "OVERVIEW",
        url: "overview",
        component: component.AdminOverView,
      },
      {
        title: "MANAGE USERS",
        url: "manage-users",
        component: component.ManageUsers,
      },
      {
        title: "MANAGE AGENT",
        url: "manage-agent",
        component: component.ManageAgent,
      },
      {
        title: "ALL TRANSACTION HISTORY",
        url: "transaction-history",
        component: component.TransactionHistory,
      },
    ],
  },
  {
    title: "OTHERS ACTIONS",
    items: [
      {
        title: "APPLICATIONS FOR AGENT",
        url: "application-for-agent",
        component: component.ApplicationsForAgent,
      },
    ],
  },
];

export default adminSidebarItems;
