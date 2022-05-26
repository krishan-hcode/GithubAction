import React, { useState } from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { default as MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { alertModelStyles } from '../../styles/alertModel.style';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import { ProductDetailStyle } from '../../styles/ProductDetail.style';
import { RaiseRequestStyle } from '../../styles/RaiseRequest.style';
import { updateProfileStyle } from '../../styles/updateProfile.style';
import Colors from '../../utilites/Colors';


const BottomAddressModel: React.FC<any> = ({
  actionProceedBtn,
  actionAddAddressBtn,
  isOpen,
  onclose,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [selectedAddress, setSelectedAddress] = useState('');
  const loginUserInfo = useSelector<any>(state => state.app)
  return (
    <Modal visible={isOpen} transparent={true} animationType={'fade'}>
      <TouchableWithoutFeedback onPressOut={onclose}>
        <View style={[alertModelStyles.alertContainer]}>
          <View style={[alertModelStyles.alertBottomList]}>
            <View style={[
              alertModelStyles.alertAddressHeaderBox,
              appStyle.ph_8Percent,
            ]}>
              <View
                style={appStyle.flex}>
                <MaterialIcons name="gps-fixed" size={16} color={Colors.WHITE} />
                <Text style={[MyProductStyle.modelListText, appStyle.ml_10, { color: Colors.WHITE }]}>
                  Select Address
                </Text>
              </View>
              <Text style={[ProductDetailStyle.dateOfPurchase, appStyle.mt_5, { color: Colors.WHITE }]}>
                Granting location permission will ensure accurate address and hassle free service.
              </Text>
            </View>
            <View style={appStyle.ph_8Percent}>

              <Text style={[MyProductStyle.modelListText, appStyle.mt_20, appStyle.mb_10]}>
                Saved Address
              </Text>

              {loginUserInfo.address.slice(0, 3).map((item: any, index: number) => (
                <TouchableOpacity
                  onPress={() => (setSelectedIndex(index), setSelectedAddress(item))}
                  key={index}>
                  <View style={selectedIndex === index ? alertModelStyles.alertSelectedAddressListBox : alertModelStyles.alertUnselectedAddressListBox}>

                    <View
                      style={appStyle.flex}>
                      {item.addressType === "Home" && <Entypo name="home" size={16} color={Colors.GREEN_100} />}
                      <Text
                        style={[
                          MyProductStyle.selectText, appStyle.ml_10
                        ]}>
                        {item.addressType}
                      </Text>
                    </View>
                    <Text
                      style={[RaiseRequestStyle.issueText, appStyle.mt_2, (item.addressType === "Home" ? appStyle.ml_26 : appStyle.ml_10)]}>
                      {item.addressLine1 + ", " + item.landmark + ", " + item.city + "-" + item.pincode + ", " + item.state
                      }
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}

              <TouchableOpacity onPress={actionAddAddressBtn}>
                <View
                  style={[
                    appStyle.flex,
                    appStyle.mt_20,
                  ]}>
                  <Entypo name="plus" size={16} color={Colors.GREEN_100} />
                  <Text
                    style={[
                      MyProductStyle.addProductText,
                      appStyle.ml_10,
                      { color: Colors.GREEN_100 },
                    ]}>
                    Add Address
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={[appStyle.mt_20, appStyle.mb_20]}>
                <TouchableOpacity
                  onPress={() => (actionProceedBtn(selectedAddress), onclose())}
                  disabled={selectedIndex !== -1 ? false : true}
                  style={
                    selectedIndex !== -1
                      ? updateProfileStyle.appButtonContainer
                      : updateProfileStyle.appButtonDisableContainer
                  }>
                  <Text
                    style={
                      selectedIndex !== -1
                        ? [updateProfileStyle.appButtonText]
                        : [updateProfileStyle.appButtonDisableText]
                    }>
                    Select & Proceed
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BottomAddressModel;
