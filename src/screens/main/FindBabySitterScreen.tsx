import React from 'react'
import {
  Input,
  FlatList,
  Center,
  Image,
  IconButton,
} from 'native-base'
import ShortCVCard from '../../components/ShortCVCard'


const renderShortCVCard = () => {
  return <ShortCVCard />;
}

const FindBabySitterScreen = () => {
  return (
    <Center safeArea flex={1} bg="white">
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
        rightElement={<IconButton
          icon={<Image
            source={require("../../../assets/setting-5.png")}
            alt="search"
            size={5}
            tintColor="muted.500"
          />}
          borderRadius={12}
        />}
      />
  
      <FlatList
        data={[0, 1, 2, 3, 4, 5]}
        renderItem={() => renderShortCVCard()}
        mt={6}
        w="100%"
        contentContainerStyle={{
          alignItems: "center"
        }}
      />
    </Center>
  )
}

export default FindBabySitterScreen;