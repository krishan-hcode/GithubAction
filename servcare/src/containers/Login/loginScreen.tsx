import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  BackHandler,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { splashGradient } from '../../assets/images';
import { appStyle } from '../../styles/app.style';
import { loginStyle } from '../../styles/loginScreen.style';
import { otpStyle } from '../../styles/otpScreen.style';
import { splashStyle } from '../../styles/splashScreen.style';
import Colors from '../../utilites/Colors';

type Navigation = {
  navigate: (value: string) => void;
};

const LoginScreen: React.FC<any> = () => {
  const navigation = useNavigation<Navigation>();
  const [mobile, setMobile] = useState('');
  const handleGetOtpBtn = () => {
    navigation.navigate('otp', { mobile });
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

  return (
    <View style={splashStyle.container}>
      <ImageBackground
        source={splashGradient}
        resizeMode="cover"
        style={appStyle.flex_1}>
        <Text style={loginStyle.login_desc}>OTP Verification</Text>
        <View style={[loginStyle.bottomBox]}>
          <Text style={[otpStyle.otp_heading, appStyle.textColorWhite]}>
            Welcome to &nbsp;
            <Text style={otpStyle.otp_heading}>ServCare</Text>
          </Text>

          <View style={[loginStyle.flex, loginStyle.inputTextBox]}>
            <TextInput
              editable={false}
              style={[loginStyle.countryCode]}
              value={'+91'}
            />
            <Icon
              style={loginStyle.downArrow}
              name="chevron-down-outline"
              size={24}
              color={Colors.BLACK}
            />
            <TextInput
              placeholderTextColor={Colors.GRAY_100}
              maxLength={10}
              keyboardType="numeric"
              placeholder="Mobile Number"
              style={
                !mobile
                  ? loginStyle.inputText
                  : [loginStyle.inputText, appStyle.montserrat_semibold]
              }
              value={mobile}
              onChangeText={text => setMobile(text)}
            />
          </View>
          <TouchableOpacity
            disabled={mobile.length === 10 ? false : true}
            onPress={handleGetOtpBtn}
            style={
              mobile.length === 10
                ? [
                  loginStyle.appButtonContainer,
                  { backgroundColor: Colors.DARK_GREEN_200 },
                ]
                : loginStyle.appButtonContainer
            }>
            <Text
              style={
                mobile.length === 10
                  ? [
                    loginStyle.appButtonText,
                    appStyle.textColorWhite,
                    appStyle.opacity1,
                  ]
                  : loginStyle.appButtonText
              }>
              Get OTP
            </Text>
          </TouchableOpacity>
          <View style={loginStyle.privacyPolicyBox}>
            <Text style={loginStyle.termConditionText}>
              By continuing, you agree to our
              <Text style={loginStyle.privacyPolicyText}>
                &nbsp; Privacy Policy &nbsp;
              </Text>
              and our
              <Text style={loginStyle.privacyPolicyText}>
                &nbsp; Terms of service
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
