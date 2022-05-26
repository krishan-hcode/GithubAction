import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { appStyle } from "../../styles/app.style";
import { TransactionSuccessStyle } from "../../styles/transaction.style";

interface PaymentDetailsProps {
  visitingCharges: number;
  additionalDiscount: number;
  Taxes: number;
  toPay: number
}
const PaymentDetails: React.FC<PaymentDetailsProps> = (props) => {
  const {visitingCharges, additionalDiscount, Taxes, toPay} = props;
  return (
    <View>
      <View style={[TransactionSuccessStyle.subHeaders]}>
        <Text
          style={[appStyle.montserrat_semibold, TransactionSuccessStyle.subHeaderText]}
        >
          Payment Details
        </Text>
      </View>
      {/* Visiting Charges Section */}
      <View style={[appStyle.flex, TransactionSuccessStyle.infoBox]}>
        <View style={[TransactionSuccessStyle.leftInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox]}>
            <Text
              style={[
                appStyle.montserrat_semibold,
                TransactionSuccessStyle.paymentDetailsLabel
              ]}
            >
              Visiting charges
            </Text>
          </View>
        </View>
        <View style={[TransactionSuccessStyle.rightInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox, TransactionSuccessStyle.alignRight]}>
            <Text
              style={[
                appStyle.montserrat_semibold
              ]}>
                {`₹ ${visitingCharges.toFixed(2)}`}
              </Text>
          </View>
        </View>
      </View>
      {/* Additional Discount Section */}
      <View style={[appStyle.flex, TransactionSuccessStyle.infoBox]}>
        <View style={[TransactionSuccessStyle.leftInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox]}>
            <Text
              style={[
                appStyle.montserrat_semibold,
                TransactionSuccessStyle.paymentDetailsLabelDiscount
              ]}
            >
              Additional Discount
            </Text>
          </View>
        </View>
        <View style={[TransactionSuccessStyle.rightInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox, TransactionSuccessStyle.alignRight]}>
            <Text
              style={[
                appStyle.montserrat_semibold,
                TransactionSuccessStyle.paymentDetailsLabelDiscount
              ]}
            >
              {`₹ ${additionalDiscount.toFixed(2)}`}
            </Text>
          </View>
        </View>
      </View>
      {/* Taxes section */}
      <View style={[appStyle.flex, TransactionSuccessStyle.infoBox]}>
        <View style={[TransactionSuccessStyle.leftInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox]}>
            <Text
              style={[
                appStyle.montserrat_semibold,
                TransactionSuccessStyle.paymentDetailsLabel
              ]}
            >
              Taxes
            </Text>
          </View>
        </View>
        <View style={[TransactionSuccessStyle.rightInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox, TransactionSuccessStyle.alignRight]}>
            <Text
              style={[
                appStyle.montserrat_semibold
              ]}
              >
                {`₹ ${Taxes.toFixed(2)}`}
              </Text>
          </View>
        </View>
      </View>
      <View style={[TransactionSuccessStyle.divider]}/>
      <View style={[appStyle.flex, TransactionSuccessStyle.infoBox]}>
        <View style={[TransactionSuccessStyle.leftInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox]}>
            <Text
              style={[
                appStyle.montserrat_semibold
              ]}
            >
              To Pay
            </Text>
          </View>
        </View>
        <View style={[TransactionSuccessStyle.rightInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox, TransactionSuccessStyle.alignRight]}>
            <Text
              style={[appStyle.montserrat_semibold]}
            >
              {`₹ ${toPay.toFixed(2)}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PaymentDetails;