import {
  Box,
  Button,
  Center,
  Checkbox,
  HStack,
  Image,
  Input,
  Text
} from 'native-base';
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { AuthStackParams } from '../../navigation/stack_config';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { firebaseDB } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useDispatchApp } from '../../store/redux/store';
import { setUser } from '../../store/redux/user_slice';
import { User } from '../../types';


type NavigationProps = NativeStackScreenProps<AuthStackParams, "SignIn">;

const SignIn = () => {
  const navigation = useNavigation<NavigationProps["navigation"]>();
  const route = useRoute<NavigationProps["route"]>();

  const dispatch = useDispatchApp();

  const [phoneNum, setPhoneNum] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const OnSignIn = async () => {
    try {  // in case API is unable to access internet
      const fb_document = doc(firebaseDB, "users", phoneNum);
      const docSnap = await getDoc(fb_document);
      
      if (docSnap.exists()) {
        const userData = docSnap.data();
        if (userData?.password === password)
        {
          const user: User = {
            id: phoneNum,
            email: null,
            name: userData?.name,
            password,
            pfp: null,  // for now
            phoneNum
          }

          dispatch(setUser(user));
        }
        else  // password doesn't match
        {
          console.log("Wrong password.");
        }
      } else {
        // docSnap.data() will be undefined in this case
        console.log("Phone number not found.");
      }
    } catch (err) {
      console.log(err);
    } finally {
      // to set loading animation to false or smth
    }
  }

  return (
    <Center flex={1} bg="white">
      <Center flex={1}>
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
          keyboardType="numeric"
          onChangeText={setPhoneNum}
          value={phoneNum}
        />
        <Input
          placeholder="Mật khẩu"
          w={365}
          h={12}
          mt={5}
          backgroundColor="muted.100"
          borderColor="muted.100"
          fontSize={14}
          type="password"
          onChangeText={setPassword}
          value={password}
        />

        <HStack alignItems="flex-end" justifyContent="flex-start" w={365}>
          <Checkbox value="remember_signin_info" mt={5} _text={{
            fontSize: 14,
            fontWeight: "300",
          }}>
            Ghi nhớ đăng nhập
          </Checkbox>
          <HStack flex={1}>
            <Box flex={1} />
            <TouchableOpacity>
              <Text color="primary.600">
                Quên mật khẩu?
              </Text>
            </TouchableOpacity>
          </HStack>
        </HStack>

        <Button borderRadius={8} w={365} mt={10} onPress={OnSignIn}>
          Đăng nhập
        </Button>
      </Center>

      <HStack space={1} mb={10}>
        <Text color="muted.800">
          Bạn chưa có tài khoản?
        </Text>
        <TouchableOpacity onPress={() => {
          if (route.params.isBabysitter) {
            navigation.navigate("SignUp", { isBabysitter: true });
          }
          else {
            navigation.navigate("SignUp", { isBabysitter: false });
          }
        }}>
          <Text color="primary.600">
            Đăng ký
          </Text>
        </TouchableOpacity>
      </HStack>
    </Center>
  )
}

export default SignIn;