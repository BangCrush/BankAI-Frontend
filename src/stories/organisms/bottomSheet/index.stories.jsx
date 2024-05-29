import store from "libs/store";

import { Provider } from "react-redux";
import BottomSheet from ".";
import PwdPage from "stories/pages/pwdPage";

export default {
  component: BottomSheet,
  title: "organisms/BottomSheet",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  page: <PwdPage/>,
};