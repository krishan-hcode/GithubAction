import { StyleSheet } from 'react-native';
import Colors from '../utilites/Colors';

export const updateProfileStyle = StyleSheet.create({
  inputStyle: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    borderRadius: 4,
    color: Colors.BLACK,
  },

  inputPlaceholderStyle: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.DARK_GREEN_100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    borderRadius: 4,
    color: Colors.BLACK,
  },

  boxShadow: {
    shadowColor: Colors.GRAY_100,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  locationBox: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 4,
  },

  locationText: {
    fontFamily: 'Montserrat-Medium',
    marginLeft: 10,
    fontSize: 14,
    color: Colors.DARK_BLUE,
  },

  placeholderStyle: {
    color: Colors.GRAY_100,
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },

  listItemLabelStyle1: {
    borderBottomWidth: 0,
  },

  listItemLabelStyle: {
    fontSize: 14,
    color: Colors.BLACK,
    fontFamily: 'Montserrat-Medium',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  labelStyle: {
    fontSize: 14,
    color: Colors.BLACK,
    fontFamily: 'Montserrat-SemiBold',
  },

  dropDownPickerStyle: {
    marginTop: 10,
    borderColor: Colors.DARK_GREEN_100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
  inputLableStyle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.BLACK,
  },

  update_profile_heading: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: Colors.BLACK,
  },
  update_profile_desc: {
    fontFamily: 'Montserrat-Medium',
    marginTop: 10,
    marginBottom: 20,
    color: Colors.GRAY_100,
    fontSize: 14,
  },

  appButtonDisableContainer: {
    padding: 16,
    backgroundColor: Colors.LIGHT_BLUE_500,
    borderRadius: 10,
  },

  appButtonDisableText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: Colors.BLACK_100,
    alignSelf: 'center',
  },

  appButtonContainer: {
    padding: 14,
    backgroundColor: Colors.GREEN_100,
    borderRadius: 4,
  },
  appButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: Colors.WHITE,
    alignSelf: 'center',
  },

  typeAddress: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.BLACK,
  },

  typeAddressOption: {
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
    color: Colors.BLACK,
  },
});
