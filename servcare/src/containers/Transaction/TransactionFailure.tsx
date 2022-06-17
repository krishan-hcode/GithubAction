import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import { appStyle } from "../../styles/app.style";
import { TransactionSuccessStyle } from "../../styles/transaction.style";
import ContactInfo from "./contactInfo";
import TransactionDetails from "./TransactionDetails";
import LottieView from 'lottie-react-native';
import { NavigationProps } from '../../interface/interface';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import PaymentDetails from "./paymentDetails";

const TransactionFailure: React.FC<any> = () => {
  const navigation = useNavigation<NavigationProps>();
  const payNowHandler = () => {
    navigation.navigate('successful-transaction');
  }
  return (
    <View style={appStyle.container}>
      <ScrollView>
        <View>
          <View style={[TransactionSuccessStyle.transactionHeaderBox]}>
            <View style={[appStyle.flex]}>
              <View style={[appStyle.w_100, appStyle.alignItemsEnd]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Home')}
                >
                  <Icon
                    name="close"
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <SafeAreaView>
              <View style={[TransactionSuccessStyle.animationView]}>
                <LottieView
                  source={require("../../assets/animations/94303.json")}
                  autoPlay
                  loop
                />
              </View>
            </SafeAreaView>
            <View style={[TransactionSuccessStyle.justifyCenter]}>
              <Text style={[appStyle.montserrat_semibold ,TransactionSuccessStyle.orderStatus]}>Oops, Payment Failed</Text>
            </View>
            <View style={[appStyle.mb_10, TransactionSuccessStyle.justifyCenter]}>
              <Text 
                style={[appStyle.montserrat_regular,TransactionSuccessStyle.textAlignCenter]}
              >
                <Text style={[appStyle.montserrat_regular ,TransactionSuccessStyle.transactionInfo]}>Payment for Order ID PU22091209 could not be proceed </Text>
                <Text style={[appStyle.montserrat_regular ,TransactionSuccessStyle.tryAgain]}>Try Again</Text>
                <Text>.</Text>
              </Text>
            </View>
          </View>
          <ContactInfo/>
          <TransactionDetails
            transactionId="#123456777"
            transactionDate={new Date()}
          />
          <PaymentDetails
            visitingCharges={500}
            additionalDiscount={-50}
            Taxes={80}
            toPay={530}
          />
        </View>
      </ScrollView>
      <View style={[appStyle.mt_20, appStyle.mb_10, appStyle.ph_6Percent]}>
        <TouchableOpacity
          onPress={payNowHandler}
          style={TransactionSuccessStyle.payNowButton}>
          <Text
            style={[TransactionSuccessStyle.appButtonText]}>
            Pay Now
          </Text>
        </TouchableOpacity>
    </View>
  </View>
  )
}

export default TransactionFailure;