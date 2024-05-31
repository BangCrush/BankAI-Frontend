import store from "libs/store";

import { Provider } from "react-redux";
import LoanInfo from ".";

export default {
  component: LoanInfo,
  title: "molecules/loanInfo",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {loanInfo: {prodName: "일반신용대출", loanAmount: "10000000", loanRate: 3.5}}