import type { ISidebarItem } from "@/types";
import commonSidebar from "./_common.sidebar";
import * as component from "@/components";

const agentSidebarItems: Array<ISidebarItem> = [
  ...commonSidebar,
  {
    title: "MANAGE WALLET",
    items: [
      {
        title: "OVERVIEW",
        url: "overview",
        component: component.AgentOverview,
      },
      {
        title: "DEPOSIT MONEY",
        url: "deposit-money",
        component: component.DepositMoney,
      },

      {
        title: "CASH IN",
        url: "cash-in",
        component: component.CashIn,
      },
      {
        title: "TRANSACTION HISTORY",
        url: "transaction-history",
        component: component.TransactionHistory,
      },
    ],
  },
];

export default agentSidebarItems;
