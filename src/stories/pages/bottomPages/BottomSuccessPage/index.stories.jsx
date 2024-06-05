import store from 'libs/store';

import { Provider } from 'react-redux';
import BottomSuccessPage from '.';

export default {
  component: BottomSuccessPage,
  title: 'pages/bottomSuccessPage',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
};

export const Default = {};
// Default.args = {}