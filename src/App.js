import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MAIN_LAYOUT_ROUTES_URL } from "./routes/mainLayoutRouter";
import MainLayout from "stories/templates/MainLayout";
import "App.css";
import SubLayout from "stories/templates/SubLayout";
import { SUB_LAYOUT_ROUTES_URL } from "routes/subLayoutRouter";
import AccHistoryPage from "stories/pages/accHistoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {Object.values(MAIN_LAYOUT_ROUTES_URL).map((route) => {
            return (
              <Route
                key={route.name}
                path={route.path()}
                element={<route.component />}
              />
            );
          })}
        </Route>
        <Route path="/" element={<SubLayout />}>
          {Object.values(SUB_LAYOUT_ROUTES_URL).map((route) => {
            return (
              <Route
                key={route.name}
                path={route.path()}
                element={<route.component />}
              />
            );
          })}
        </Route>
        <Route path="/accHistory" element={<AccHistoryPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
