import { Footer, Header } from "@/components";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="grow-1 container mx-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
