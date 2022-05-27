import {StyleSheet} from 'react-native';
import Colors from '../utilites/Colors';

export const TransactionSuccessStyle = StyleSheet.create({
  bcGray: {
    backgroundColor: Colors.GRAY_200,
  },

  divider: {
    borderBottomColor: '#86A6C399',
    borderBottomWidth: 1,
    marginHorizontal: 30
  },

  textAlignCenter: {
    textAlign: 'center'
  },

  transactionHeaderBox: {
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingHorizontal: '7%',
    backgroundColor: Colors.GRAY_200,
  },

  orderStatus: {
    fontSize: 22,
    marginVertical: 10
  },

  justifyCenter :{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  transactionInfo: {
    color: '#818181'
  },

  trackStatus: {
    fontWeight: '600',
    color: '#000000'
  },

  tryAgain: {
    color: '#F23535'
  },

  whatsappText: {
    color: '#29A71A'
  },

  appButtonContainer: {
    padding: 12,
    backgroundColor: Colors.DARK_GREEN_100,
    borderRadius: 4,
  },

  payNowButton: {
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

  subHeaders: {
    backgroundColor: '#E8ECF1',
    paddingVertical: 12,
    paddingLeft: 20
  },

  subHeaderText: {
    color: '#020202',
    fontSize: 16
  },

  infoBox: {
    justifyContent: 'space-between'
  },

  horizontalInfoBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 14
  },

  leftInfoBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 14
  },

  rightInfoBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: 14
  },

  infoContentBox: {
    padding: 10,
  },

  alignLeft: {
    alignItems: 'flex-end'
  },

  alignRight: {
    alignItems: 'flex-end'
  },

  animationView: {
    display: 'flex',
    flexDirection: 'row',
    height: 140,
    alignSelf: 'stretch',
    alignItems: 'center'
  },

  contactInfo: {
    display: 'flex',
    flexDirection: 'row'
  },

  label: {
    fontSize: 14
  },

  value: {
    paddingVertical: 5,
    fontSize: 12
  },

  paymentDetailsLabel: {
    color: "#4E4949"
  },

  paymentDetailsLabelDiscount: {
    color: "#86C63D"
  }
});
