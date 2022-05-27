import React from "react"
import { View } from "react-native"
import { Text } from "react-native-elements"
import { appStyle } from "../../styles/app.style"
import { TransactionSuccessStyle } from "../../styles/transaction.style"
import { getTimeStampFormatWithMeridiem } from "../../utilites/Utils"

interface OrderDetailsProps {
  orderNumber: string;
  paymentMode: string;
  orderDate: Date;
  appointmentDate: Date
}
const OrderDetails: React.FC<OrderDetailsProps> = (props) => {
  const {orderNumber, paymentMode, orderDate, appointmentDate} = props;
  return (
    <View>
      <View style={[TransactionSuccessStyle.subHeaders]}>
        <Text
          style={[appStyle.montserrat_semibold, TransactionSuccessStyle.subHeaderText]}
        >
          Order Details
        </Text>
      </View>
      <View style={[appStyle.flex, TransactionSuccessStyle.infoBox]}>
        <View style={[TransactionSuccessStyle.leftInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox]}>
            <Text style={[appStyle.montserrat_semibold, TransactionSuccessStyle.label]}>Order Number</Text>
            <Text style={[appStyle.montserrat_regular, TransactionSuccessStyle.value]}>{orderNumber}</Text>
          </View>
          <View style={[TransactionSuccessStyle.infoContentBox]}>
            <Text style={[appStyle.montserrat_semibold, TransactionSuccessStyle.label]}>Payment Mode</Text>
            <Text style={[appStyle.montserrat_regular, TransactionSuccessStyle.value]}>{paymentMode}</Text>
          </View>
        </View>
        <View style={[TransactionSuccessStyle.rightInfoBox]}>
          <View style={[TransactionSuccessStyle.infoContentBox, TransactionSuccessStyle.alignRight]}>
            <Text style={[appStyle.montserrat_semibold, TransactionSuccessStyle.label]}>Order Date</Text>
            <Text style={[appStyle.montserrat_regular, TransactionSuccessStyle.value]}>{getTimeStampFormatWithMeridiem(orderDate)}</Text>
          </View>
          <View style={[TransactionSuccessStyle.infoContentBox, TransactionSuccessStyle.alignRight]}>
            <Text style={[appStyle.montserrat_semibold, TransactionSuccessStyle.label]}>{'Appointment Date & Time'}</Text>
            <Text style={[appStyle.montserrat_regular, TransactionSuccessStyle.value]}>{getTimeStampFormatWithMeridiem(appointmentDate)}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default OrderDetails;