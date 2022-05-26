import { StyleSheet } from 'react-native';
import Colors from '../utilites/Colors';

export const customerLandingScreenStyles = StyleSheet.create({
  fullHeight: {
    height: '100%'
  },

  customerInfoBox: {
    display: 'flex',
    backgroundColor: Colors.DARK_GREEN_100,
    height: '26%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  customerInitialsBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: Colors.GREEN_100,
    margin: 10
  },

  customerInitialsText: {
    color: Colors.DARK_GREEN_100,
    fontSize: 28,
  },

  customerName: {
    fontSize: 24,
    color: '#F0ECE7',
  },

  customerId: {
    fontSize: 14,
    color: Colors.GREEN_100,
    padding: 6
  },

  menuContainer: {
    position: 'absolute',
    height: '75%',
    top: '23%',
    left: '5%',
    right: '5%',
    display: 'flex',
    flexDirection: 'column'
  },

  menuRow: {
    display: 'flex',
    flexDirection: 'row'
  },

  menuItem: {
    display: 'flex',
    justifyContent: 'center',
    width: '46%',
    height: 118,
    backgroundColor: Colors.WHITE,
    margin: '2%',
    borderRadius: 10,
    borderColor: '#CACFD8',
    borderWidth: 1
  },

  menuContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  appInfo: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },

  versionNumber: {
    fontSize: 16
  },

  companyName: {
    fontSize: 16,
    color: '#8B8B8B',
    padding: 2
  }
});
