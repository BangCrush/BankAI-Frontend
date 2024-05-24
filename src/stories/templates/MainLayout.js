import { Outlet } from "react-router-dom";
// import { HeaderContainer } from "stories/organisms/Header/HeaderContainer";

const MainLayout = () => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      {/* <HeaderContainer /> */}

      <div className="max-w-[1440px] px-54 pt-30 w-full flex flex-col flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
