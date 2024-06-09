import React, { memo, useEffect, useRef, useState } from "react";
import Input from "stories/atoms/input";


function VideoComp({src,classes}) {
    const [nowPlaying, setNowPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [showControl, setShowControl] = useState(false);
    const ref = useRef(null);

  
    const totalTime = (ref && ref.current && ref.current.duration) || 0;
    const videoElement = ref && ref.current;
  
    const startTime = Math.floor(currentTime);
  
    // 동영상 시간 업데이트 함수
    const addTimeUpdate = () => {
      const observedVideoElement = ref && ref.current;
      if (observedVideoElement) {
        observedVideoElement.addEventListener("timeupdate", function() {
          setCurrentTime(observedVideoElement.currentTime);
        });
        // 컴포넌트가 처음 마운트 될 때 동영상 시작 할지 말지 여부 (여기서는 시작되게 했음)
        setNowPlaying(true);
        observedVideoElement.play();
      }
    };
  
    useEffect(() => {
      console.log(src);
      addTimeUpdate();
    }, [src]);
  
    // progress 이동시켰을때 실행되는 함수
    const onProgressChange = (percent) => {
      if (!showControl) {
        setShowControl(true);
      }
  
      if (videoElement) {
        const playingTime = videoElement.duration * (percent / 100);
  
        setCurrentTime(playingTime);
      }
    };
  
    // play icon 클릭했을떄 실행되는 함수
    const onPlayIconClick = () => {
      if (videoElement) {
        if (nowPlaying) {
          setNowPlaying(false);
          videoElement.pause();
        } else {
          setNowPlaying(true);
          videoElement.play();
        }
      }
    };
  
    // control bar visible 관련 함수
    const handleControlVisible = () => {
      if (!showControl) {
        setShowControl(true);
        setTimeout(() => {
          setShowControl(false);
        }, 2000);
      }
    };
  
    return (
      <div className={classes}>
        <video
          loop={false}
          muted={false}
          ref={ref}
          playsInline={true}
          width="400px"
          src={src}
          type="video/mp4"
        />
      </div>
    );
}

export default VideoComp;