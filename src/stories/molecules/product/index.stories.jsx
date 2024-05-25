import store from "libs/store";

import { Provider } from "react-redux";
import Product from "./index";

export default {
  component: Product,
  title: "molecules/product",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  name: "급여하나 월복리 적금",
  promotion: "월급 받고 이자 차곡",
  period: "1년",
  rate: 5.85,
  isLast: false,
};
