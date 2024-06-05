import store from 'libs/store';

import { Provider } from 'react-redux';
import AccountClosePage from '.';

export default {
  component: AccountClosePage,
  title: 'pages/accountClosePage',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
};

export const Default = {};
// Default.args = {}