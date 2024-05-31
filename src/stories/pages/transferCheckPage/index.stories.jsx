import store from 'libs/store';

import { Provider } from 'react-redux';
import TransferCheckPage from '.';

export default {
  component: TransferCheckPage,
  title: 'pages/transferCheckPage',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
};

export const Default = {};
Default.args = {name: '양삼식', accNum: '987-3455-1243', amount: 10000}