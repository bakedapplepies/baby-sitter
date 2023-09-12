import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { Box, Button, Center, HStack, Text, VStack, useTheme } from 'native-base';
import React from 'react'
import { ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';
import { AuthStackParams } from '../../navigation/stack_config';
import { useNavigation } from '@react-navigation/native';
import { ArrowRight2 } from 'iconsax-react-native';


type NavigationProps = NativeStackScreenProps<AuthStackParams>;

const BabysitterOrUser = () => {
  const screenW = useWindowDimensions().width;
  const screenH = useWindowDimensions().height;

  const navigation = useNavigation<NavigationProps["navigation"]>();

  return (
    <Center flex={1}>
      <ImageBackground source={require("../../../assets/baby-bg.png")} style={{
        width: screenW,
        height: screenH + 30,
        justifyContent: "flex-end",
      }}
      >
        <HStack space={4} justifyContent="center" mb={5}>
          <Button bg="primary.600" w={185} borderRadius={8} onPress={() => {
            navigation.navigate("SignIn", { isBabysitter: false })
          }}>
            Tìm người trông trẻ
          </Button>
          <TouchableOpacity onPress={() => {
            navigation.navigate("SignIn", { isBabysitter: true });
          }}>
            <HStack alignItems="center" flex={1}>
              <Text color="primary.600">
                Tôi là người trông trẻ
              </Text>
              <ArrowRight2 color={useTheme().colors.primary[600]} size={18} style={{
                marginTop: 2,
                marginLeft: 2
              }} />
            </HStack>
          </TouchableOpacity>
        </HStack>
      </ImageBackground>
    </Center>
  )
}

export default BabysitterOrUser;