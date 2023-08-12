import { StyleSheet } from 'react-native'
import React from 'react'
import {
  HStack,
  Avatar,
  VStack,
  Text,
} from 'native-base'


const NotificationCard = () => {
  return (
    <HStack w="90%" h={90} alignItems="center" borderBottomWidth={1} borderBottomColor="muted.100">
      <Avatar source={require("../../assets/Avatar.png")} size="lg" mr={3}/>
      <VStack>
        <Text fontWeight={300} fontSize={14} color="muted.800" w="60%">
          <Text fontWeight={400}>Miracle Dorwart </Text>
          đã nhận lịch làm bảo mẫu ngày 06/08 lúc 07:00AM - 10:00AM
        </Text>

        <Text fontSize={12} fontWeight={300} color="muted.400">
          {1} giờ trước
        </Text>
      </VStack>
    </HStack>
  )
}

export default NotificationCard

const styles = StyleSheet.create({})