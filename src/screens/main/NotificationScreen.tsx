import { StyleSheet } from 'react-native'
import React from 'react'
import {
  Center,
  HStack,
  IconButton,
  Image,
  Text
} from 'native-base'


const NotificationScreen = () => {
  return (
    <>
      {/* Top bar */}
      <HStack safeArea alignItems="center" marginY={2}>
        <IconButton
          icon={<Image
            source={require("../../../assets/arrow-left.png")}
            alt="back_arrow"
          />}
          _icon={{
            size: 5
          }}
          borderRadius="full"
          size={8}
          marginX={2}
        />

        <Text textAlign="center">
          Thông báo
        </Text>
      </HStack>

      <Center>

      </Center>
    </>
  )
}

const styles = StyleSheet.create({})

export default NotificationScreen
