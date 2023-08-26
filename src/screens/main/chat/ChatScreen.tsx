import {
  StyleSheet,
} from 'react-native'
import {
  Center,
  Text,
  FlatList,
  HStack,
  IconButton,
  Image,
  Avatar,
  VStack,
  CircleIcon,
  Input,
  Divider,
  Box,
} from 'native-base'
import React from 'react'
import { ChatData, MessageType } from '../../../data/chat';
import { Babysitter } from '../../../types';


const MessageInput = () => {
  return (
    <Input
      m={4}
      borderWidth={0}
      placeholder="Nội dung..."
      placeholderTextColor="muted.300"
      fontSize={14}
      lineHeight={21}
      bgColor="muted.100"
      _input={{ pl: 2 }}

      InputLeftElement={
        <HStack space={2} mx={1} alignItems="center" pl={1.5}>
          <IconButton
            icon={<Image
              source={require("../../../assets/attach-circle.png")}
              alt="attach"
              size={5}
              tintColor="muted.500"
            />}
            size={6}
          />
          <IconButton
            icon={<Image
              source={require("../../../assets/camera.png")}
              alt="camera"
              size={5}
              tintColor="muted.500"
            />}
            size={6}
          />
          <Divider orientation="vertical" bg="muted.200" height={6} />
        </HStack>
      }

      InputRightElement={
        <IconButton
          icon={<Image
            source={require("../../../assets/send-arrow.png")}
            alt="send_arrow"
            tintColor="white"
            size={6}
          />}
          bgColor="primary.600"
          borderRadius={9}
        />
      }

    />
  );
}

const defaultBabysitterID: number = 0;

const ChatScreen = () => {
  const renderMessage = (item: MessageType) => {
<<<<<<< HEAD:src/screens/main/ChatScreen.tsx
    if (item.sender_id === defaultUserID) {
      return (
        <VStack flex={0} maxW={280} alignSelf="flex-end" mt={3}>
          <Box bgColor="primary.600" p={2.5} borderRadius={8} borderBottomRightRadius={0}>
            <Text color="white" fontSize={13} textAlign="right" onLayout={(event) => {
              console.log(event.nativeEvent.layout.width);
            }}>
              {item.content}
            </Text>
          </Box>
          <Box>
=======
    if (typeof item.sender === "Babysitter") {
      return <VStack safeArea maxW={280} flex={0} bgColor="red.400">
        <Box bgColor="primary.600" p={2.5} borderRadius={8} borderBottomRightRadius={0} flex={0}>
          <Text color="white" fontSize={13} textAlign="right" highlight width={150} onLayout={(event) => {
            console.log(event.nativeEvent.layout.width);
          }}>
            {item.content}
          </Text>
        </Box>
        {/* <Box bgColor="blue.100">
>>>>>>> navigator:src/screens/main/chat/ChatScreen.tsx
          <Text fontSize={10} color="muted.500" textAlign="right">
            {item.time_sent}
          </Text>
        </Box>
        </VStack>
      );
    }
    else {
      return <VStack maxW={280} alignSelf="flex-start" mt={3}>
        <Box bgColor="muted.100" p={2.5} borderRadius={8} borderBottomLeftRadius={0}>
          <Text fontSize={13}>
            {item.content}
          </Text>
        </Box>
        <Box>
          <Text fontSize={10} color="muted.500">
            {item.time_sent}
          </Text>
        </Box>
      </VStack>;
    }
  };

  return (
    <>
      {/* Top bar */}
      <HStack safeArea alignItems="center" my={2} mb={5}>
        <IconButton
          icon={<Image
            source={require("../../../assets/arrow-left.png")}
            alt="back_arrow"
          />}
          _icon={{
            size: 5,
          }}
          borderRadius="full"
          size={8}
          marginX={2}
        />
        <Avatar
          source={require("../../../assets/Avatar.png")}
        />

        <VStack marginLeft={2}>
          <Text fontSize={14} fontWeight={600} lineHeight={17.5}>
            Miracle Dorwart
          </Text>

          <HStack alignItems="center" space={1}>
            <CircleIcon color="green.600" size={2} />

            <Text>
              Online
            </Text>
          </HStack>
        </VStack>
      </HStack>

      <Center bgColor="white" flex={1}>
        <FlatList
          data={ChatData}
          renderItem={({ item }) => renderMessage(item)}
          width={365}
        />

        <MessageInput />
      </Center>
    </>
  )
}

export default ChatScreen;

const styles = StyleSheet.create({})