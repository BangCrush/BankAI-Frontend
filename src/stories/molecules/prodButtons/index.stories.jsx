import store from "libs/store";

import { Provider } from "react-redux";
import ProdButtons from ".";

export default {
  component: ProdButtons,
  title: "molecules/prodButtons",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};