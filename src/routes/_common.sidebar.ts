import * as component from "@/components";
import type { ISidebarItem } from "@/types";

const commonSidebar: Array<ISidebarItem> = [
  {
    title: "MANGE PROFILE",
    items: [
      {
        title: "EDIT PROFILE",
        url: "edit-profile",
        component: component.UpdateProfile,
      },
      {
        title: "CHANGE PASSWORD",
        url: "change-password",
        component: component.EditPassword,
      },
    ],
  },
];

export default commonSidebar;
