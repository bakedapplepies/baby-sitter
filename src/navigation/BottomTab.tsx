import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import NotificationScreen from '../screens/main/NotificationScreen';
import ChatStackScreen from '../screens/main/chat/ChatOverview';
import { Image, useTheme } from 'native-base';
import ChatOverview from '../screens/main/chat/ChatOverview';
import FindBabySitterScreen from '../screens/main/FindBabySitterScreen';


const TabNames = {
  Search: "Search",
  Chat: "Chat",
  Info: "Info",
  Notification: "Notification"
}

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  const mainColor = useTheme().colors.primary[600];
  const mutedColor = useTheme().colors.muted[500];

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: mainColor,
      tabBarStyle: {
        height: 60,
      },
      tabBarLabelStyle: {
        marginBottom: 6
      }
    }}>
      <Tab.Screen
        name={TabNames.Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../../assets/search-normal2.png")}
              size={size}
              alt="search"
              tintColor={focused ? color : mutedColor}
            />
          ),
          tabBarLabel: "Tìm kiếm"
        }}
        component={FindBabySitterScreen}
      />

      <Tab.Screen
        name={TabNames.Chat}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../../assets/chat.png")}
              size={size}
              alt="search"
              tintColor={focused ? color : mutedColor}
            />
          ),
          tabBarLabel: "Tin nhắn"
        }}
        component={ChatOverview}
      />
      
      <Tab.Screen
        name={TabNames.Info}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../../assets/profile-circle.png")}
              size={size}
              alt="info"
              tintColor={focused ? color : mutedColor}
            />
          ),
          tabBarLabel: "Thông tin"
        }}
        component={NotificationScreen}
      />

      <Tab.Screen
        name={TabNames.Notification}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../../assets/notification.png")}
              size={size}
              alt="notification"
              tintColor={focused ? color : mutedColor}
            />
          ),
          tabBarLabel: "Thông báo"
        }}
        component={NotificationScreen}
      />
    </Tab.Navigator>
  )
}

export default BottomTab;