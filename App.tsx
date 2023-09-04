import { NativeBaseProvider } from 'native-base'
import theme from './src/theme';
import Root from './src/navigation/Root';
import { Provider } from 'react-redux';
import store from './src/store/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Root />
      </NativeBaseProvider>
    </Provider>
  );
}