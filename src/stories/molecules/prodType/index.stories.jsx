import store from "libs/store";

import { Provider } from "react-redux";
import ProdType from ".";

export default {
  component: ProdType,
  title: "molecules/prodType",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  prodType: "예금",
  prodCount: 15,
};
