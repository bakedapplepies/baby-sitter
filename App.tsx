import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NativeBaseProvider } from 'native-base'
import ChatScreen from './src/screens/main/chat/ChatScreen';
import theme from './src/theme';
import NotificationScreen from './src/screens/main/NotificationScreen';
import FindBabySitterScreen from './src/screens/main/FindBabySitterScreen';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style='auto'/>

      {/* <ChatScreen/> */}
      {/* <NotificationScreen/> */}
      <FindBabySitterScreen/>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  
});
