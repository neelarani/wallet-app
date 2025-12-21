import type { ISidebarItem } from "@/types";
import commonSidebar from "./_common.sidebar";
import * as component from "@/components";

const userSidebarItems: Array<ISidebarItem> = [
  ...commonSidebar,
  {
    title: "WALLET",
    items: [
      {
        title: "Overview",
        url: "overview",
        component: component.UserOverview,
      },
      {
        title: "DEPOSIT MONEY",
        url: "deposit-money",
        component: component.DepositMoney,
      },
      {
        title: "WITHDRAW MONEY",
        url: "withdraw-money",
        component: component.WithdrawMoney,
      },
      {
        title: "SEND MONEY",
        url: "send-money",
        component: component.SendMoney,
      },
      {
        title: "TRANSACTION HISTORY",
        url: "transaction-history",
        component: component.TransactionHistory,
      },
    ],
  },
  {
    title: "OTHERS ACTIONS",
    items: [
      {
        title: "APPLY FOR AGENT",
        url: "apply-for-agent",
        component: component.RequestForAgent,
      },
    ],
  },
];

export default userSidebarItems;
