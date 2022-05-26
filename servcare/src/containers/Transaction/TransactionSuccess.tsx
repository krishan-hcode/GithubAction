import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { appStyle } from '../../styles/app.style';
import { TransactionSuccessStyle } from '../../styles/transaction.style';
import { NavigationProps } from '../../interface/interface';
import { Text } from 'react-native-elements';
import CheckBox from 'react-native-check-box';
import LottieView from 'lottie-react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ContactInfo from './contactInfo';
import TransactionDetails from './TransactionDetails';
import OrderDetails from './orderDetails';

type Navigation = {
  navigate: (value: string) => void;
};

const TransactionSuccess: React.FC<any> = () => {
  const navigation = useNavigation<NavigationProps>();
  const [isChecked, setIsChecked] = useState(false);

  const updateOnwhatsappHandler = () => {
    setIsChecked((prevState) => !prevState);
  }

  const trackOrderHandler = () => {

  }
  return (
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
                source={require("../../assets/animations/64787.json")}
                autoPlay
                loop
              />
            </View>
          </SafeAreaView>
          <View style={[TransactionSuccessStyle.justifyCenter]}>
            <Text style={[appStyle.montserrat_semibold ,TransactionSuccessStyle.orderStatus]}>Order Submitted</Text>
          </View>
          <View style={[TransactionSuccessStyle.justifyCenter]}>
            <Text 
              style={[appStyle.montserrat_regular, TransactionSuccessStyle.textAlignCenter]}
            >
              <Text style={[appStyle.montserrat_regular, TransactionSuccessStyle.transactionInfo]}>Thank you for your order! You can track the technician details in "</Text>
              <Text style={[appStyle.montserrat_regular ,TransactionSuccessStyle.trackStatus]}>Track Status</Text>
              <Text style={[appStyle.montserrat_regular, TransactionSuccessStyle.transactionInfo]}>" section.</Text>
            </Text>
          </View>
          <View style={[TransactionSuccessStyle.justifyCenter, appStyle.mt_15]}>
            <CheckBox
              isChecked={isChecked}
              onClick={updateOnwhatsappHandler}
            />
            <Text style={[appStyle.montserrat_regular]}>Keep me up to date on </Text>
            <FontAwesome5
              name="whatsapp-square"
              size={18}
              color={"#29A71A"}
            />
            <Text style={[appStyle.montserrat_regular, TransactionSuccessStyle.whatsappText]}> Whatsapp</Text>
          </View>
          <View style={[appStyle.mt_5, appStyle.padding_15]}>
            <TouchableOpacity
              onPress={trackOrderHandler}
              style={TransactionSuccessStyle.appButtonContainer}>
              <Text
                style={[TransactionSuccessStyle.appButtonText]}>
                Track Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <OrderDetails
          orderNumber="#123456789"
          paymentMode="NET Banking"
          orderDate={new Date()}
          appointmentDate= {new Date()}
        />
        <TransactionDetails
          transactionId="#123456777"
          transactionDate={new Date()}
        />
        <ContactInfo/>  
      </View>
    </ScrollView>
  );
};

export default TransactionSuccess;
