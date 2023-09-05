import { NativeStackNavigatorProps, NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { ArrowRight2 } from 'iconsax-react-native';
import { Button, Center, HStack, useTheme } from 'native-base';
import React from 'react'
import { ImageBackground, useWindowDimensions } from 'react-native';
import { AuthStackParams } from '../../navigation/config';
import { useNavigation } from '@react-navigation/native';


type NavigationProps = NativeStackScreenProps<AuthStackParams>;

const BabysitterOrUser = () => {
  const screenW = useWindowDimensions().width;
  const screenH = useWindowDimensions().height;

  const navigation = useNavigation<NavigationProps["navigation"]>();

  return (
    <Center flex={1}>
      <ImageBackground source={require("../../../assets/baby-bg.png")} style={{
        width: screenW,
        height: screenH+30,
        justifyContent: "flex-end",
      }}
      >
        <HStack space={4} justifyContent="center" mb={5}>
          <Button bg="primary.600" w={165} onPress={() => navigation.navigate("SignIn")}>
            Tìm người trông trẻ
          </Button>
          <Button
            _text={{ color: "primary.600" }}
            variant="unstyled"
            rightIcon={<ArrowRight2 color={useTheme().colors.primary[600]}
              size={15}
              style={{ marginTop: 2 }}
            />}
            w={165}
          >
            Tôi là người trông trẻ
          </Button>
        </HStack>
      </ImageBackground>
    </Center>
  )
}

export default BabysitterOrUser;