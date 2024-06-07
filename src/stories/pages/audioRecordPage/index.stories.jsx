import store from "libs/store";

import { Provider } from "react-redux";
import AudioRecordPage from ".";

export default {
  component: AudioRecordPage,
  title: "molecules/audioRecordPage",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = () => {
  return <AudioRecordPage />;
};
// Default.args = {}
