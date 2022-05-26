import {StyleSheet} from 'react-native';
import Colors from '../utilites/Colors';

export const ProductDetailStyle = StyleSheet.create({
  bcGray: {
    backgroundColor: Colors.GRAY_200,
  },

  productDetailHeaderBox: {
    paddingTop: '8%',
    paddingBottom: '3%',
    elevation: 4,
    paddingHorizontal: '7%',
    backgroundColor: Colors.GRAY_200,
  },

  productDetailItemBox: {
    paddingVertical: '4%',
    paddingHorizontal: '7%',
    backgroundColor: Colors.WHITE,
  },

  headerTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.BLACK,
  },

  productDetailIcon: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },

  productStatusText: {
    marginTop: 2,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: Colors.BLACK,
  },
  dateOfPurchase: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.GRAY_500,
  },

  bottomLine: {
    borderBottomColor: Colors.GRAY_600,
    borderBottomWidth: 2,
  },

  bottomDivider: {
    borderBottomColor: Colors.LIGHT_BLUE_700,
    borderBottomWidth: 4,
  },

  uploadIcon: {
    resizeMode: 'contain',
    width: 16,
    height: 16,
  },

  attachmentIcon: {
    resizeMode: 'contain',
    width: 32,
    height: 32,
  },

  attachmentTitle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: Colors.BLACK,
  },

  attachmentSize: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: Colors.GRAY_500,
  },

  margin_: {
    paddingHorizontal: 10,
  },

  productSummary: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.BLACK,
  },
 
});
