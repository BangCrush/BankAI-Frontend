import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MAIN_LAYOUT_ROUTES_URL } from "./routes/mainLayoutRouter";
import MainLayout from "stories/templates/MainLayout";
import "App.css";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
