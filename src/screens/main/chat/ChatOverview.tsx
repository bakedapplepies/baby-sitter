import {
  HStack,
  Input,
  Image,
} from 'native-base';
import React from 'react'


const ChatOverview = () => {
  return (
    <HStack>
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
          source={require("../../../assets/search-normal.png")}
          alt="search"
          size={5}
          tintColor="muted.300"
          ml={3}
        />}
      />
      
    </HStack>
  )
}

export default ChatOverview;