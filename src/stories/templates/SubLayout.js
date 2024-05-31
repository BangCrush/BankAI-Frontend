import { Outlet } from "react-router-dom";

const SubLayout = () => {
  return (
    <div className="min-h-[100vh] relative flex flex-col">
      <div className="max-w-[1440px] px-40 pt-30 w-full flex flex-col flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default SubLayout;
