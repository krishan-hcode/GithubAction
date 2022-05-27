import {StyleSheet} from 'react-native';
import Colors from '../utilites/Colors';

export const homeAppliancesStyles = StyleSheet.create({
  parentBox: {
    backgroundColor: '#F0ECE7',
    borderRadius: 12,
    paddingTop: 13,
    paddingBottom: 6,
    paddingHorizontal: 20,
    width: 320,
    height: 180,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },

  parentBoxShadow: {
    shadowColor: '#005DFF29',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  imgBox: {
    alignSelf: 'flex-end',
    // width: 200,
    // height: 50,
  },

  imgIcon: {
    resizeMode: 'contain',
    width: 220,
    height: 170,
  },

  textDesc: {
    marginTop: 5,
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: Colors.GRAY_100,
  },
  textHeading: {
    fontSize: 17,
    fontFamily: 'Montserrat-Bold',
    color: Colors.BLACK,
  },

  appButtonContainer: {
    width: 100,
    marginTop: 15,
    paddingVertical: 6,
    backgroundColor: Colors.DARK_GREEN_200,
    borderRadius: 10,
  },
  appButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 11,
    color: Colors.WHITE,
    alignSelf: 'center',
  },
});
