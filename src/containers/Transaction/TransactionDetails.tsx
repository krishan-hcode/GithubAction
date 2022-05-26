import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { appStyle } from '../../styles/app.style';
import { TransactionSuccessStyle } from "../../styles/transaction.style";
import { getTimeStampFormatWithMeridiem } from "../../utilites/Utils";
 interface TransactionDetailsProps {
   transactionId: string;
   transactionDate: Date;
 }
const TransactionDetails: React.FC<TransactionDetailsProps> = (props) => {
  const {transactionId, transactionDate} = props
  return (
    <View>
      <View style={[TransactionSuccessStyle.subHeaders]}>
        <Text
          style={[appStyle.montserrat_semibold, TransactionSuccessStyle.subHeaderText]}
        >
          Transaction Details
        </Text>
      </View>
      <View style={[appStyle.flex, TransactionSuccessStyle.infoBox]}>
        <View style={[TransactionSuccessStyle.leftInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox]}>
            <Text style={[appStyle.montserrat_semibold, TransactionSuccessStyle.label]}>Transaction ID</Text>
            <Text style={[appStyle.montserrat_regular, TransactionSuccessStyle.value]}>{transactionId}</Text>
          </View>
        </View>
        <View style={[TransactionSuccessStyle.rightInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox, TransactionSuccessStyle.alignRight]}>
            <Text style={[appStyle.montserrat_semibold, TransactionSuccessStyle.label]}>Transaction Date</Text>
            <Text style={[appStyle.montserrat_regular, TransactionSuccessStyle.value]}>{getTimeStampFormatWithMeridiem(transactionDate)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default TransactionDetails;