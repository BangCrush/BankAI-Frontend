import store from "libs/store";

import { Provider } from "react-redux";
import PopularProd from ".";

export default {
  component: PopularProd,
  title: "organisms/popularProd",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  promotion: "오늘의 챌린저를 통해 갓생 도전",
  img: "",
};
