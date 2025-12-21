export const TransactionType = {
  TOP_UP: "TOP_UP",
  CASH_IN: "CASH_IN",
  SEND_MONEY: "SEND_MONEY",
  WITHDRAW: "WITHDRAW",
} as const;

export type TransactionType =
  (typeof TransactionType)[keyof typeof TransactionType];

export interface ITransaction {
  _id: string;
  transactionType: TransactionType;
  amount: number;
  createdAt: string;
  sender: {
    name: string;
  };
  receiver: {
    name: string;
  };
}
