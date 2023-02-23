import type { AppProps } from 'next/app';
import { NextPage } from 'next/types';

import { Provider } from 'react-redux';

import { setupStore } from 'store';

import '@styles/global.scss';

const App: NextPage<AppProps> = ({ Component, pageProps }): JSX.Element => {
  const store = setupStore();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
