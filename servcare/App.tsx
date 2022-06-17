/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import BottomTabNavigator from './src/containers/bottomTab/BottomTabNavigator';
import HelpSupportScreen from './src/containers/CustomerProfile/helpSupportScreen';
import AddEditAddress from './src/containers/CustomerProfile/AddEditAddress';
import LandingScreen from './src/containers/CustomerProfile/landingScreen';
import ViewAddress from './src/containers/CustomerProfile/viewAddress';
import ViewProfile from './src/containers/CustomerProfile/viewProfile';
import {
  LoginScreen, OtpScreen, SplashScreen, UpdateProfileScreen
} from './src/containers/Login';
import AddProduct from './src/containers/Product/AddProduct';
import ProductDetail from './src/containers/Product/ProductDetail';
import { RaiseRepairRequest, RaiseRequestSummary, RaiseRequestSummaryDetail, RaiseRequestConfirmation } from './src/containers/RaiseRepairRequest/';
import TransactionFailure from './src/containers/Transaction/TransactionFailure';
import TransactionSuccess from './src/containers/Transaction/TransactionSuccess';
const Stack = createNativeStackNavigator();
const App = () => {
  const loginUserInfo = useSelector<any>(state => state.app)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={loginUserInfo?.isLogin ? "bottom-tabs" : "splash"}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="update-profile" component={UpdateProfileScreen} />
        <Stack.Screen name="add-product" component={AddProduct} />
        <Stack.Screen name="product-detail" component={ProductDetail} />
        <Stack.Screen name="bottom-tabs" component={BottomTabNavigator} />
        <Stack.Screen name="raise-request" component={RaiseRepairRequest} />
        <Stack.Screen name="raise-request-summary" component={RaiseRequestSummary} />
        <Stack.Screen name="raise-request-summary-detail" component={RaiseRequestSummaryDetail} />
        <Stack.Screen name="raise-request-confirmation" component={RaiseRequestConfirmation} />
        <Stack.Screen name="successful-transaction" component={TransactionSuccess} />
        <Stack.Screen name="failed-transaction" component={TransactionFailure} />
        <Stack.Screen name="profile-menu" component={LandingScreen} />
        <Stack.Screen name="view-customer-profile" component={ViewProfile} />
        <Stack.Screen name="view-address" component={ViewAddress} />
        <Stack.Screen name="help-support" component={HelpSupportScreen} />
        <Stack.Screen name="add-edit-address" component={AddEditAddress} initialParams={{
          headerLabel: '',
          address: null
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
