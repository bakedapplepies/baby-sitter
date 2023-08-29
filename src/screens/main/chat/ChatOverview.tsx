import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  HStack,
  Input,
  Image,
  Center,
  Avatar,
  FlatList,
  VStack,
  Text,
} from 'native-base';
import React from 'react'
import ChatScreen from './ChatScreen';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { BottomTabParams } from '../../../navigation/config';


type NavigationProps = NativeStackScreenProps<ChatStackParams>;

const ChatOverview = () => {
  const navigation = useNavigation<NavigationProps["navigation"]>();

  const ChatOverviewCard = () => {
    return <TouchableOpacity onPress={() => {
      navigation.navigate("Chatting");
    }}>
      <HStack alignItems="center" w={365} mb={4}>
        <Avatar source={require("../../../../assets/Avatar.png")} size={50} mr={2} />
        <VStack>
          <Text fontWeight={500} fontSize={16}>
            Miracle Dorwart
          </Text>
          <Text fontSize={14} color="muted.500">
            Tin nhắn cuối cùng
          </Text>
        </VStack>
        <Text flex={1} textAlign="right" color="muted.300">
          07:00
        </Text>
      </HStack>
    </TouchableOpacity>
  }

  let users: number[] = [];
  for (let i: number = 0; i < 10; i++) users.push(i);

  return (
    <Center safeAreaY bgColor="white" flex={1}>
      <Input
        w="92%"
        mt={5}
        borderWidth={0}
        borderRadius={8}
        bgColor="muted.100"
        placeholder="Tìm kiếm theo khu vực"
        placeholderTextColor="muted.300"
        fontSize={16}
        fontWeight={400}
        leftElement={<Image
          source={require("../../../../assets/search-normal.png")}
          alt="search"
          size={5}
          tintColor="muted.300"
          ml={3}
        />}
      />

      <FlatList
        data={users}
        renderItem={ChatOverviewCard}
        my={6}
      />

    </Center>
  )
}

type ChatStackParams = {
  Overview: undefined;
  Chatting: undefined;
} & BottomTabParams;

const ChatStack = createNativeStackNavigator();
const ChatStackScreen = () => {
  return <ChatStack.Navigator initialRouteName="Overview" screenOptions={{headerShown: false}}>
    <ChatStack.Screen name="Overview" component={ChatOverview} />
    <ChatStack.Screen name="Chatting" component={ChatScreen} />
  </ChatStack.Navigator>
}

export default ChatStackScreen;