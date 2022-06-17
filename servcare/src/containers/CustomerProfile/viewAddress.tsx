import { useNavigation } from "@react-navigation/native";
import React from "react"
import { TouchableOpacity, View } from "react-native"
import { Text } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native-virtualized-view";
import { useSelector } from "react-redux";
import { Address, NavigationProps } from "../../interface/interface";
import { appStyle } from "../../styles/app.style";
import { viewAddressStyles } from "../../styles/viewAddress.style";
import AddressCard from "./addressCard";
import HeaderNavigantion from "./headerNavinagtion";

const mockAddress1: Address = {
  addressType: 'Home',
  addressLine1: 'SEZ Unit Building',
  addressLine2: 'Rajiv Gandhi Infotech Park',
  landmark: 'Infosys Circle',
  area: 'Hinjewadi',
  pincode: 411057,
  city: "Pune",
  state: "Maharashtra"
}

const ViewAddress: React.FC<any> = () => {
  const navigation = useNavigation<NavigationProps>();
  const appUserInfo = useSelector<any>(state => state.app);
  const addNewAddressHandler = () => {
    const param = {
      headerLabel: 'Add Address',
      address: null
    }
    navigation.navigate('add-edit-address', param)
  }
  return (
    <View style={[appStyle.container]}>
      <HeaderNavigantion 
        label="My Address"
      />
      <View style={[viewAddressStyles.addressListContainer]}>
        <ScrollView>
          {appUserInfo?.address && (
            appUserInfo?.address?.map((address: Address) => (
              address?.addressLine1
              ? <AddressCard address={address} />
              : null
            ))
          )}
          {appUserInfo?.address
            && appUserInfo?.address.length === 1
            && !appUserInfo?.address[0].addressType
            && (
            <View style={[viewAddressStyles.noAddressMessageContainer]}>
              <Text
                style={[
                  appStyle.montserrat_medium,
                  viewAddressStyles.noAddressText
                ]}
              >
                No Address found in your
              </Text>
              <Text
                style={[
                  appStyle.montserrat_medium,
                  viewAddressStyles.noAddressText
                  ]}
              >
                address book
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
      <View style={[viewAddressStyles.addNewButtonContainer]}>
        <View style={[appStyle.mt_20, appStyle.mb_10, appStyle.ph_6Percent]}>
          <TouchableOpacity
            onPress={addNewAddressHandler}
            style={viewAddressStyles.addNewButton}>
            <FontAwesome5
              name={'map-marker-alt'}
              size={16}
              color={"#86C63D"}
              solid
            />
            <Text
              style={[viewAddressStyles.appButtonText]}
            >
                Add New
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>   
  )
}

export default ViewAddress;