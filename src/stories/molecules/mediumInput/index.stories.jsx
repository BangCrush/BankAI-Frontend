import store from "libs/store";

import { Provider } from "react-redux";
import MediumInput from ".";

export default {
  component: MediumInput,
  title: "molecules/mediumInput",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  placeholder: "최소 100만원",
  text: "만원 을",
  active: false,
};
