import store from "libs/store";

import { Provider } from "react-redux";
import ProdBenefit2 from ".";

export default {
  component: ProdBenefit2,
  title: "organisms/prodBenefit2",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};