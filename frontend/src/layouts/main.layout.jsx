import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import NavigationBar from "@/components/shared/NavigationBar";
const MainLayout = () => {
  return (
    <main className="container">
      <NavigationBar />
      <Outlet />
      <Toaster />
    </main>
  );
};

export default MainLayout;
