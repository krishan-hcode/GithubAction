import { StyleSheet } from 'react-native';
import Colors from '../utilites/Colors';

export const viewAddressStyles = StyleSheet.create({
  header: {
    backgroundColor: '#F6F6F6',
    height: '8%',
    color: Colors.BLACK,
    paddingTop: 15,
    paddingHorizontal: 20
  },

  headerTitle: {
    color: Colors.BLACK,
    fontSize: 22,
    textAlign: 'center'
  },

  bottomShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.62,
    elevation: 8,
  },

  addressListContainer: {
    padding: '5%',
    height: '82%'
  },

  addressContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    marginVertical: 6
  },

  actionButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    marginTop: 8
  },

  actionButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 6,
    width: '25%',
    paddingVertical: 8
  },

  editButton: {
    fontSize: 13
  },

  deleteButton: {
    fontSize: 13,
    color: Colors.RED
  },

  addressType: {
    paddingVertical: 4,
    fontSize: 16
  },

  address: {
    paddingVertical: 1,
    fontSize: 14
  },

  addNewButtonContainer: {
    height: '10%'
  },

  addNewButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 14,
    backgroundColor: Colors.WHITE,
    borderRadius: 4,
    borderColor: Colors.GREEN_100,
    borderWidth: 1
  },

  appButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    paddingHorizontal: 10,
    color: Colors.GREEN_100,
    alignSelf: 'center',
  },

  noAddressMessageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  noAddressText: {
    fontSize: 16,
    color: Colors.GRAY_100
  }
});
