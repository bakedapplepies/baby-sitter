import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'


const TabNames = {
  Search: "Search",
  Chat: "Chat",
  Info: "Info",
  Notification: "Notification"
}

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name={TabNames.Search} component={}/>
      <Tab.Screen name={TabNames.Chat} component={}/>
      <Tab.Screen name={TabNames.Info} component={}/>
      <Tab.Screen name={TabNames.Notification} component={}/>
    </Tab.Navigator>
  )
}

export default BottomTab;