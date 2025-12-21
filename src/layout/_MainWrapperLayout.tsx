import { Joyride } from "@/components";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const MainWrapperLayout = () => {
  return (
    <div>
      <Outlet />
      <>
        <Toaster />
        <Joyride />
      </>
    </div>
  );
};

export default MainWrapperLayout;
