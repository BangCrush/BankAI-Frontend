import store from 'libs/store';

import { Provider } from 'react-redux';
import TransferInfo from '.';

export default {
  component: TransferInfo,
  title: 'molecules/transferInfo',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
};

export const Default = {};
Default.args = {name: '양삼식', accNum: '987-3455-1243', amount: 10000}