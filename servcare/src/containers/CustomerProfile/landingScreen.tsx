import React from 'react';
import { View } from "react-native";
import { Text } from 'react-native-elements';
import { appStyle } from '../../styles/app.style';
import { customerLandingScreenStyles } from '../../styles/customerLandingScreen.style';
import { useSelector } from 'react-redux';
import MenuItem from './menuItem';
import { ScrollView } from 'react-native-virtualized-view';

const LandingScreen: React.FC<any> =  () => {
  const loginUserInfo = useSelector<any>(state => state.app)
  const getInitial=(value: string)=> {
    if(value) {
      return value.charAt(0).toUpperCase();
    }
    return '?'
  }
  return (
    <View style={appStyle.container}>
      <View style={[customerLandingScreenStyles.customerInfoBox]}>
        <View style={[customerLandingScreenStyles.customerInitialsBox]}>
          <Text
            style={[
              appStyle.montserrat_bold,
              customerLandingScreenStyles.customerInitialsText
            ]}
          >
            {getInitial(loginUserInfo?.userInfo?.firstName)}
          </Text>
        </View>
        <Text
          style={[
            appStyle.montserrat_semibold,
            customerLandingScreenStyles.customerName
          ]}
        >
          {loginUserInfo?.userInfo?.firstName}
        </Text>
        <Text
          style={[
            appStyle.montserrat_regular,
            customerLandingScreenStyles.customerId
          ]}
        >
          Customer Id: 123456789
        </Text>
      </View>
      <View style={[customerLandingScreenStyles.menuContainer]}>
        <ScrollView>
          <View style={[customerLandingScreenStyles.menuRow]}>
            <MenuItem
              label={'My Profile'}
              iconName={'user'}
              navigateTo='view-customer-profile'
            />
            <MenuItem
              label={'My Address'}
              iconName={'map-marker-alt'}
              navigateTo={'view-address'}            />
          </View>
          <View style={[customerLandingScreenStyles.menuRow]}>
            <MenuItem
              label={'Refer & Earn'}
              iconName={'gift'}
              navigateTo={'Home'}
            />
            <MenuItem
              label={'Settings'}
              iconName={'cog'}
              navigateTo={'Home'}
            />
          </View>
          <View style={[customerLandingScreenStyles.menuRow]}>
            <MenuItem
              label={'Dispute'}
              iconName={'gavel'}
              navigateTo={'Home'}
            />
            <MenuItem
              label={'Help & Support'}
              iconName={'question-circle'}
              navigateTo={'help-support'}
            />
          </View>
          <View style={[customerLandingScreenStyles.menuRow]}>
            <MenuItem
              label={'Terms of Service'}
              iconName={'file-alt'}
              navigateTo={'Home'}
            />
            <MenuItem
              label={'About Us'}
              iconName={'users'}
              navigateTo={'Home'}
            />
          </View>
          <View style={[customerLandingScreenStyles.appInfo]}>
            <Text style={[appStyle.montserrat_regular, customerLandingScreenStyles.versionNumber]}> Version 01.01</Text>
            <Text style={[appStyle.montserrat_regular, customerLandingScreenStyles.companyName]}> Servcare Pvt. Ltd.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default LandingScreen;