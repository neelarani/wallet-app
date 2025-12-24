import { Joyride } from '@/components';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { HelmetProvider } from 'react-helmet-async';

const MainWrapperLayout = () => {
  return (
    <HelmetProvider>
      <div>
        <Outlet />
        <>
          <Toaster />

          <Joyride />
        </>
      </div>
    </HelmetProvider>
  );
};

export default MainWrapperLayout;
