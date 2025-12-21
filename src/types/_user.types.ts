import type { IAuthProvider, IsActive, Role } from "./_common.types";

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  picture?: string;
  isDeleted?: boolean;
  isActive?: IsActive;
  isVerified?: boolean;
  role: Role;
  auths: Array<IAuthProvider>;
  wallet: string;
  createdAt: string;
}
