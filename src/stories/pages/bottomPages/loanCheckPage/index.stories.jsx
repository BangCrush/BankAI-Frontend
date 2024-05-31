import store from "libs/store";

import { Provider } from "react-redux";
import LoanCheckPage from ".";

export default {
  component: LoanCheckPage,
  title: "pages/loanCheckPage",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = { prodName: "신용대출", loanAmount: 1000000, loanRate: 3.5 };
