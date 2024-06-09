import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-[100vh] w-640 relative flex flex-col bg-main-bg">
      <div className="px-54 pt-30 w-full flex flex-col flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
