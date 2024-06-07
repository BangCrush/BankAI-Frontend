import React, { useState, useEffect } from "react";
import axios from "axios";
import { ResultReason } from "microsoft-cognitiveservices-speech-sdk";
import { getTokenOrRefresh } from "../../../utils/token_util";
import MicIcon from "@mui/icons-material/Mic";

const speechsdk = require("microsoft-cognitiveservices-speech-sdk");

const AudioRecordPage = ({ setResult, options, type }) => {
  const [displayText, setDisplayText] = useState();
  const [isRecording, setIsRecording] = useState(false);



  async function sttFromMic() {
    const tokenObj = await getTokenOrRefresh();

    const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(
      tokenObj.authToken,
      tokenObj.region,
    );

    speechConfig.speechRecognitionLanguage = "ko-KR";

    const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new speechsdk.SpeechRecognizer(
      speechConfig,
      audioConfig,
    );

    // 말하는 중일 때 실행
    // setDisplayText("speak into your microphone...");
    setIsRecording(true);

    recognizer.recognizeOnceAsync((result) => {
      if (result.reason === ResultReason.RecognizedSpeech) {
        // 입력이 완료됐을 때 실행
        setDisplayText(`${result.text}`);
        setIsRecording(false);
      } else {
        // 입력이 취소됐을 때 실행
        setDisplayText(
          "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.",
        );
        setIsRecording(false);
      }
    });
  }

  const onSubmit = async () => {
    try {
      const response = await axios.post("http://121.163.20.238:35281/request", {
        text: displayText,
        options: options,
        type: type,
      });
      setResult(response.data);
    } catch (error) {
      console.error("파일 전송 실패:", error);
    }
  };

  useEffect(() => {
    if (!displayText) return;
    onSubmit();
  }, [displayText]);

  return (
    <button onClick={sttFromMic}>
      <MicIcon
        sx={{
          borderRadius: "50%",
          fontSize: 80,
          color: "rgb(255, 255, 255)",
          backgroundColor: isRecording
            ? "rgb(135, 133, 246)"
            : "rgb(255, 0, 0)",
        }}
      />
    </button>
  );
};

export default AudioRecordPage;
