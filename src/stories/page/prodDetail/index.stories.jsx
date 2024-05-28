import store from "libs/store";

import { Provider } from "react-redux";
import ProdDetail from ".";

export default {
  component: ProdDetail,
  title: "page/prodDetail",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  data: {
		"prodCode": 1,
		"prodType": "예금",
		"prodName": "든든뒷배 정기예금",  
		"prodDesc": "계약기간 및 가입금액이 자유롭고 자동 재예치를 통해 자금관리가 가능한 하나원큐 전용 정기예금",
		"joinPeriod": "1개월 이상 ~ 5년 이내 일단위",
		"prodRate": 3.5,
		"prodMin": "1백만원",
		"prodMax": "5백만원",
		"joinMember": "실명의 개인 또는 개인사업자",
		"prodLimit": "String",
		"prodRateMthd": "String",
		"prodRepay": "만기일시지급식: 만기(후) 해지시 원금과 함께 지급",
		"prodCaution": "아래 내용은 [금융소비자보호법] 제 19조 제 1항 “금융상품에 관한 중요한  사항”입니다.",
		"prodAcc": "String",
		"prodpromo": "오늘의 금리는?\n기간도 금액도 자유롭게",
		"prodTerms": "String",
	}
};