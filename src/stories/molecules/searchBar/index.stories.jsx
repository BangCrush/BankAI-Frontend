import store from "../../../lib/store";

import { Provider } from "react-redux";
import SearchBar from "./index";

export default {
  component: SearchBar,
  title: "molecules/searchBar",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = { placeholder: "어떤 상품을 찾으세요?" };
