import type { ISidebarItem } from "@/types";
import adminSidebarItems from "./_admin.sidebar";
import commonSidebar from "./_common.sidebar";

const superAdminSidebar: Array<ISidebarItem> = [
  ...commonSidebar,
  ...adminSidebarItems,
];

export default superAdminSidebar;
