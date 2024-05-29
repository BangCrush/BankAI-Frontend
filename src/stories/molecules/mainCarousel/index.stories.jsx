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
  data : [
    {
      "accCode": "04-123425-786", // 계좌번호
			"accBalance": 12342400,  // 계좌잔액
			"prodName": "자유 입출금 계좌", // 계좌(상품)이름
      "prodType": "예금"
    },
    {
      "accCode": "987-3455-1243", // 계좌번호
			"accBalance": 12130000,  // 계좌잔액
			"prodName": "뱅크시보통예금", // 계좌(상품)이름
      "prodType": "예금"
    }
  ]
};
