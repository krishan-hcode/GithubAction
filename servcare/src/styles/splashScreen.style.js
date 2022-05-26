import {StyleSheet} from 'react-native';
import Colors from '../utilites/Colors';

export const splashStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  flex: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  splashImage: {
    flex: 1,
  },

  p_absolute: {
    position: 'absolute',
    bottom: 20,
  },

  textHeading: {
    fontFamily: 'Montserrat-SemiBold',
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 30,
    color: Colors.WHITE,
    marginBottom: 30,
  },

  appButtonContainer: {
    justifyContent: 'center',
    marginTop: 40,
    padding: 12,
    elevation: 8,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 10,
  },
  appButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: Colors.DARK_BLUE,
    alignSelf: 'center',
  },

  mt_10: {
    marginTop: 10,
  },
  checkText_1: {
    fontFamily: 'Montserrat-Regular',
    color: Colors.LIGHT_BLUE_200,
    fontSize: 14,
  },
  signupText: {
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.WHITE,
    fontSize: 14,
  },
});
