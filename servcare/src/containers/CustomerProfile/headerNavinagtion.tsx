import { useNavigation } from "@react-navigation/native"
import React from "react"
import { TouchableOpacity, View } from "react-native"
import { Text } from "react-native-elements"
import Octicons from "react-native-vector-icons/Octicons"
import { NavigationProps } from "../../interface/interface"
import { appStyle } from "../../styles/app.style"
import { viewAddressStyles } from "../../styles/viewAddress.style"
import Colors from "../../utilites/Colors"

interface HeaderNavigantionProps {
  label: string;
}

const HeaderNavigantion: React.FC<HeaderNavigantionProps> = (props) => {
  const {label} = props;
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={[appStyle.flex, viewAddressStyles.header, viewAddressStyles.bottomShadow]}>
      <TouchableOpacity
        style={[appStyle.w_10]}
        onPress={() => navigation.goBack()}>
        <Octicons name="chevron-left" size={24} color={Colors.BLACK} />
      </TouchableOpacity>
      <View style={appStyle.w_80}>
        <Text style={[appStyle.montserrat_semibold, viewAddressStyles.headerTitle]}>
          {label}
        </Text>
      </View>
    </View>
  )
}

export default HeaderNavigantion