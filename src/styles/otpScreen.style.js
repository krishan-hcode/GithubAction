import {StyleSheet} from 'react-native';
import Colors from '../utilites/Colors';

export const otpStyle = StyleSheet.create({
  otp_heading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    color: Colors.GREEN_100,
  },
  otp_desc: {
    fontFamily: 'Montserrat-Medium',
    marginBottom: 30,
    color: Colors.GREEN_200,
    fontSize: 14,
  },

  appButtonContainer: {
    marginTop: 30,
    padding: 15,
    elevation: 8,
    borderWidth: 1,
    borderColor: Colors.GREEN_100,
    backgroundColor: Colors.GREEN_100,
    borderRadius: 10,
  },
  appButtonText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: Colors.WHITE,
    alignSelf: 'center',
  },
  resendOtpText: {
    fontFamily: 'Montserrat-Medium',
    color: Colors.GREEN_100,
    fontSize: 12,
  },

  otpInputs: {
    height: 50,
    width: 62,
    textAlign: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    color: Colors.BLACK,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
  },

  timerText: {
    fontFamily: 'Montserrat-Medium',
    color: Colors.WHITE,
    fontSize: 14,
  },
});
