import store from "libs/store";

import { Provider } from "react-redux";
import ProdItem from ".";
import { images } from "constants/Icons";

export default {
  component: ProdItem,
  title: "atoms/prodItem",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};

Default.args = { title: "입출금", img: images[0] };
