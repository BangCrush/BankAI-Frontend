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
import VoiceServiceComp from "stories/organisms/voiceServiceComp";
import { AutoPlayToggle } from "stories/organisms/autoPlayToggle";

export const VoiceServiceStateContext = React.createContext();
export const VideoStateContext = React.createContext();

export const AIServicePageList = [
  "/main",
  "/transferAccount",
  "/password",
  "/transfer",
  "/deposit",
  "/productMain"
];

function MainApp() {
  const location = useLocation();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [src, setSrc] = useState(null);

  const [result, setResult] = useState(null);
  const [options, setOptions] = useState([]);
  const [type, setType] = useState("");

  // autoPlayToggleStatus
  const [autoPlay, setAutoPlay] = useState(() => {
    const savedAutoPlay = localStorage.getItem("autoPlay");
    return savedAutoPlay === "true";
  });

  // autoPlayToggleHandler
  const handleAutoPlay = (event, newAutoPlay) => {
    setAutoPlay(newAutoPlay);
    localStorage.setItem("autoPlay", newAutoPlay);
  };

  const [isVideoPlaying, setIsVideoPlaying] = useState(0);

  const [isIncludeAIServicePage, setIsIncludeAIServicePage] = useState(() => {
    return AIServicePageList.includes(location.pathname);
  });

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

    // 현재 페이지의 AI 음성 서비스 포함 여부 갱신
    setIsIncludeAIServicePage(() =>
      AIServicePageList.includes(location.pathname),
    );

    // 현재 페이지가 AI 음성 서비스를 포함하지 않으면 video의 src을 초기화하여 영상 재생을 중지
    if (!AIServicePageList.includes(location.pathname)) setSrc("");
  }, [location.pathname]);

  return isDataLoaded ? (
    <VideoStateContext.Provider value={setSrc}>
      <VoiceServiceStateContext.Provider
        value={{ result,setResult, setOptions, setType }}
      >
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

        {isIncludeAIServicePage ? (
          <>
            <VideoComp
              isVideoPlaying={isVideoPlaying}
              setIsVideoPlaying={setIsVideoPlaying}
              src={src}
              classes={"absolute top-0 left-900 min-w-400"}
              autoPlay={autoPlay}
            />

            <VoiceServiceComp
              isVideoPlaying={isVideoPlaying}
              setResult={setResult}
              options={options}
              type={type}
            />
          </>
        ) : (
          <div className="absolute top-0 left-900 min-w-400">
            <img src="/assets/sleeping.png" width="270px" className="mt-90" />
          </div>
        )}

        <AutoPlayToggle autoPlay={autoPlay} handleAutoPlay={handleAutoPlay} />
      </VoiceServiceStateContext.Provider>
    </VideoStateContext.Provider>
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
