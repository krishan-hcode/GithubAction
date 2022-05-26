import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { BackHandler, Image, Text, View } from 'react-native';
import { Home, MyProduct } from '../';
import {
  greenHomeIcon, greenProductIcon, greenProfileIcon, greenRequestIcon, setting, WhiteHomeIcon, whiteProductIcon, whiteProfileIcon, whiteRequestIcon
} from '../../assets/icons/';
import { NavigationProps } from '../../interface/interface';
import { tabNavigator } from '../../styles/tabNavigator.style';
import Colors from '../../utilites/Colors';
import LandingScreen from '../CustomerProfile/landingScreen';
import Profile from '../Profile';
import RaiseRepairRequest from '../RaiseRepairRequest/RaiseRepairRequest';
const Tab = createBottomTabNavigator();

type tabBarIconType = {
  focused: boolean;
};

const BottomTabNavigator: React.FC<any> = () => {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<any>()

  useFocusEffect(
    useCallback(() => {
      if (route.params && route.params.isBackStackClear) {
        const onBackPress = () => {
          BackHandler.exitApp();
          return true;
        };
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
      }
    }, [route.params]),
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: Colors.WHITE,
        tabBarActiveTintColor: Colors.DARK_GREEN_200,
        tabBarStyle: [tabNavigator.tabBarStyle],
        tabBarLabelStyle: [tabNavigator.tabBarLabelStyle],
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }: tabBarIconType) => (
            <View style={tabNavigator.tabBoxStyle}>
              <Image
                source={focused ? greenHomeIcon : WhiteHomeIcon}
                style={tabNavigator.icon}
              />
              <Text
                style={
                  focused
                    ? [tabNavigator.textStyle, { color: Colors.DARK_GREEN_200 }]
                    : tabNavigator.textStyle
                }>
                Homes
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Product"
        component={MyProduct}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }: tabBarIconType) => (
            <View style={tabNavigator.tabBoxStyle}>
              <Image
                source={focused ? greenProductIcon : whiteProductIcon}
                style={tabNavigator.icon}
              />
              <Text
                style={
                  focused
                    ? [tabNavigator.textStyle, { color: Colors.DARK_GREEN_200 }]
                    : tabNavigator.textStyle
                }>
                My Product
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={RaiseRepairRequest}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
            navigation.navigate('raise-request')
          },
        }}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <View style={[tabNavigator.tabBarItemStyle]}>
              <Image source={setting} style={tabNavigator.centerIcon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Request"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }: tabBarIconType) => (
            <View style={tabNavigator.tabBoxStyle}>
              <Image
                source={focused ? greenRequestIcon : whiteRequestIcon}
                style={tabNavigator.icon}
              />
              <Text
                style={
                  focused
                    ? [tabNavigator.textStyle, { color: Colors.DARK_GREEN_200 }]
                    : tabNavigator.textStyle
                }>
                My Request
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={LandingScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }: tabBarIconType) => (
            <View style={tabNavigator.tabBoxStyle}>
              <Image
                source={focused ? greenProfileIcon : whiteProfileIcon}
                style={tabNavigator.icon}
              />
              <Text
                style={
                  focused
                    ? [tabNavigator.textStyle, { color: Colors.DARK_GREEN_200 }]
                    : tabNavigator.textStyle
                }>
                Me
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
