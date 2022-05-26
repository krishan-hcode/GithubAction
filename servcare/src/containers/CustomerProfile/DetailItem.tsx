import React from "react"
import { View } from "react-native"
import { Text } from "react-native-elements"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { appStyle } from "../../styles/app.style"
import { customerProfileStyles } from "../../styles/customerProfile.style"

interface DetailItemProps {
  iconName: string;
  label: string;
  value: string;
}
const DetailItem: React.FC<DetailItemProps> = (props) => {
  const {iconName, label, value} = props;
  return (
    <View style={[customerProfileStyles.detailsBox]}>
      <View style={[customerProfileStyles.detailsIcon]}>
        <FontAwesome5
          name={iconName}
          size={25}
          color={"#86C63D"}
          solid
          style={{padding: 5}}
        />
      </View>
      <View style={[customerProfileStyles.details]}>
        <Text
          style={[
            appStyle.montserrat_regular,
            customerProfileStyles.detailsLabel
          ]}
        >
          {label}
        </Text>
        <Text
          style={[
            appStyle.montserrat_semibold,
            customerProfileStyles.detailsValue
          ]}
        >
          {value}
        </Text>
      </View>
    </View>
  )
}

export default DetailItem;
