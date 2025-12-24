import { AppSidebar, ModeToggle } from '@/components';
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
          {/* Dashboard Top Navbar */}
          <header className="flex h-16 items-center justify-between border-b px-5 sticky top-0 bg-primary-foreground md:pr-24 lg:32">
            <SidebarTrigger />
            <ModeToggle />
          </header>

          {/* Page Content */}
          <div className="flex-1 p-4">
            <div className="container mx-auto">
              <Outlet />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
