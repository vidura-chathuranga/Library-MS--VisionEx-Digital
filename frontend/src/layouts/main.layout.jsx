import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
const MainLayout = () => {
  return (
    <main className="container">
      <Outlet />
      <Toaster />
    </main>
  );
};

export default MainLayout;
