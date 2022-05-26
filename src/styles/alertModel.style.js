import { StyleSheet } from 'react-native';
import Colors from '../utilites/Colors';

export const alertModelStyles = StyleSheet.create({
  alertContainer: {
    backgroundColor: '#00000099',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  alertBottom: {
    paddingHorizontal: '8%',
    backgroundColor: Colors.WHITE,
    width: '100%',
    bottom: 0,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    position: 'absolute',
    height: 200,
  },

  backgroundColor_1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
  },

  alertView: {
    borderColor: Colors.DARK_GREEN_100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DARK_GREEN_100,
    width: '90%',
    borderRadius: 7,
  },

  alertTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: Colors.WHITE,
    textAlign: 'center',
    alignSelf: 'center',
    padding: 15,
  },

  alertDivider: {
    width: '100%',
    // height: 1,
    backgroundColor: Colors.WHITE,
  },

  btnNoContainer: {
    marginRight: '10%',
    padding: 14,
    backgroundColor: Colors.GREEN_100,
    borderRadius: 4,
  },

  btnYesContainer: {
    borderColor: Colors.GREEN_100,
    borderWidth: 1,
    marginLeft: '10%',
    padding: 14,
    backgroundColor: Colors.WHITE,
    borderRadius: 4,
  },

  btnNoText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: Colors.WHITE,
    alignSelf: 'center',
  },
  btnYesText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: Colors.GREEN_100,
    alignSelf: 'center',
  },

  alertBottomTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.GRAY_500,
  },

  alertBottomList: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    bottom: 0,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    position: 'absolute',
  },

  alertAddressHeaderBox: {
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    backgroundColor: Colors.BLACK,
    height: 80,
    paddingVertical: 15,
  },

  alertUnselectedAddressListBox: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.BLACK_100,
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 8,
  },
  alertSelectedAddressListBox: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.GREEN_100,
    paddingHorizontal: 3,
    paddingVertical: 10,
    borderRadius: 8,
  },

  unselectedTimeSlotBox: {
    marginVertical: 5,
    marginHorizontal: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.GRAY_100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },

  selectedTimeSlotBox: {
    marginVertical: 5,
    marginHorizontal: 5,
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: Colors.GREEN_100,
    borderColor: Colors.GREEN_100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },

  dateSlotBox: {
    // width: 100,
    paddingHorizontal: 8,
  },

  alertBottomLine: {
    width: 80,
    borderBottomColor: Colors.GREEN_100,
    borderBottomWidth: 3,
  },

  alertDateTimeTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    color: Colors.WHITE,
  },
});
