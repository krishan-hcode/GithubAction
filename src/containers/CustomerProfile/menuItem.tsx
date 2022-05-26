import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { NavigationProps } from "../../interface/interface";
import { appStyle } from "../../styles/app.style";
import { customerLandingScreenStyles } from "../../styles/customerLandingScreen.style";

interface ManuItemProps {
  label: string;
  iconName: string;
  navigateTo: string;
}
const MenuItem: React.FC<ManuItemProps> = (props) => {
  const {label, iconName, navigateTo} = props;
  const navigation = useNavigation<NavigationProps>();

  const navigationHandler = () => {
    navigation.navigate(navigateTo);
  }
  return (
    <View
      style={[customerLandingScreenStyles.menuItem]}
    >
      <TouchableOpacity
        onPress={navigationHandler}
        style={[customerLandingScreenStyles.menuContent]}
      >
        <FontAwesome5
            name={iconName}
            size={25}
            color={"#86C63D"}
            solid
            style={{padding: 5}}
        />
        <Text style={[appStyle.montserrat_semibold]}>{label}</Text>
        </TouchableOpacity>
    </View>
  );
}

export default MenuItem;