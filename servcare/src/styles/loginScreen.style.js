import { StyleSheet } from 'react-native';
import Colors from '../utilites/Colors';

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 30,
  },
  flex: {
    flexDirection: 'row',
  },

  downArrow: {
    // resizeMode: 'contain',
    width: 19,
    height: 18,
    marginRight: 15,
    marginTop: 10,
  },
  inputTextBox: {
    marginTop: 40,
    borderWidth: 1,
    padding: 2,
    borderRadius: 9,
    fontWeight: 'bold',
    backgroundColor: Colors.WHITE,
    borderColor: Colors.WHITE,
  },
  countryCode: {
    fontFamily: 'Montserrat-SemiBold',
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 14,
    color: Colors.BLACK,
  },
  inputText: {
    width: '80%',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: Colors.BLACK,
  },
  login_desc: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 30,
    color: Colors.WHITE,
    fontSize: 20,
  },

  appButtonContainer: {
    marginTop: 30,
    padding: 16,
    backgroundColor: Colors.GREEN_300,
    borderRadius: 9,
  },
  appButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    opacity: 0.3,
    color: Colors.GREEN_100,
    alignSelf: 'center',
  },

  privacyPolicyBox: {
    marginTop: 25,
    marginHorizontal: '10%',
  },

  termConditionText: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    color: Colors.GREEN_200,
    fontSize: 12,
  },

  privacyPolicyText: {
    fontFamily: 'Montserrat-Regular',
    color: Colors.WHITE,
    fontSize: 12,
  },
  bottomBox: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
  },
});
