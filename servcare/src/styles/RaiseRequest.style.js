import { StyleSheet } from 'react-native';
import Colors from '../utilites/Colors';

export const RaiseRequestStyle = StyleSheet.create({

  productTextDisable: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: Colors.GRAY_500,
  },

  dopTextDisable: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: Colors.BLACK,
  },
  productTextUnDisable: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.BLACK,
  },
  productSummaryEdit: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.GREEN_100,
  },

  issueText: {
    fontSize: 11,
    fontFamily: 'Montserrat-Medium',
    color: Colors.BLACK,
  },

  inputStyle: {
    height: 90,
    marginTop: 5,
    borderWidth: 1,
    borderColor: Colors.GRAY_400,
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    borderRadius: 4,
    backgroundColor: Colors.WHITE,
    color: Colors.BLACK,
  },

  inputPlaceholderStyle: {
    height: 90,
    marginTop: 5,
    borderWidth: 1,
    borderColor: Colors.GRAY_400,
    paddingHorizontal: 10,
    fontSize: 12,
    backgroundColor: Colors.WHITE,
    fontFamily: 'Montserrat-Regular',
    borderRadius: 4,
    color: Colors.BLACK,
  },

  slotBox: {
    height: 62,
    justifyContent: 'center',
    backgroundColor: Colors.PURPLE,
  },

  slotBtnBox: {
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.GREEN_100
  },

  selectedSlotBtnBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 11,
    backgroundColor: Colors.GREEN_100
  },
});
