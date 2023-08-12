import { StyleSheet } from 'react-native'
import React from 'react'
import {
  Box,
  Center,
  FlatList,
  HStack,
  IconButton,
  Image,
  Text,
  VStack
} from 'native-base'
import NotificationCard from '../../components/NotificationCard'


const renderNotificationCard = () => {
  return <NotificationCard/>;
}

const NotificationScreen = () => {
  return (
    <>
      {/* Top bar */}
      <HStack safeArea alignItems="center" my={5}>
        <Box flex={1}>
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
        </Box>

        <Box flex={1}>
          <Text textAlign="center" fontWeight={500}>
            Thông báo
          </Text>
        </Box>
        <Box flex={1}/>
      </HStack>
      {/* Top bar */}

      <FlatList
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={() => renderNotificationCard()}
        mx={3}
      />
    </>
  )
}

const styles = StyleSheet.create({})

export default NotificationScreen
