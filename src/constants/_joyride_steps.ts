import type { Step } from "react-joyride";

const home: Array<Step> = [
  {
    target: "#mode-toggler-btn",
    content:
      "Switch between Dark and Light mode to change the appearance of the dashboard.",
  },
];

const admin_overview: Array<Step> = [
  {
    target: "#stats-admin-total-users",
    content: "This shows the total number of registered users in the system.",
  },
  {
    target: "#stats-admin-transaction-count",
    content:
      "Here you can see the total number of transactions processed by all users.",
  },
  {
    target: "#stats-admin-transaction-volume",
    content:
      "This represents the total value of all transactions in the system.",
  },
];

const user_overview: Array<Step> = [
  {
    target: "#stats-user-total-transaction",
    content:
      "This shows the total number of transactions you have made as a user.",
  },
  {
    target: "#stats-user-transaction-volume",
    content:
      "This represents the total value of all your personal transactions.",
  },
  {
    target: "#stats-user-balance",
    content: "Here you can see your current account balance or wallet value.",
  },
];

export const joyride_steps = { home, admin_overview, user_overview };
