import { Avatar, Button, Center, HStack, Image, Text, VStack, useTheme } from 'native-base';
import React from 'react'
import { useDispatchApp, useSelectorApp } from '../../../store/redux/store';
import { TouchableOpacity } from 'react-native';
import { ArrowRight2 } from 'iconsax-react-native';
import { removeUser } from '../../../store/redux/user_slice';


const BabysitterProfile = () => {
  const userSlice = useSelectorApp((state) => state.userSlice);
  const dispatch = useDispatchApp();

  return (
    <Center flex={1} bg="white" safeArea>
      <Center flex={1} justifyContent="flex-start" pt={10}>
        <Text color="primary.600" fontSize={24} fontWeight={500} mb={4}>
          Thông tin
        </Text>
        <Avatar source={require("../../../../assets/Avatar.png")} size="xl" my={4} />
        <Text color="primary.600" fontSize={24} fontWeight={500}>
          {userSlice.user?.name}
        </Text>
        <HStack alignItems="center" space={1}>
          <Text color="muted.500">
            {"paityngeorge@gmail.com"}
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../../../../assets/edit-2.png")}
              alt="edit_info"
              tintColor="muted.500"
              size={18}
            />
          </TouchableOpacity>
        </HStack>

        <VStack space={3} mt={16} w={365}>
          <Button
            _text={{
              w: 305,
            }}
            justifyContent="center"
            rightIcon={<ArrowRight2 color={useTheme().colors.primary[600]} />}
            borderColor="primary.600"
            variant="outline"
            borderWidth={1}
            borderRadius={6}
            w="100%"
          >
            Bảo mẫu
          </Button>
          <Button
            _text={{
              w: 305,
            }}
            justifyContent="center"
            rightIcon={<ArrowRight2 color={useTheme().colors.primary[600]} />}
            borderColor="primary.600"
            variant="outline"
            borderWidth={1}
            borderRadius={6}
            w="100%"
          >
            Yêu thích
          </Button>
        </VStack>
      </Center>

      <TouchableOpacity
        onPress={() => {
          dispatch(removeUser());
        }}
        style={{
          marginBottom: 20
        }}
      >
        <Text mt={5} color="muted.600" fontWeight={600} fontSize={14} underline>
          Đăng xuất
        </Text>
      </TouchableOpacity>

    </Center>
  )
}

export default BabysitterProfile;