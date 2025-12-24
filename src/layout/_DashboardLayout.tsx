import { AppSidebar, NavMenu } from '@/components';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Helmet } from 'react-helmet-async';

import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Wallet APP</title>
        <meta
          name="description"
          content="Access your Wallet APP dashboard to manage your balance, track transactions, and view account insights securely and efficiently."
        />
      </Helmet>
      <SidebarProvider defaultOpen>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 sticky top-0 bg-primary-foreground">
            <SidebarTrigger className="-ml-1" />
            <NavMenu />
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
