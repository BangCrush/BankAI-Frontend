require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
const port = 3001;

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(bodyParser.json());

app.get("/api/get-speech-token", async (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  const speechKey = process.env.SPEECH_KEY;
  const speechRegion = process.env.SPEECH_REGION;

  if (
    speechKey === "paste-your-speech-key-here" ||
    speechRegion === "paste-your-speech-region-here"
  ) {
    res
      .status(400)
      .send("You forgot to add your speech key or region to the .env file.");
  } else {
    const headers = {
      headers: {
        "Ocp-Apim-Subscription-Key": speechKey,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    try {
      const tokenResponse = await axios.post(
        `https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`,
        null,
        headers,
      );
      res.send({ token: tokenResponse.data, region: speechRegion });
    } catch (err) {
      res.status(401).send("There was an error authorizing your speech key.");
    }
  }
});

app.post("/api/tts", async (req, res) => {
  const { text } = req.body;
  const clientId = process.env.X_NCP_APIGW_API_KEY_ID;
  const clientSecret = process.env.X_NCP_APIGW_API_KEY;
  const url = "https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts";
  const data = new URLSearchParams({
    speaker: "nhajun",
    text: text,
    volume: "0",
    speed: "0",
    pitch: "0",
    format: "mp3",
  });

  try {
    const response = await axios.post(url, data.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-NCP-APIGW-API-KEY-ID": clientId,
        "X-NCP-APIGW-API-KEY": clientSecret,
      },
      responseType: "arraybuffer",
    });

    res.set("Content-Type", "audio/mpeg");
    res.send(response.data);
  } catch (error) {
    console.error("TTS 요청 실패", error);
    res.status(500).send("TTS 요청 실패");
  }
});

app.listen(port, () =>
  console.log(`Express server is running on localhost:${port}`),
);
