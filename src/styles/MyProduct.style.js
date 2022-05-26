import { StyleSheet } from 'react-native';
import Colors from '../utilites/Colors';

export const MyProductStyle = StyleSheet.create({
  headerBox: {
    height: 134,
    backgroundColor: Colors.GRAY_200,
  },
  addProductHeaderBox: {
    elevation: 4,
    height: 100,
    backgroundColor: Colors.GRAY_200,
  },

  addProductBox: {
    paddingRight: 20,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  selectBox: {
    paddingRight: 20,
    // marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  unSelectText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.GREEN_100,
  },

  selectText: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.BLACK,
  },

  headerNameText: {
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.BLACK,
  },

  addProductText: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.DARK_GREEN_200,
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: Colors.GRAY_400,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    borderRadius: 4,
    color: Colors.BLACK,
  },

  inputPlaceholderStyle: {
    borderWidth: 1,
    borderColor: Colors.GRAY_400,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    borderRadius: 4,
    color: Colors.BLACK,
  },

  disablePurchaseDate: {
    fontSize: 11,
    paddingVertical: 6,
    fontFamily: 'Montserrat-Regular',
    color: Colors.GRAY_100,
  },

  purchaseDate: {
    fontSize: 14,
    paddingVertical: 6,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.BLACK,
  },

  FieldBox: {
    height: 68,
    marginLeft: '6%',
    marginRight: '5%',
    flexDirection: 'row',
  },

   bottomLine: {
    // marginVertical: 20,
    borderBottomColor: Colors.GRAY_400,
    borderBottomWidth: 1,
  },
  inputLableStyle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.GRAY_300,
  },

  appButtonDisableContainer: {
    padding: 16,
    backgroundColor: Colors.LIGHT_BLUE_600,
    borderRadius: 4,
  },

  appButtonDisableText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: Colors.BLACK_100,
    alignSelf: 'center',
  },

  appButtonContainer: {
    padding: 14,
    backgroundColor: Colors.DARK_GREEN_100,
    borderRadius: 4,
  },
  appButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: Colors.GREEN_100,
    alignSelf: 'center',
  },

  productModelListItem: {
    justifyContent: 'center',
    marginLeft: '8%',
    marginRight: '8%',
    height: 68,
  },

  modelListText: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.BLACK,
  },

  modelListIcon: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
  },

  productListTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.BLACK_200,
  },
  productListDesc: {
    marginTop: 2,
    fontSize: 11,
    fontFamily: 'Montserrat-Medium',
    color: Colors.GRAY_100,
  },

  ModelBorderBottom: {
    borderBottomColor: Colors.GRAY_400,
    borderBottomWidth: 1,
  },

  modelVisible: {
    width: '100%',
    position: 'absolute',
    zIndex: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },

  datePicker: {
    flex: 1,
    color: Colors.WHITE,
    backgroundColor: Colors.WHITE,
  },

  tooltipText: {
    fontSize: 11,
    fontFamily: 'Montserrat-Medium',
    color: Colors.WHITE,
  },

  tooltipBox: { borderRadius: 2 },

  raiseReqestHeaderBox: {
    height: 154,
    backgroundColor: Colors.GRAY_200,
  },


  myAddProductBox: {
    borderRadius: 20,
    marginHorizontal: '10%',
    borderWidth: 1,
    marginTop: 10,
    flexDirection: 'row',
  },

  myAddProductBox1: {
    textAlign: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    height: 36,
    flexDirection: 'row',
  },

  myAddProductBox3: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.WHITE,
  },

  bottomLine11: {
    width: 100,
    borderBottomColor: Colors.GRAY_400,
    borderBottomWidth: 2,
  },

  dotLineBox: {
    marginTop: 20,
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotLineSelectedText: {
    fontSize: 11,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.GREEN_100,
  },
  dotLineUnselectedText: {
    fontSize: 11,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.GRAY,
  },

  productSummaryEdit: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.GREEN_100,
  },
});
