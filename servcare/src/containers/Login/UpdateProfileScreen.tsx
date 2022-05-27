import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  PermissionsAndroid,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { GOOGLE_API_KEY } from '../../constants/app.constants';
import { userInfo, userLogin } from '../../redux/actions/appAction';
import { appStyle } from '../../styles/app.style';
import { splashStyle } from '../../styles/splashScreen.style';
import { updateProfileStyle } from '../../styles/updateProfile.style';
import Colors from '../../utilites/Colors';

type Navigation = {
  navigate: (value: string) => void;
};

const UpdateProfileScreen: React.FC<any> = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation<Navigation>();
  const [referralCode, setReferralCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmitBtn = () => {
    const payload = {
      name: firstName,
      pincode: pincode,
      referralCode: referralCode
    }
    dispatch(userLogin(true))
    dispatch(userInfo(payload))
    navigation.navigate('bottom-tabs', { isBackStackClear: true });

  };

  async function getPincodeFromLocation(lat: string, long: string) {
    const resp = await fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      lat +
      ',' +
      long +
      '&key=' +
      GOOGLE_API_KEY,
    );
    const data = await resp.json();
    for (let i = 0; i < data.results[0].address_components.length; i++) {
      const component = data.results[0].address_components[i];
      const componentType = component.types[0];
      switch (componentType) {
        case 'postal_code': {
          const postcode = component.short_name;
          setPincode(postcode);
          break;
        }
      }
    }
  }

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLongitude2 = JSON.stringify(position.coords.longitude);
        const currentLatitude2 = JSON.stringify(position.coords.latitude);
        console.log('Latitude', currentLatitude2);
        console.log('Longitude', currentLongitude2);
        getPincodeFromLocation(currentLatitude2, currentLongitude2);
      },
      error => {
        console.log('error', error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  };

  const askPermission = async () => {
    if (Platform.OS === 'ios') {
      getCurrentLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          getCurrentLocation();
        } else {
          console.log('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  return (
    <ScrollView>
      <View
        style={[
          splashStyle.container,
          appStyle.padding_36,
          appStyle.h100Dimensions,
        ]}>
        <Text
          style={[updateProfileStyle.update_profile_heading, appStyle.mt_20]}>
          {"What's your name?"}
        </Text>
        <Text style={updateProfileStyle.update_profile_desc}>
          {'So that we know how to call you.'}
        </Text>

        <View>
          <Text style={updateProfileStyle.inputLableStyle}>
            First name
            <Text style={appStyle.text_red}> *</Text>
          </Text>
          <TextInput
            placeholderTextColor={Colors.GRAY_100}
            value={firstName}
            style={
              firstName
                ? updateProfileStyle.inputStyle
                : updateProfileStyle.inputPlaceholderStyle
            }
            onChangeText={value => setFirstName(value)}
            placeholder="First name "
          />
        </View>

        <View style={appStyle.mt_20}>
          <Text style={updateProfileStyle.inputLableStyle}>
            Pincode
            <Text style={appStyle.text_red}> *</Text>
          </Text>
          <TextInput
            placeholderTextColor={Colors.GRAY_100}
            maxLength={6}
            keyboardType="numeric"
            value={pincode}
            style={
              pincode
                ? updateProfileStyle.inputStyle
                : updateProfileStyle.inputPlaceholderStyle
            }
            onChangeText={value => setPincode(value)}
            placeholder="Pincode"
          />

          <TouchableOpacity
            style={[
              updateProfileStyle.locationBox,
              updateProfileStyle.boxShadow,
            ]}
            onPress={askPermission}>
            <View style={[appStyle.flex]}>
              <MaterialIcons
                name="gps-fixed"
                size={16}
                color={Colors.DARK_BLUE}
              />
              <Text style={updateProfileStyle.locationText}>
                Your current location
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={appStyle.mt_20}>
          <Text style={updateProfileStyle.inputLableStyle}>Referral Code</Text>
          <TextInput
            placeholderTextColor={Colors.GRAY_100}
            value={referralCode}
            style={
              referralCode
                ? updateProfileStyle.inputStyle
                : updateProfileStyle.inputPlaceholderStyle
            }
            onChangeText={value => setReferralCode(value)}
            placeholder="Referral Code"
          />
        </View>

        <View style={[appStyle.mt50Percent]}>
          <TouchableOpacity
            disabled={firstName && pincode ? false : true}
            onPress={handleSubmitBtn}
            style={
              firstName && pincode
                ? updateProfileStyle.appButtonContainer
                : updateProfileStyle.appButtonDisableContainer
            }>
            <Text
              style={
                firstName && pincode
                  ? [updateProfileStyle.appButtonText, appStyle.montserrat_bold]
                  : [
                    updateProfileStyle.appButtonDisableText,
                    appStyle.montserrat_bold,
                  ]
              }>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateProfileScreen;
