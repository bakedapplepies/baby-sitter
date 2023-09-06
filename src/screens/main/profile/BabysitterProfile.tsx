import { Avatar, Button, Center, FormControl, HStack, Image, Input, Radio, Text, VStack, useTheme } from 'native-base';
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
      <Center flex={1}>
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

        <HStack space={6}>
          <VStack space={2}>
            <Button
              _text={{
                w: 121,
                maxWidth: 130
              }}
              justifyContent="center"
              rightIcon={<ArrowRight2 color={useTheme().colors.primary[600]} />}
              borderColor="primary.600"
              variant="outline"
              borderWidth={1}
              borderRadius={6}
              w={170}
            >
              Bảo mẫu
            </Button>
            <Button
              _text={{
                w: 121,
                maxWidth: 130
              }}
              justifyContent="left"
              rightIcon={<ArrowRight2 color={useTheme().colors.primary[600]} />}
              borderColor="primary.600"
              variant="outline"
              borderWidth={1}
              borderRadius={6}
              w={170}
            >
              Quản lý trẻ
            </Button>
          </VStack>
          <VStack space={2}>
            <Button
              _text={{
                w: 121,
                maxWidth: 130
              }}
              justifyContent="center"
              rightIcon={<ArrowRight2 color={useTheme().colors.primary[600]} />}
              borderColor="primary.600"
              variant="outline"
              borderWidth={1}
              borderRadius={6}
              w={170}
            >
              Yêu thích
            </Button>
            <Button
              _text={{
                w: 121,
                maxWidth: 130
              }}
              justifyContent="left"
              rightIcon={<ArrowRight2 color={useTheme().colors.primary[600]} />}
              borderColor="primary.600"
              variant="outline"
              borderWidth={1}
              borderRadius={6}
              w={170}
            >
              Mật khẩu
            </Button>
          </VStack>
        </HStack>
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