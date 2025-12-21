import * as routes from "@/routes";
import type { Role } from "@/types";

const getSidebarItemsWithRole = (userRole: Role) => {
  switch (userRole) {
    case "USER":
      return [...routes.userSideBarItems];
    case "AGENT":
      return [...routes.agentSidebarItems];
    case "ADMIN":
    case "SUPER_ADMIN":
      return [...routes.adminSidebarItems];
    default:
      return [];
  }
};

export default getSidebarItemsWithRole;
