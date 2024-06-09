import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { MAIN_LAYOUT_ROUTES_URL } from "./routes/mainLayoutRouter";
import MainLayout from "stories/templates/MainLayout";
import "App.css";
import SubLayout from "stories/templates/SubLayout";
import { SUB_LAYOUT_ROUTES_URL } from "routes/subLayoutRouter";
import AccHistoryPage from "stories/pages/accHistoryPage";
import { NO_LAYOUT_ROUTES_URL } from "routes/noLayoutRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { useEffect, useState } from "react";
import { onSilentRefresh } from "api/userApi";
import VideoComp from "stories/organisms/videoComp";
import VoicdServiceComp from "stories/organisms/voiceServiceComp";

export const VoiceServiceStateContext = React.createContext();
export const VideoStateContext = React.createContext();

function MainApp() {
  const location = useLocation();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [src, setSrc] = useState(null);

  const [result, setResult] = useState(null);
  const [options, setOptions] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    const excludedPaths = [
      "/",
      "/front",
      "/login",
      "/identify",
      "/join",
      "/findPwd",
      "/lostPwd",
    ];

    if (!excludedPaths.includes(location.pathname)) {
      const fetchData = async () => {
        await onSilentRefresh();
        setIsDataLoaded(true);
      };

      fetchData();
    } else {
      setIsDataLoaded(true);
    }
  }, [location.pathname]);

  return isDataLoaded ? (
    <VoiceServiceStateContext.Provider value={{ result, setOptions, setType }}>
      <VideoStateContext.Provider value={setSrc}>
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
          <Route path="/">
            {Object.values(NO_LAYOUT_ROUTES_URL).map((route) => {
              return (
                <Route
                  key={route.name}
                  path={route.path()}
                  element={<route.component />}
                />
              );
            })}
          </Route>
          <Route path="/accHistory" element={<AccHistoryPage />}></Route>
        </Routes>
        <VideoComp src={src} classes={"absolute top-0 left-900 min-w-400 "} />
        <VoicdServiceComp setResult={setResult} options={options} type={type} />
      </VideoStateContext.Provider>
    </VoiceServiceStateContext.Provider>
  ) : null;
}

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        refetchOnMount: "always",
        retryOnMount: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
