import {StyleSheet} from 'react-native';
import Colors from '../utilites/Colors';

export const tabNavigator = StyleSheet.create({
  tabBarStyle: {
    paddingBottom: 10,
    paddingTop: 10,
    height: 70,
    backgroundColor: Colors.DARK_GREEN_100,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  tabBarLabelStyle: {
    marginTop: -10,
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
  },
  tabBarItemStyle: {
    backgroundColor: Colors.LIGHT_GREEN_100,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: Colors.WHITE,
    position: 'absolute',
    bottom: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabBoxStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    color: Colors.WHITE,
    marginTop: 4,
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
  },

  icon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },

  centerIcon: {
    resizeMode: 'contain',
    width: 65,
    height: 65,
  },
});
