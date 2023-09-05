import { ArrowRight2 } from 'iconsax-react-native';
import {
  Avatar,
  Button,
  Center,
  Checkbox,
  FormControl,
  HStack,
  Image,
  Input,
  Radio,
  Text,
  VStack,
  useTheme,
} from 'native-base';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useSelectorApp } from '../../store/redux/store';


const UserProfileScreen = () => {
  const userSlice = useSelectorApp((state) => state.userSlice);

  return (
    <Center flex={1} bg="white" safeArea>
      <Text color="primary.600" fontSize={24} fontWeight={500} mb={4}>
        Thông tin
      </Text>
      <Avatar source={require("../../../assets/Avatar.png")} size="xl" my={4} />
      <Text color="primary.600" fontSize={24} fontWeight={500}>
        {!userSlice.user?.name}
      </Text>
      <HStack alignItems="center" space={1}>
        <Text color="muted.500">
          {"paityngeorge@gmail.com"}
        </Text>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/edit-2.png")}
            alt="edit_info"
            tintColor="muted.500"
            size={18}
          />
        </TouchableOpacity>
      </HStack>

      <FormControl width={365}>
        <FormControl.Label _text={{
          color: "muted.400",
          fontWeight: "500"
        }}>
          Họ tên
        </FormControl.Label>
        <Input borderColor="muted.300" h={10} fontSize={14} />
      </FormControl>
      <FormControl width={365}>
        <FormControl.Label _text={{
          color: "muted.400",
          fontWeight: "500"
        }} >
          Tuổi
        </FormControl.Label>
        <Input borderColor="muted.300" h={10} fontSize={14} />
      </FormControl>
      <FormControl width={365}>
        <FormControl.Label _text={{
          color: "muted.400",
          fontWeight: "500"
        }}>
          Số điện thoại
        </FormControl.Label>
        <Input borderColor="muted.300" h={10} fontSize={14} />
      </FormControl>

      <Text color="primary.600" fontSize={16} fontWeight={500} textAlign="left" width={365} mt={2}>
        Giới tính
      </Text>
      <HStack w={365} my={3}>
        <Radio.Group name="genderRadioGroup">
          <HStack space={5}>
            <Radio value="male">
              Nam
            </Radio>
            <Radio value="female">
              Nữ
            </Radio>
          </HStack>
        </Radio.Group>
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

      <TouchableOpacity>
        <Text mt={5} color="muted.600" fontSize={14} underline>
          Đăng xuất
        </Text>
      </TouchableOpacity>

    </Center>
  )
}

export default UserProfileScreen;