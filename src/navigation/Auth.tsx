import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import SplashScreen from '../screens/auth/SplashScreen';
import BabysitterOrUser from '../screens/auth/BabysitterOrUser';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import SetUpAccount from '../screens/auth/SetUpAccount';


const ScreenNames = {
  Splash: "Splash",
  BabysitterOrUser: "BabysitterOrUser",
  SignUp: "SignUp",
  SignIn: "SignIn",
  SetUpAccount: "SetUpAccount",
}

const Auth = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator initialRouteName={ScreenNames.BabysitterOrUser} screenOptions={{
      headerShown: false
    }}>
      <AuthStack.Screen name={ScreenNames.Splash} component={SplashScreen} />
      <AuthStack.Screen name={ScreenNames.BabysitterOrUser} component={BabysitterOrUser} />
      <AuthStack.Screen name={ScreenNames.SignUp} component={SignUp} />
      <AuthStack.Screen name={ScreenNames.SignIn} component={SignIn} />
      <AuthStack.Screen name={ScreenNames.SetUpAccount} component={SetUpAccount} />
    </AuthStack.Navigator>
  )
}

export default Auth;