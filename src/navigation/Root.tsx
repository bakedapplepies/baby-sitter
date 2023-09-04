import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootState, useSelectorApp } from '../store/redux/store';

import Auth from './Auth';
import BottomTab from './BottomTab';
import ChatScreen from '../screens/main/chat/ChatScreen';
import { User } from '../types';


const ScreenNames = {
  Auth: "Auth",
  BottomTab: "BottomTab",
  Chatting: "Chatting"
}

const Root = () => {
  const RootStack = createNativeStackNavigator();

  const user: User = useSelectorApp((state: RootState) => state.userSlice.user);

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          { !user &&
            <RootStack.Screen name={ScreenNames.Auth} component={Auth} />
          }

          { user &&
            <RootStack.Screen name={ScreenNames.BottomTab} component={BottomTab} />
          }

          <RootStack.Screen name={ScreenNames.Chatting} component={ChatScreen} /* Not ChatOverview */ />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Root;