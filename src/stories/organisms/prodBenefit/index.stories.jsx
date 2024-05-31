import store from "libs/store";

import { Provider } from "react-redux";
import ProdBenefit from ".";

export default {
  component: ProdBenefit,
  title: "organisms/ProdBenefit",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  data: {
    prodCode: 200202,
    prodType: "SAVINGS",
    prodName: "BKS 내맘대로 적금",
    prodDesc: "저축 금액을 내 마음대로 디자인하는 적금 상품입니다.",
    joinPeriod: 12,
    prodRate: 4,
    prodMin: 10000,
    prodMax: 3000000,
    joinMember: "실명의 개인 또는 개인사업자",
    prodLimit: 5000000000,
    prodRateMthd: "SIMPLE",
    prodRepay: "Null",
    prodCaution: "String",
    prodAcc: "SIMPLE",
    prodPromo: "비가 내리고^음악이 흐르면",
    prodTerms: "String",
  },
};
