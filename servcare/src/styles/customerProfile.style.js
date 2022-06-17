import { StyleSheet } from 'react-native';
import Colors from '../utilites/Colors';

export const customerProfileStyles = StyleSheet.create({
  customerInfoBox: {
    display: 'flex',
    backgroundColor: Colors.DARK_GREEN_100,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  customerInitialsBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 90,
    borderRadius: 45,
    backgroundColor: Colors.GREEN_100,
    margin: 10
  },

  customerInitialsText: {
    color: Colors.DARK_GREEN_100,
    fontSize: 40,
  },

  header: {
    backgroundColor: Colors.DARK_GREEN_100,
    height: '5%',
    color: Colors.WHITE,
    paddingTop: 15,
    paddingHorizontal: 20
  },

  headerTitle: {
    color: Colors.WHITE,
    fontSize: 22,
    textAlign: 'center'
  },

  customerDetailsContainer: {
    position: 'absolute',
    height: '75%',
    top: '23%',
    left: '4%',
    right: '4%',
    display: 'flex',
    flexDirection: 'column'
  },

  customerIdCard: {
    height: '25%'
  },

  customerNameCard: {
    height: '75%'
  },

  customerInfoCard: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 3,
    marginBottom: 10
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2.62,

    elevation: 4,
  },

  detailsBox: {
    display: 'flex',
    flexDirection: 'row'
  },

  detailsIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    paddingVertical: 10,
    paddingHorizontal: 5
  },

  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    paddingLeft: '5%'
  },

  detailsLabel: {
    color: Colors.BLACK,
    fontSize: 15,
    padding: 2
  },

  detailsValue: {
    color: Colors.BLACK,
    fontSize: 15,
    padding: 2
  },

  editProfileButton: {
    color: Colors.GREEN_100,
    fontSize: 16
  }
});
