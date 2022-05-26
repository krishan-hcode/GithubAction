import React from "react"
import { View } from "react-native"
import { appStyle } from '../../styles/app.style';
import { TransactionSuccessStyle } from "../../styles/transaction.style"
import { Text } from 'react-native-elements';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ContactInfo: React.FC<any> = () => {
  return (
    <View>
      <View style={[TransactionSuccessStyle.subHeaders]}>
        <Text
          style={[appStyle.montserrat_semibold, TransactionSuccessStyle.subHeaderText]}
        >
          Contact Servcare
        </Text>
      </View>
      <View style={[appStyle.flex, TransactionSuccessStyle.infoBox]}>
        <View style={[TransactionSuccessStyle.leftInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox]}>
            <Text style={[appStyle.montserrat_semibold, TransactionSuccessStyle.label]}>Email</Text>
            <View style={[TransactionSuccessStyle.contactInfo]}>
              <FontAwesome5
                name="envelope"
                size={16}
                color={"#86C63D"}
                solid
                style={{padding: 5}}
              />
              <Text style={[appStyle.montserrat_semibold, TransactionSuccessStyle.value]}> services@servcare.com</Text>
            </View>
          </View>
        </View>
        <View style={[TransactionSuccessStyle.rightInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox, TransactionSuccessStyle.alignRight]}>
            <Text style={[appStyle.montserrat_semibold, TransactionSuccessStyle.label]}>Contact Number</Text>
            <View style={[TransactionSuccessStyle.contactInfo]}>
              <FontAwesome5
                name="phone-alt"
                size={16}
                color={"#86C63D"}
                solid
                style={{padding: 5}}
              />
              <Text style={[appStyle.montserrat_semibold, TransactionSuccessStyle.value]}> +91-9876543210</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ContactInfo