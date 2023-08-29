import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { createContext } from 'react'
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { Container } from 'native-base';
import { User } from '../types';
import Context, { ContextObject } from '../store/context/context';


const ScreenNames = {
  Splash: "Splash",
  BottomTab: "BottomTab",
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
          </RootStack.Navigator>
        </Context.Provider>
      </NavigationContainer>
    </>
  )
}

export default Root;