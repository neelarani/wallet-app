export interface IAdminOverview {
  usersCount: number;
  txrnCount: number;
  txrnVolume: number;
}

export const IToAgentStatus = {
  PENDING: "PENDING",
  SUSPENDED: "SUSPENDED",
  APPROVED: "APPROVED",
};

export type IToAgentStatus =
  (typeof IToAgentStatus)[keyof typeof IToAgentStatus];
