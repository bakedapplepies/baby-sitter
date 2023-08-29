import { NativeBaseProvider } from 'native-base'
import theme from './src/theme';
import Root from './src/navigation/Root';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Root/>
    </NativeBaseProvider>
  );
}