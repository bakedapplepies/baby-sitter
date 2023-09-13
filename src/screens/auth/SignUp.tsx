import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Center, HStack, Image, Input, Text } from 'native-base'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AuthStackParams, RootStackParams } from '../../navigation/stack_config';
import { useDispatchApp } from '../../store/redux/store';
import { setBabySitterFalse, setBabySitterTrue, setUser } from '../../store/redux/user_slice';
import { Babysitter, Parent, User, createBabysitter, createParent } from '../../types';
import { doc, setDoc } from 'firebase/firestore';
import { firebaseDB } from '../../firebase';


type NavigationProps = NativeStackScreenProps<AuthStackParams & RootStackParams, "SignUp">;

export default function SignUp() {
  const navigation = useNavigation<NavigationProps["navigation"]>();
  const route = useRoute<NavigationProps["route"]>();

  const dispatch = useDispatchApp();

  const [name, setName] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const OnSignUp = async () => {
    if (!name || !phoneNum || !password) return;
    if (password !== password2) return;

    const newUser: User = {
      id: "u0",
      name,
      phoneNum,
      email: null,
      pfp: null,
      password,
    }

    if (route.params.isBabysitter) {
      const newBabysitter: Babysitter = createBabysitter(newUser);

      dispatch(setUser(newBabysitter));
      dispatch(setBabySitterTrue());
    }
    else {
      const newParent: Parent = createParent(newUser);

      dispatch(setUser(newParent));
      dispatch(setBabySitterFalse());
    }

    // upload user info to firestore
    const newUserDoc = doc(firebaseDB, "users", phoneNum);
    await setDoc(newUserDoc, {
      phoneNum,
      password,
      name
    });
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
          placeholder="Họ tên"
          w={365}
          h={12}
          mt={5}
          backgroundColor="muted.100"
          borderColor="muted.100"
          fontSize={14}
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />
        <Input
          placeholder="Điện thoại"
          w={365}
          h={12}
          mt={5}
          backgroundColor="muted.100"
          borderColor="muted.100"
          fontSize={14}
          onChangeText={(text) => {
            setPhoneNum(text);
          }}
          value={phoneNum}
          keyboardType="numeric"
        />
        <Input
          placeholder="Mật khẩu"
          w={365}
          h={12}
          mt={5}
          backgroundColor="muted.100"
          borderColor="muted.100"
          fontSize={14}
          onChangeText={(text) => {
            setPassword(text);
          }}
          value={password}
          type="password"
        />
        <Input
          placeholder="Nhập lại mật khẩu"
          w={365}
          h={12}
          mt={5}
          backgroundColor="muted.100"
          borderColor="muted.100"
          fontSize={14}
          onChangeText={(text) => {
            setPassword2(text);
          }}
          value={password2}
          type="password"
        />

        <Button borderRadius={8} w={365} mt={10} onPress={OnSignUp}>
          Đăng ký
        </Button>
      </Center>

      <HStack space={1} mb={10}>
        <Text color="muted.800">
          Bạn đã có tài khoản?
        </Text>
        <TouchableOpacity onPress={() => {
          if (route.params.isBabysitter) {
            navigation.navigate("SignIn", { isBabysitter: true });
          }
          else {
            navigation.navigate("SignIn", { isBabysitter: false });
          }
        }}>
          <Text color="primary.600">
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </HStack>
    </Center>
  )
}