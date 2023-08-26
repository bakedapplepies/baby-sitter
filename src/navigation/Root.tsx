import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import BottomTab from './BottomTab';


const ScreenNames = {
  Splash: "Splash",
  BottomTab: "BottomTab",
}

const Root = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto"/>
      <Stack.Navigator initialRouteName={ScreenNames.BottomTab}>
        <Stack.Screen name={ScreenNames.Splash} component={() => <></>}/>

        <Stack.Screen name={ScreenNames.BottomTab} component={BottomTab}/>
      </Stack.Navigator>
    </>
  )
}

export default Root;