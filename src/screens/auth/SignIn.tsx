import {
  Button,
  Center,
  Checkbox,
  HStack,
  Image,
  Input,
  Text
} from 'native-base';
import React from 'react'
import { TouchableOpacity } from 'react-native';


const SignIn = () => {
  return (
    <Center flex={1} bg="white">
      <Image
        source={require("../../../assets/app_logo.png")}
        alt="logo"
        size={165}
        tintColor="primary.600"
        resizeMode="contain"
      />

      <Input
        placeholder="Điện thoại"
        w={365}
        h={12}
        mt={5}
        backgroundColor="muted.100"
        borderColor="muted.100"
        fontSize={14}
      />
      <Input
        placeholder="Mật khẩu"
        w={365}
        h={12}
        mt={5}
        backgroundColor="muted.100"
        borderColor="muted.100"
        fontSize={14}
      />

      <HStack alignItems="center" bg="red.100">
        <Checkbox value="remember_signin_info" mt={5} _text={{
          fontSize: 14,
          fontWeight: "300"
        }}>
          Ghi nhớ đăng nhập
        </Checkbox>
        <Button variant="unstyled" _text={{
          color: "primary.600"
        }}>
          Quên mật khẩu?
        </Button>
      </HStack>

      <Button borderRadius={8} w={365}>
        Đăng nhập
      </Button>

      <Text>
        Bạn chưa có tài khoản? <TouchableOpacity>
          <Text>
            Đăng ký
          </Text>
        </TouchableOpacity>
      </Text>
    </Center>
  )
}

export default SignIn;