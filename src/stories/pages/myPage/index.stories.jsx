import store from "libs/store";

import { Provider } from "react-redux";
import MyPage from ".";

export default {
  component: MyPage,
  title: "page/myPage",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  data: {
    userName: "홍길동",
    userNameEn: "Hong Gildong",
    userPhone: "01023435678",
    userEmail: "dooli@uncle.com",
    userAddr: "서울특별시 아차산로 111",
    userAddrDetail: "라쿠아파트 204동 1509호",
    jobName: "학생/군인",
    companyName: "-",
    companyAddr: "-",
    companyPhone: "-"
  }
};