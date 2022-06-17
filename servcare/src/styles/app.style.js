import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../utilites/Colors';

export const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },

  flex: {
    flexDirection: 'row',
  },
  h100Dimensions: {
    height: Dimensions.get('window').height,
  },

  w100Dimensions: {
    width: Dimensions.get('window').width,
  },

  flex_1: {
    flex: 1,
  },

  padding_15: {
    padding: 15,
  },

  padding_20: {
    padding: 20,
  },

  padding_36: {
    padding: 36,
  },

  padding_30: {
    padding: 30,
  },

  pt_10: {
    paddingTop: 10,
  },
  mb_20: {
    marginBottom: 20,
  },
  mb_10: {
    marginBottom: 10,
  },
  mb_7: {
    marginBottom: 7,
  },

  mb_80: {
    marginBottom: 80,
  },

  mr_10: {
    marginRight: 10,
  },

  mt50Percent: {
    marginTop: '50%',
  },

  mt9Percent: {
    marginTop: '9%',
  },
  mt_30: {
    marginTop: 30,
  },
  mt_25: {
    marginTop: 25,
  },
  mt_40: {
    marginTop: 40,
  },
  mt_15: {
    marginTop: 15,
  },
  mt_20: {
    marginTop: 20,
  },
  mt_10: {
    marginTop: 10,
  },

  mt_5: {
    marginTop: 5,
  },

  mt_2: {
    marginTop: 2,
  },

  mtNeg60: {
    marginTop: -60,
  },

  mtNeg10: {
    marginTop: -10,
  },
  ml_30: {
    marginLeft: 30,
  },
  ml_26: {
    marginLeft: 26,
  },
  mr_20: {
    marginRight: 20,
  },

  ml_15: {
    marginLeft: 15,
  },

  ml_20: {
    marginLeft: 20,
  },
  ml_10: {
    marginLeft: 10,
  },

  pr_10: {
    paddingRight: 10,
  },
  p_absolute: {
    position: 'absolute',
  },

  bottom_40: {
    bottom: 40,
  },

  bottom_20: {
    bottom: 20,
  },
  bottom_0: {
    bottom: 0,
  },
  ml_40: {
    marginLeft: 40,
  },

  h_60: {
    height: 40,
  },
  w_100: {
    width: '100%',
  },
  w_50: {
    width: '50%',
  },

  w_10: {
    width: '10%',
  },

  w_80: {
    width: '80%',
  },
  mb_50: {
    marginBottom: 50,
  },
  montserrat_semibold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  montserrat_bold: {
    fontFamily: 'Montserrat-Bold',
  },
  montserrat_regular: {
    fontFamily: 'Montserrat-Regular'
  },
  montserrat_medium: {
    fontFamily: 'Montserrat-Medium',
  },
  text_red: {
    color: Colors.RED,
  },

  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },

  alignItemsEnd: {
    alignItems: 'flex-end',
  },

  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },

  alignItemsCenter: {
    alignItems: 'center',
  },
  bgColorWhite: {
    backgroundColor: Colors.WHITE,
  },

  textColorWhite: {
    color: Colors.WHITE,
  },

  opacity1: {
    opacity: 1,
  },

  borderWidth_0: {
    borderWidth: 0,
  },

  marginLeftAuto: {
    marginLeft: 'auto',
  },
  ph_8Percent: {
    paddingHorizontal: '8%',
  },
  ph_6Percent: {
    paddingHorizontal: '6%',
  },
  mv_10: {
    marginVertical: 10,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
