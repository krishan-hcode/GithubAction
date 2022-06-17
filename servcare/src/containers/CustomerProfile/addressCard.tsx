import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { Address, NavigationProps } from "../../interface/interface";
import { deleteAddress } from "../../redux/actions/appAction";
import { appStyle } from "../../styles/app.style";
import { viewAddressStyles } from "../../styles/viewAddress.style";

interface AddressCardProps {
  address: Address;
}
const AddressCard: React.FC<AddressCardProps> = (props) => {
  const {address} = props;
  const dispatch = useDispatch();
  const appUserInfo = useSelector<any>(state => state.app);
  const navigation = useNavigation<NavigationProps>();
  const resolve = (value) => {
    return value ? `${value.trim()}, ` : ''
  }
  const getAddressLine1 = () => {
    return address
    ? `${resolve(address.addressLine1)}${resolve(address.addressLine2)}`
    : '--'
  }

  const getAddressLine2 = () => {
    return address
    ? `${resolve(address.landmark)}${resolve(address.area)}${address.city} - ${address.pincode}`
    : '--'
  }

  const editAddressHandler = () => {
    const param = {
      headerLabel: 'Edit Address',
      address: address
    }
    navigation.navigate('add-edit-address', param);
  }

  const deleteAddressHandler= () => {
    dispatch(deleteAddress(address));
  }

  const renderAddress = () => (
    <View style={[viewAddressStyles.addressContainer]}>
      <Text
        style={[
          appStyle.montserrat_semibold,
          viewAddressStyles.addressType
        ]}
      >
        {address?.addressType}
      </Text>
      <Text
        style={[
          appStyle.montserrat_medium,
          viewAddressStyles.address
        ]}
      >
        {getAddressLine1()}
      </Text>
      <Text
        style={[
          appStyle.montserrat_medium,
          viewAddressStyles.address
        ]}
      >
        {getAddressLine2()}
      </Text>
      <View style={[viewAddressStyles.actionButtonContainer]}>
        <TouchableOpacity
          style={[viewAddressStyles.actionButton]}
          onPress={editAddressHandler}
        >
          <Text style={[viewAddressStyles.editButton]}>
            EDIT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[viewAddressStyles.actionButton]}
          onPress={deleteAddressHandler}
        >
          <Text style={[viewAddressStyles.deleteButton]}>
            DELETE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
  return (
    <View>
      {address && renderAddress()}
    </View>
  )
}

export default AddressCard;