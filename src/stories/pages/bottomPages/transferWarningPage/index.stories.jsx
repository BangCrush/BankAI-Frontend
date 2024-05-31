import store from 'libs/store';

import { Provider } from 'react-redux';
import TransferWarningPage from '.';

export default {
  component: TransferWarningPage,
  title: 'pages/transferWarningPage',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
};

export const Default = {};
// Default.args = {}