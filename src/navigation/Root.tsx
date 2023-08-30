import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { Container } from 'native-base';
import ChatScreen from '../screens/main/chat/ChatScreen';
// import Context from '../store/context/context';
// import ContextProvider from '../store/context/context';
import { Provider } from 'react-redux';
import { store } from '../store/redux/store';


const ScreenNames = {
  Splash: "Splash",
  BottomTab: "BottomTab",
  Chatting: "Chatting"
}
const Root = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Provider store={store}>
          <RootStack.Navigator initialRouteName={ScreenNames.BottomTab} screenOptions={{ headerShown: false }}>
            <RootStack.Screen name={ScreenNames.Splash} component={Container} />
            <RootStack.Screen name={ScreenNames.BottomTab} component={BottomTab} />
            <RootStack.Screen name={ScreenNames.Chatting} component={ChatScreen} />
          </RootStack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  )
}

export default Root;