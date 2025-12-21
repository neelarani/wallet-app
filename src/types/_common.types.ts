import type { ComponentType } from "react";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
  data: T;
}

export const Role = {
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  USER: "USER",
  AGENT: "AGENT",
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export const IsActive = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  BLOCKED: "BLOCKED",
};

export type IsActive = (typeof IsActive)[keyof typeof IsActive];

export interface IAuthProvider {
  provider: "credentials" | "google";
  providerId: string;
}

export interface ISidebarItem {
  title: string;
  items: Array<{
    title: string;
    url: string;
    component: ComponentType;
  }>;
}

export interface IUserAndAgentOverview {
  total: number;
  volume: number;
  balance: number;
}

export type JoyrideStatus = "not_started" | "running" | "finished" | "skipped";

export interface JoyrideState {
  run: boolean;
  status: JoyrideStatus;
  stepsKey: string;
}
