import { StyleSheet } from 'react-native'
import React from 'react'
import {
  Avatar,
  HStack,
  VStack,
  Text,
  Image,
} from 'native-base'


const ShortCVCard = () => {
  return (
    <VStack bgColor="muted.100" w={370} borderRadius={8} mb={5} p={3} space={1.5}>
      <HStack alignItems="center">
        <Avatar source={require("../../assets/Avatar.png")} size="lg" mr={3} flex={0} />
        <VStack flex={1}>
          <Text fontSize={14} fontWeight={500}>
            Miracle Dorwart
          </Text>
          <HStack alignItems="center">
            <Image
              source={require("../../assets/location.png")}
              alt="location"
              size={3}
              tintColor="muted.500"
            />
            <Text fontSize={12} fontWeight={400} color="muted.500"> Location</Text>
          </HStack>
          <Text fontSize={12} fontWeight={400} color="muted.500">
            5+ năm làm việc
          </Text>
        </VStack>
        <VStack flex={1} space={4}>
          <HStack justifyContent="flex-end">
            <HStack bgColor="white" borderRadius="full" w="50%" justifyContent="center" alignItems="center">
              <Text fontSize={12} fontWeight={500}>4,8/5 </Text>
              <Image
                source={require("../../assets/Star-1.png")}
                alt="star"
                size={3}
              />
            </HStack>
          </HStack>
          <Text fontSize={14} fontWeight={700} color="primary.600" textAlign="right">
            200K/giờ
          </Text>
        </VStack>
      </HStack>
      <Text color="muted.500" fontSize={14} lineHeight={24}>
        Lorem ipsum dolor amet consectetur. Id ipsum consectetur tristique vitae enim viverra dui a.
      </Text>
    </VStack>
  )
}

const styles = StyleSheet.create({})

export default ShortCVCard