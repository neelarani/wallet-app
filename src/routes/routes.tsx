import { createBrowserRouter } from "react-router-dom";
import { Role } from "@/types";
import { routesFromSidebarItems } from "@/utils";
import { DashboardToRole, UpdateProfile } from "@/components";
import * as hoc from "@/hoc";
import * as layout from "@/layout";
import * as pages from "@/pages";
import * as routes from "@/routes";

const router = createBrowserRouter([
  {
    Component: layout.MainWrapperLayout,
    children: [
      {
        path: "/",
        Component: layout.RootLayout,
        children: [
          {
            index: true,
            Component: pages.Home,
          },
          {
            path: "/about",
            Component: pages.About,
          },
          {
            path: "/features",
            Component: pages.Features,
          },
          {
            path: "/contact",
            Component: pages.Contact,
          },
          {
            path: "/faq",
            Component: pages.FAQ,
          },
          {
            path: "/login",
            Component: hoc.withPreventAccessInAuth(pages.Login),
          },
          {
            path: "/register",
            Component: hoc.withPreventAccessInAuth(pages.Register),
          },
          {
            path: "/verify",
            Component: pages.VerifyUser,
          },
          {
            path: "/unauthorized",
            Component: pages.Unauthorized,
          },
          {
            path: "*",
            Component: pages.NotFound,
          },
        ],
      },
      {
        path: "/dashboard",
        children: [
          {
            index: true,
            Component: DashboardToRole,
          },
          {
            path: "user",
            Component: hoc.withAuth(layout.DashboardLayout, Role.USER),
            children: [
              { index: true, Component: UpdateProfile },
              ...routesFromSidebarItems(routes.userSideBarItems),
            ],
          },
          {
            path: "admin",
            Component: hoc.withAuth(layout.DashboardLayout, Role.ADMIN),
            children: [
              { index: true, Component: UpdateProfile },
              ...routesFromSidebarItems(routes.adminSidebarItems),
            ],
          },
          {
            path: "super_admin",
            Component: hoc.withAuth(layout.DashboardLayout, Role.SUPER_ADMIN),
            children: [
              { index: true, Component: UpdateProfile },
              ...routesFromSidebarItems(routes.superAdminSidebar),
            ],
          },
          {
            path: "agent",
            Component: hoc.withAuth(layout.DashboardLayout, Role.AGENT),
            children: [
              { index: true, Component: UpdateProfile },
              ...routesFromSidebarItems(routes.agentSidebarItems),
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
