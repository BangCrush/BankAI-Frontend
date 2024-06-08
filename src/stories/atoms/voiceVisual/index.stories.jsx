import store from "libs/store";

import { Provider } from "react-redux";
import VoiceWave from ".";

export default {
  component: VoiceWave,
  title: "atoms/voiceWave",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
// Default.args = {}
