import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";
import { useSelector } from "react-redux";
import { NavigationProps } from "../../interface/interface";
import { appStyle } from "../../styles/app.style";
import { customerProfileStyles } from "../../styles/customerProfile.style";
import { ProductDetailStyle } from "../../styles/ProductDetail.style";
import Colors from "../../utilites/Colors";
import DetailItem from "./DetailItem";
import EditProfileForm from "./editProfileForm";

const ViewProfile: React.FC<any> = () => {
  const loginUserInfo = useSelector<any>(state => state.app);
  const navigation = useNavigation<NavigationProps>();
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
  const getInitial=(value: string)=> {
    if(value) {
      return value.charAt(0).toUpperCase();
    }
    return '?'
  }

  const editProfileHandler = () => {
    setIsEditingProfile(true);
  }

  const updateDetailsHandler = () => {
    setIsEditingProfile(false);
  }
  return (
    <View style={[appStyle.container]}>
      <View style={[appStyle.flex, customerProfileStyles.header]}>
        <TouchableOpacity
          style={[appStyle.w_10]}
          onPress={() => navigation.goBack()}>
          <Octicons name="chevron-left" size={24} color={Colors.WHITE} />
        </TouchableOpacity>
        <View style={appStyle.w_80}>
          <Text style={[appStyle.montserrat_semibold, customerProfileStyles.headerTitle]}>
            {'Profile Details'}
          </Text>
        </View>
      </View>
      <View style={[customerProfileStyles.customerInfoBox]}>
        <View style={[customerProfileStyles.customerInitialsBox]}>
          <Text
            style={[
              appStyle.montserrat_bold,
              customerProfileStyles.customerInitialsText
            ]}
          >
            {getInitial(loginUserInfo?.userInfo?.firstName)}
          </Text>
        </View>
      </View>
      <View style={[customerProfileStyles.customerDetailsContainer]}>
        <ScrollView>
          <View
            style={[
              customerProfileStyles.customerInfoCard,
              customerProfileStyles.shadow
            ]}
          >
            <DetailItem iconName={"address-card"} label={"Customer ID"} value={"12345678"} />
            <DetailItem iconName={"phone-alt"} label={"Mobile Number"} value={"+91-9876543210"} />
          </View>
          {!isEditingProfile && (
          <View
            style={[
              customerProfileStyles.customerInfoCard,
              customerProfileStyles.shadow
            ]}
          >
            <View style={[appStyle.alignItemsEnd]}>
              <TouchableOpacity
                onPress={editProfileHandler}
              >
                <Text style={[appStyle.montserrat_semibold,customerProfileStyles.editProfileButton ]}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
            <DetailItem iconName={"user"} label={"First Name"} value={loginUserInfo?.userInfo?.firstName} />
            <DetailItem iconName={""} label={"Last Name"} value={loginUserInfo?.userInfo?.lastName} />
            <DetailItem iconName={"envelope"} label={"Email Address"} value={loginUserInfo?.userInfo?.email} />
            <DetailItem iconName={"phone-alt"} label={"Alternate Mobile Number"} value={`+91-${loginUserInfo?.userInfo?.alternateMobileNumber}`} />
          </View>
          )}
          {isEditingProfile && (
            <EditProfileForm
              userDetails={loginUserInfo?.userInfo} 
              onConfirm={updateDetailsHandler}
            />
          )}
        </ScrollView>
      </View>
    </View>
  )
}

export default ViewProfile;