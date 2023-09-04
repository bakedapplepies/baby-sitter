import { Center, Image } from 'native-base';
import React from 'react'


const SplashScreen = () => {
  return (
    <Center bg="primary.600" flex={1}>
      <Image
        source={require("../../../assets/app_logo.png")}
        alt="app_logo"
        w={189}
        h={143}
        resizeMode="contain"
      />
    </Center>
  )
}

export default SplashScreen;