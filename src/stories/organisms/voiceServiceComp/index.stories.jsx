import store from "libs/store";

import { Provider } from "react-redux";
import VoiceServiceComp from ".";

export default {
  component: VoiceServiceComp,
  title: "molecules/VoiceServiceComp",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = () => {
  return <VoiceServiceComp />;
};
// Default.args = {}
