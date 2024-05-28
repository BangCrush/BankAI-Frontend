import store from "libs/store";

import { Provider } from "react-redux";
import PwdPage from ".";

export default {
  component: PwdPage,
  title: "pages/pwdPage",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};