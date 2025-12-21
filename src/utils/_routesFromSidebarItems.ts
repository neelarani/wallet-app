import type { ISidebarItem } from "@/types";

const routesFromSidebarItems = (sidebarItems: Array<ISidebarItem>) => {
  return sidebarItems.flatMap((section) =>
    section.items.map((route) => ({
      path: route.url,
      Component: route.component,
    }))
  );
};

export default routesFromSidebarItems;
