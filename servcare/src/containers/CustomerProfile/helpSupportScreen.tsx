import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import Octicons from "react-native-vector-icons/Octicons";
import { NavigationProps } from "../../interface/interface";
import { appStyle } from "../../styles/app.style";
import { helpSupportStyles } from "../../styles/helpSupportStyle";
import Colors from "../../utilites/Colors";
import LottieView from 'lottie-react-native';
import { TextInput } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native-virtualized-view";

const mockFaq = [
  {id: 1, faq: 'I want to change my mobile number?'},
  {id: 2, faq: 'Where can I check my saved address?'},
  {id: 3, faq: 'I want to change my email address?'},
  {id: 4, faq: 'Do I have to pay for the service under warranty?'},
]
const HelpSupportScreen: React.FC<any> = () => {
  const navigation = useNavigation<NavigationProps>();

  const Item = (faq: string) => (
    <View style={[helpSupportStyles.faqContainer]}>
      <Text style={[appStyle.montserrat_regular, helpSupportStyles.question]}>{faq}</Text>
      <Octicons name="chevron-right" size={24} color={Colors.GRAY} />
    </View>
  );
  return (
    <View style={[appStyle.container]}>
      <View style={[appStyle.flex, helpSupportStyles.header]}>
        <TouchableOpacity
          style={[appStyle.w_10]}
          onPress={() => navigation.goBack()}>
          <Octicons name="chevron-left" size={24} color={Colors.BLACK} />
        </TouchableOpacity>
        <View style={appStyle.w_80}>
          <Text style={[appStyle.montserrat_semibold, helpSupportStyles.headerTitle]}>
            {"Help & Support"}
          </Text>
        </View>
      </View>
      <SafeAreaView>
        <View style={[helpSupportStyles.animationView]}>
          <LottieView
            source={require("../../assets/animations/75586.json")}
            autoPlay
            loop
          />
        </View>
      </SafeAreaView>
      <View style={[helpSupportStyles.askQuestionBox]}>
        <TextInput
          style={[helpSupportStyles.askQuestionTextInput, helpSupportStyles.shadow]}
          placeholder="Ask a question?"
        />
        <View style={[helpSupportStyles.goButton,helpSupportStyles.shadow]}>
          <Octicons
            style={appStyle.ml_20}
            name="arrow-right"
            size={26}
            color={Colors.WHITE}
          />
        </View>
      </View>
      <View style={[helpSupportStyles.contentContainer,]}>
        <Text style={[appStyle.montserrat_bold, helpSupportStyles.faqHeader]}>Most asked questions</Text>
        <ScrollView>
          {Item(mockFaq[0].faq)}
          {Item(mockFaq[1].faq)}
          {Item(mockFaq[2].faq)}
          {Item(mockFaq[3].faq)}
          {Item(mockFaq[0].faq)}
          {Item(mockFaq[1].faq)}
          {Item(mockFaq[2].faq)}
          {Item(mockFaq[3].faq)}
        </ScrollView>
      </View>
      <View style={[helpSupportStyles.chatButtonContainer]}>
        <View style={[appStyle.mt_20, appStyle.mb_10, appStyle.ph_6Percent]}>
          <TouchableOpacity
            onPress={()=>{}}
            style={helpSupportStyles.chatButton}>
            <FontAwesome5
              name={'headset'}
              size={18}
              color={"#86C63D"}
              solid
            />
            <Text
              style={[helpSupportStyles.appButtonText]}
            >
                CHAT WITH US
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default HelpSupportScreen;