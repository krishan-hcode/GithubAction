import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ImageBackground, View} from 'react-native';
// @ts-ignore
import {splashGif} from '../../assets/images';
import {splashStyle} from '../../styles/splashScreen.style';

type Navigation = {
  navigate: (value: string) => void;
};

const SplashScreen: React.FC<any> = () => {
  const navigation = useNavigation<Navigation>();

  useEffect(() => {
    let interval = setTimeout(function () {
      navigation.navigate('login');
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={splashStyle.container}>
      <ImageBackground
        source={splashGif}
        resizeMode="cover"
        style={splashStyle.splashImage}
      />
    </View>
  );
};

export default SplashScreen;
