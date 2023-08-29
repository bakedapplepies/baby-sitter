import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { createContext } from 'react'
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { Container } from 'native-base';
import Context, { ContextObject } from '../store/context/context';
import ChatScreen from '../screens/main/chat/ChatScreen';


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
        <Context.Provider value={ContextObject}>
          <RootStack.Navigator initialRouteName={ScreenNames.BottomTab} screenOptions={{ headerShown: false }}>
            <RootStack.Screen name={ScreenNames.Splash} component={Container} />
            <RootStack.Screen name={ScreenNames.BottomTab} component={BottomTab} />
            <RootStack.Screen name={ScreenNames.Chatting} component={ChatScreen} />
          </RootStack.Navigator>
        </Context.Provider>
      </NavigationContainer>
    </>
  )
}

export default Root;