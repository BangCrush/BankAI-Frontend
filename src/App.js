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
import AutoPlaySwitch from "stories/organisms/autoPlaySwtich";
import axios from "axios";

export const VoiceServiceStateContext = React.createContext();
export const VideoStateContext = React.createContext();
export const AudioStateContext = React.createContext();

export const AIServicePageList = [
  "/main",
  "/transferAccount",
  "/password",
  "/transfer",
  "/deposit",
  "/productMain",
  "/product",
];

function MainApp() {
  const location = useLocation();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [src, setSrc] = useState(null);
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [options, setOptions] = useState([]);
  const [type, setType] = useState("");

  const [audio, setAudio] = useState(null);
  const [repeat, setRepeat] = useState(false);
  const [callStack,setCallStack] = useState(0);

  const [autoPlay, setAutoPlay] = useState(() => {
    const savedAutoPlay = localStorage.getItem("autoPlay");
    return savedAutoPlay === "true";
  });

  useEffect(() => {
    if (audio) {
      audio.onended = function () {
        console.log('????');
        setRepeat(false);
      };
      if (autoPlay) {
        if(src === "/assets/noVoice.mov")audio.play();
      }
    }
  }, [audio]);

  useEffect(() => {
    console.log(text);
    if (text === "") return;
    if (src !== "/assets/noVoice.mov") return;
    convertTextToSpeech();
  }, [text]);

  useEffect(() => {
    if (!autoPlay) {
      if (audio) {
        audio.pause();
        setRepeat(false);
      }
    } else {
      if (audio && src === "/assets/noVoice.mov") {
        audio.play();
      }
    }
  }, [autoPlay]);

  // autoPlayToggleHandler
  const handleAutoPlay = (event, newAutoPlay) => {
    setAutoPlay(newAutoPlay);
    setIsVideoPlaying(0);
    localStorage.setItem("autoPlay", newAutoPlay);
  };

  useEffect(() => {
    if (autoPlay) {
      setIsVideoPlaying(0);
    }
  }, [autoPlay]);

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

  // TTS 함수
  const convertTextToSpeech = async () => {
    try {
      const response = await axios.post(
        "/api/tts",
        { text },
        {
          responseType: "blob",
        },
      );

      const blob = response.data;
      const audioUrl = URL.createObjectURL(blob);
      setAudio(new Audio(audioUrl));
    } catch (error) {
      console.error("TTS 요청 실패", error);
    }
  };

  return isDataLoaded ? (
    <VideoStateContext.Provider
      value={{ setSrc, setRepeat, setAutoPlay, setIsVideoPlaying }}
    >
      <VoiceServiceStateContext.Provider
        value={{ result, setResult,callStack,setCallStack, setOptions, setType }}
      >
        <AudioStateContext.Provider value={{ setText, setAudio }}>
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
          <div className="absolute top-0 left-800 flex flex-col justify-center items-center min-w-400">
            <div className="mt-90">
              <AutoPlaySwitch autoPlay={autoPlay} setAutoPlay={setAutoPlay} />
            </div>

            {isIncludeAIServicePage && autoPlay ? (
              <>
                <VideoComp
                  isVideoPlaying={isVideoPlaying}
                  setIsVideoPlaying={setIsVideoPlaying}
                  src={src}
                  autoPlay={autoPlay}
                  repeat={repeat}
                />
                <VoiceServiceComp
                  isVideoPlaying={isVideoPlaying}
                  setResult={setResult}
                  callStack={callStack}
                  setCallStack={setCallStack}
                  options={options}
                  type={type}
                  autoPlay={autoPlay}
                />
              </>
            ) : (
              <div>
                <img src="/assets/off.png" width="270px" className="mt-20" />
              </div>
            )}
          </div>
        </AudioStateContext.Provider>
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
