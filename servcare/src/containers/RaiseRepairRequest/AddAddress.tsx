import Geolocation from '@react-native-community/geolocation';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RadioButton } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { useDispatch, useSelector } from 'react-redux';
import { AREA, GOOGLE_API_KEY } from '../../constants/app.constants';
import { addAddress } from '../../redux/actions/appAction';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import { splashStyle } from '../../styles/splashScreen.style';
import { updateProfileStyle } from '../../styles/updateProfile.style';
import Colors from '../../utilites/Colors';

type Navigation = {
  navigate: (value: string) => void;
};

const AddAddress: React.FC<any> = ({
  handleCloseModel,
  handleOnClickItem
}) => {
  const loginUserInfo = useSelector<any>(state => state.app)
  const dispatch = useDispatch()
  const navigation = useNavigation<Navigation>();
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [landmark, setLandmark] = useState('');
  const [pincode, setPincode] = useState(loginUserInfo?.userInfo?.pincode);
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [addressType, setAddressType] = useState('');
  const [items, setItems] = useState(AREA);
  const [open, setOpen] = useState(false);

  const isValidation = () => {
    if (address1 && pincode && area && city && state && addressType) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    items.map((item) => (
      item.label === area ?
        (setCity(item.city),
          setState(item.state)
        ) : ''
    ))
  }, [area])

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        handleCloseModel()
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

  const handleSaveAddressBtn = () => {
    const payload = {
      addressLine1: address1,
      addressLine2: address2,
      addressType: addressType,
      landmark: landmark,
      pincode: pincode,
      area: area,
      city: city,
      state: state,
    }
    dispatch(addAddress(payload))
    handleOnClickItem(payload)
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
    <View style={[splashStyle.container]}>
      <View style={MyProductStyle.addProductHeaderBox}>
        <View style={[appStyle.flex, appStyle.mt9Percent]}>
          <TouchableOpacity
            onPress={handleCloseModel}
          >
            <Octicons
              style={appStyle.ml_20}
              name="chevron-left"
              size={28}
              color={Colors.BLACK}
            />
          </TouchableOpacity>
          <Text
            style={[
              MyProductStyle.headerNameText,
              appStyle.alignSelfCenter,
              appStyle.ml_40,
            ]}>
            Add Address
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={[appStyle.mt_20, appStyle.ph_6Percent]}>
          <Text style={updateProfileStyle.typeAddress}>
            Address Type
            <Text style={appStyle.text_red}> *</Text>
          </Text>

          <View style={[appStyle.mt_10]}>
            <RadioButton.Group
              onValueChange={newValue => setAddressType(newValue)}
              value={addressType}>
              <View style={[appStyle.flex]}>
                <View style={[appStyle.flex, appStyle.alignItemsCenter]}>
                  <RadioButton color={Colors.GREEN_100} value="Home" />
                  <Text style={updateProfileStyle.typeAddressOption}>Home</Text>
                </View>
                <View
                  style={[
                    appStyle.flex,
                    appStyle.alignItemsCenter,
                    appStyle.ml_20,
                  ]}>
                  <RadioButton color={Colors.GREEN_100} value="Work" />
                  <Text style={updateProfileStyle.typeAddressOption}>Work</Text>
                </View>

                <View
                  style={[
                    appStyle.flex,
                    appStyle.alignItemsCenter,
                    appStyle.ml_20,
                  ]}>
                  <RadioButton color={Colors.GREEN_100} value="Other" />
                  <Text style={updateProfileStyle.typeAddressOption}>Other</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <View style={appStyle.mt_20}>
            <Text style={updateProfileStyle.inputLableStyle}>
              Address Line 1
              <Text style={appStyle.text_red}> *</Text>
            </Text>
            <TextInput
              placeholderTextColor={Colors.GRAY_100}
              value={address1}
              style={
                address1
                  ? updateProfileStyle.inputStyle
                  : updateProfileStyle.inputPlaceholderStyle
              }
              onChangeText={value => setAddress1(value)}
              placeholder="Address Line 1 "
            />
          </View>

          <View style={appStyle.mt_20}>
            <Text style={updateProfileStyle.inputLableStyle}>
              Address Line 2
            </Text>
            <TextInput
              placeholderTextColor={Colors.GRAY_100}
              value={address2}
              style={
                address2
                  ? updateProfileStyle.inputStyle
                  : updateProfileStyle.inputPlaceholderStyle
              }
              onChangeText={value => setAddress2(value)}
              placeholder="Address Line 2 "
            />
          </View>

          <View style={appStyle.mt_20}>
            <Text style={updateProfileStyle.inputLableStyle}>
              Landmark
            </Text>
            <TextInput
              placeholderTextColor={Colors.GRAY_100}
              value={landmark}
              style={
                landmark
                  ? updateProfileStyle.inputStyle
                  : updateProfileStyle.inputPlaceholderStyle
              }
              onChangeText={value => setLandmark(value)}
              placeholder="Landmark "
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
            <Text style={updateProfileStyle.inputLableStyle}>
              Area
              <Text style={appStyle.text_red}> *</Text>
            </Text>
            <DropDownPicker
              placeholderStyle={updateProfileStyle.placeholderStyle}
              listParentContainerStyle={updateProfileStyle.listItemLabelStyle1}
              // searchable={true}
              listItemLabelStyle={updateProfileStyle.listItemLabelStyle}
              hideSelectedItemIcon={false}
              // autoScroll={true}
              labelStyle={updateProfileStyle.labelStyle}
              // containerStyle={updateProfileStyle.dropDownPickerStyle}
              style={updateProfileStyle.dropDownPickerStyle}
              open={open}
              value={area}
              placeholder="Select Area"
              items={items}
              setOpen={setOpen}
              setValue={setArea}
              setItems={setItems}
              ArrowDownIconComponent={() => (
                <AntDesign name="caretdown" size={16} color={Colors.GRAY_100} />
              )}
              ArrowUpIconComponent={() => (
                <AntDesign name="caretup" size={16} color={Colors.GRAY_100} />
              )}
            />
          </View>

          <View style={appStyle.mt_20}>
            <Text style={updateProfileStyle.inputLableStyle}>City
              <Text style={appStyle.text_red}> *</Text>
            </Text>
            <TextInput
              placeholderTextColor={Colors.GRAY_100}
              value={city}
              style={
                city
                  ? updateProfileStyle.inputStyle
                  : updateProfileStyle.inputPlaceholderStyle
              }
              onChangeText={value => setCity(value)}
              placeholder="City"
            />
          </View>

          <View style={appStyle.mt_20}>
            <Text style={updateProfileStyle.inputLableStyle}>State
              <Text style={appStyle.text_red}> *</Text>
            </Text>
            <TextInput
              placeholderTextColor={Colors.GRAY_100}
              value={state}
              style={
                state
                  ? updateProfileStyle.inputStyle
                  : updateProfileStyle.inputPlaceholderStyle
              }
              onChangeText={value => setState(value)}
              placeholder="State"
            />
          </View>

          <View style={[appStyle.mt_30, appStyle.mb_20,]}>
            <TouchableOpacity
              onPress={handleSaveAddressBtn}
              disabled={!isValidation()}
              style={
                isValidation()
                  ? MyProductStyle.appButtonContainer
                  : MyProductStyle.appButtonDisableContainer
              }>
              <Text
                style={
                  isValidation()
                    ? [MyProductStyle.appButtonText]
                    : [MyProductStyle.appButtonDisableText]
                }>
                Save Adress
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default AddAddress;
