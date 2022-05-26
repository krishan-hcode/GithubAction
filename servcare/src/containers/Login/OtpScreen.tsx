import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import OtpInputs, { OtpInputsRef } from 'react-native-otp-inputs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import { splashGradient } from '../../assets/images';
import { userLogin } from '../../redux/actions/appAction';
import { appStyle } from '../../styles/app.style';
import { loginStyle } from '../../styles/loginScreen.style';
import { otpStyle } from '../../styles/otpScreen.style';
import { splashStyle } from '../../styles/splashScreen.style';
import Colors from '../../utilites/Colors';

type Navigation = {
  navigate: (value: string) => void;
};

const OtpScreen: React.FC<any> = () => {
  const dispatch = useDispatch()
  const loginUserInfo = useSelector<any>(state => state.app);
  const route = useRoute<any>()
  const navigation = useNavigation<Navigation>();
  const otpRef = useRef<OtpInputsRef>();
  const [mobile, setMobile] = useState('9876543210');
  const [otp, setOtp] = useState('');
  const [timerCount, setTimer] = useState(26);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setTimer(lastTimerCount => {
  //       lastTimerCount <= 1 && clearInterval(interval);
  //       return lastTimerCount - 1;
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    if (route.params) {
      setMobile(route.params && route.params.mobile);
    }
  }, [route.params]);

  const handleOtpBtn = () => {
    if (Object.keys(loginUserInfo?.userInfo).length === 0) {
      navigation.navigate('update-profile')
    } else {
      navigation.dispatch(
        StackActions.replace('bottom-tabs', { isBackStackClear: true })
      )
      dispatch(userLogin(true))
    }
  }

  return (
    <View style={splashStyle.container}>
      <ImageBackground
        source={splashGradient}
        resizeMode="cover"
        style={splashStyle.splashImage}>
        <Text style={loginStyle.login_desc}>Enter OTP</Text>
        <View style={loginStyle.bottomBox}>
          <View style={appStyle.flex}>
            <Text style={otpStyle.otp_desc}>
              We have sent OTP on your mobile {'\n'}number
              <Text style={appStyle.textColorWhite}> +91-{mobile}&nbsp; </Text>
              <Icon
                onPress={() => navigation.navigate('login')}
                name="edit"
                size={13}
                color={Colors.WHITE}
              />
            </Text>
          </View>

          <View>
            <OtpInputs
              autofillFromClipboard={false}
              ref={otpRef}
              inputStyles={otpStyle.otpInputs}
              // inputContainerStyles={otpStyle.otpInputBox}
              handleChange={code => setOtp(code)}
              numberOfInputs={4}
            />

            <TouchableOpacity
              disabled={otp.length === 4 ? false : true}
              // onPress={() => navigation.navigate('update-profile')}
              onPress={handleOtpBtn}
              style={
                otp.length === 4
                  ? [
                    loginStyle.appButtonContainer,
                    { backgroundColor: Colors.DARK_GREEN_200 },
                  ]
                  : loginStyle.appButtonContainer
              }>
              <Text
                style={
                  otp.length === 4
                    ? [
                      loginStyle.appButtonText,
                      appStyle.textColorWhite,
                      appStyle.opacity1,
                    ]
                    : loginStyle.appButtonText
                }>
                Verify OTP
              </Text>
            </TouchableOpacity>

            <View
              style={[
                appStyle.alignSelfCenter,
                appStyle.mt_20,
                appStyle.mb_20,
              ]}>
              <Text style={otpStyle.resendOtpText}>
                {timerCount <= 0 ? 'Resend OTP ' : 'Resend OTP in'}
                {timerCount > 0 && (
                  <Text
                    // onPress={() => navigation.navigate('login')}
                    style={otpStyle.timerText}>
                    {'  '}
                    {timerCount} sec{' '}
                  </Text>
                )}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OtpScreen;
