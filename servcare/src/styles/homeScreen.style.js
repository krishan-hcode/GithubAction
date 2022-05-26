import { StyleSheet } from 'react-native';
import Colors from '../utilites/Colors';

export const homeStyles = StyleSheet.create({
  headerBox: {
    height: 200,
    backgroundColor: Colors.DARK_GREEN_400,
  },

  headerTitleIconBox: {
    marginTop: '9%',
    // marginTop: 30,
    marginLeft: 20,
    marginRight: 40,
    flexDirection: 'row',
  },

  headerHelloText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.WHITE,
  },

  headerNameText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.GREEN_200,
  },
  listBox: {
    width: 110,
    marginVertical: 10,
    alignItems: 'center',
  },
  listItem: {
    borderRadius: 10,
    height: 70,
    width: 70,
    backgroundColor: Colors.WHITE,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listTextHeading: {
    marginVertical: 10,
    marginHorizontal: '9%',
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    color: Colors.BLACK,
  },
  listText: {
    marginTop: 5,
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 11,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.BLACK,
  },

  listIcon: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },

  textInputStyle: {
    fontSize: 12,
    color: Colors.BLACK,
    fontFamily: 'Montserrat-Regular',
    paddingVertical: 5,
    marginLeft: 0,
  },

  searchBarShadowStyle: {
    height: 42,
    borderRadius: 9,
    fontFamily: 'Montserrat-Regular',
    color: Colors.GRAY_100,
    padding: 5,
    marginTop: 20,
    elevation: 8,
    backgroundColor: Colors.WHITE,
  },

  shadow: {
    shadowColor: Colors.GRAY_100,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },

  searchIcon: {
    resizeMode: 'contain',
    color: Colors.GRAY_100,
  },
  notificationBox: {
    marginTop: -25,
    left: 7,
    height: 16,
    width: 16,
    borderRadius: 9,
    backgroundColor: Colors.GREEN_100,
  },

  notificationText: {
    color: Colors.WHITE,
    padding: 'auto',
    fontSize: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat-Medium',
  },

  servicesBox: {
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },  

});
