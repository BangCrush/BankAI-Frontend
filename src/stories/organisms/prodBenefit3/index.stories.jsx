import store from "libs/store";

import { Provider } from "react-redux";
import ProdBenefit3 from ".";

export default {
  component: ProdBenefit3,
  title: "organisms/prodBenefit3",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
