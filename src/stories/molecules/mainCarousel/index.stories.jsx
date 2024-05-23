import store from "libs/store";

import { Provider } from "react-redux";
import MainCarousel from ".";

export default {
  component: MainCarousel,
  title: "molecules/mainCarousel",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  data: {
    prodName: "하나저축계좌",
    prodType: "입출금",
    accCode: "123-4576-345",
    accBalance: "234,140원",
  },
};
