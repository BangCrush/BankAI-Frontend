import store from "libs/store";

import { Provider } from "react-redux";
import ProductList from ".";

export default {
  component: ProductList,
  title: "organisms/productList",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  data: [
    {
      prodCode: "1",
      prodType: "1",
      prodName: "급여하나 통장",
      prodPromo: "월급통장 하나로 저축까지 똑똑하게",
      joinPeriod: "1년",
      prodRate: 5.85,
    },
    {
      prodCode: "2",
      prodType: "3",
      prodName: "달달하나 통장",
      prodPromo: "급여이체 하나만으로 우대 금리받자",
      joinPeriod: "1년",
      prodRate: 3.85,
    },
  ],
};
