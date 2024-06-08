import React, { useEffect, useRef, useState } from "react";
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import MicNoneIcon from '@mui/icons-material/MicNone';

const VoiceWave = () => {
  const canvasRef = useRef(null);
  const [audioContext, setAudioContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [freqs, setFreqs] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [show, setShow] = useState(false);

  const WIDTH = 500;
  const HEIGHT = 200;

  const opts = {
    smoothing: 0.6,
    fft: 8,
    minDecibels: -70,
    scale: 0.2,
    glow: 10,
    color1: [203, 36, 128],
    color2: [41, 200, 192],
    color3: [24, 137, 218],
    fillOpacity: 0.6,
    lineWidth: 1,
    blend: "screen",
    shift: 50,
    width: 60,
    amp: 1,
  };

  useEffect(() => {
    if (audioContext && analyser && freqs && isRunning) {
      requestAnimationFrame(visualize);
    }
  }, [audioContext, analyser, freqs, isRunning]);

  useEffect(() => {
    start();
  }, [show]);

  const start = () => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = context.createAnalyser();
    const freqs = new Uint8Array(analyser.frequencyBinCount);

    setAudioContext(context);
    setAnalyser(analyser);
    setFreqs(freqs);
    setIsRunning(true);

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const input = context.createMediaStreamSource(stream);
        input.connect(analyser);
      })
      .catch((error) => {
        document.body.innerHTML = "<h1>이 펜은 https://에서만 작동합니다</h1>";
        console.error(error);
      });
  };

  const stop = () => {
    if (audioContext) {
      audioContext.close();
      setIsRunning(false);
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  };

  const visualize = () => {
    if (!isRunning) return;

    analyser.smoothingTimeConstant = opts.smoothing;
    analyser.fftSize = Math.pow(2, opts.fft);
    analyser.minDecibels = opts.minDecibels;
    analyser.maxDecibels = 0;
    analyser.getByteFrequencyData(freqs);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    path(ctx, 0);
    path(ctx, 1);
    path(ctx, 2);

    requestAnimationFrame(visualize);
  };

  const handleShow = () => {
    setShow(!show);
  }

  const path = (ctx, channel) => {
    const color = opts[`color${channel + 1}`].map(Math.floor);
    ctx.fillStyle = `rgba(${color}, ${opts.fillOpacity})`;
    ctx.strokeStyle = ctx.shadowColor = `rgb(${color})`;
    ctx.lineWidth = opts.lineWidth;
    ctx.shadowBlur = opts.glow;
    ctx.globalCompositeOperation = opts.blend;

    const m = HEIGHT / 2;
    const offset = (WIDTH - 15 * opts.width) / 2;
    const x = Array.from(
      { length: 15 },
      (_, i) => offset + channel * opts.shift + i * opts.width,
    );
    const y = Array.from({ length: 5 }, (_, i) =>
      Math.max(0, m - (scale(i) * freq(channel, i) * HEIGHT) / 400),
    );

    const h = 2 * m;

    ctx.beginPath();
    ctx.moveTo(0, m);
    ctx.lineTo(x[0], m + 1);
    ctx.bezierCurveTo(x[1], m + 1, x[2], y[0], x[3], y[0]);
    ctx.bezierCurveTo(x[4], y[0], x[4], y[1], x[5], y[1]);
    ctx.bezierCurveTo(x[6], y[1], x[6], y[2], x[7], y[2]);
    ctx.bezierCurveTo(x[8], y[2], x[8], y[3], x[9], y[3]);
    ctx.bezierCurveTo(x[10], y[3], x[10], y[4], x[11], y[4]);
    ctx.bezierCurveTo(x[12], y[4], x[12], m, x[13], m);
    ctx.lineTo(WIDTH, m + 1);
    ctx.lineTo(x[13], m - 1);

    ctx.bezierCurveTo(x[12], m, x[12], h - y[4], x[11], h - y[4]);
    ctx.bezierCurveTo(x[10], h - y[4], x[10], h - y[3], x[9], h - y[3]);
    ctx.bezierCurveTo(x[8], h - y[3], x[8], h - y[2], x[7], h - y[2]);
    ctx.bezierCurveTo(x[6], h - y[2], x[6], h - y[1], x[5], h - y[1]);
    ctx.bezierCurveTo(x[4], h - y[1], x[4], h - y[0], x[3], h - y[0]);
    ctx.bezierCurveTo(x[2], h - y[0], x[1], m, x[0], m);

    ctx.lineTo(0, m);
    ctx.fill();
    ctx.stroke();
  };

  const scale = (i) => {
    const x = Math.abs(2 - i);
    const s = 3 - x;
    return (s / 3) * opts.amp;
  };

  const freq = (channel, i) => {
    const band = 2 * channel + [1, 3, 0, 4, 2][i] * 6;
    return freqs[band];
  };

  return (
    <div>
      <div className={`AiRecordButton transition delay-100 ${show ? "" : "invisible"}`}>
        <canvas id="canvas" ref={canvasRef}></canvas>
      </div>
      {/* <button onClick={start}>Start</button> */}
      {/* <button onClick={stop}>Stop</button> */}
      <MicNoneIcon onClick={handleShow} className="w-100"></MicNoneIcon>
      {/* <KeyboardVoiceOutlinedIcon onClick={handleShow} className="w-full"></KeyboardVoiceOutlinedIcon> */}
      {/* <button className="border p-10 bg-main-color text-white font-bold" onClick={handleShow}></button> */}
    </div>
  );
};

export default VoiceWave;
