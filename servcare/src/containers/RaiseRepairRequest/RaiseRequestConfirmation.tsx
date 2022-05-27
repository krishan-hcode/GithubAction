import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { washingMachine } from '../../assets/icons';
import Indicator from '../../components/Indicator';
import { INDICATOR_LABELS } from '../../constants/app.constants';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import { ProductDetailStyle } from '../../styles/ProductDetail.style';
import { RaiseRequestStyle } from '../../styles/RaiseRequest.style';
import Colors from '../../utilites/Colors';

type Navigation = {
  navigate: (value: string) => void;
};

const RaiseRequestConfirmation: React.FC<any> = () => {
  const route = useRoute<any>();
  const [productItem, setProductItem] = useState<any>('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [timeSlot, setTimeSlot] = useState<any>('');
  const navigation = useNavigation<Navigation>();

  useEffect(() => {
    if (route.params) {
      setProductItem(route.params && route.params.productItem);
      setTimeSlot(route.params && route.params.timeSlot)
      setSelectedAddress(route.params && route.params.address)
    }
  }, [route.params]);

  const handleProceedBtn = () => {
    navigation.navigate('failed-transaction');
  };

  return (
    <View style={appStyle.container}>
      <View style={MyProductStyle.raiseReqestHeaderBox}>
        <View style={[appStyle.flex, appStyle.mt9Percent]}>
          <TouchableOpacity onPress={() => navigation.navigate('raise-request-summary-detail')}>
            <Octicons
              style={appStyle.ml_20}
              name="chevron-left"
              size={28}
              color={Colors.BLACK}
            />
          </TouchableOpacity>
          <Text
            style={[
              MyProductStyle.headerNameText,
              appStyle.alignSelfCenter,
              appStyle.ml_40,
            ]}>
            Raise Repair Request
          </Text>
        </View>
        <View style={appStyle.mt_20}>
          <Indicator currentPosition={2} labels={INDICATOR_LABELS} />
        </View>
      </View>
      <View style={[MyProductStyle.bottomLine]} />

      <ScrollView>
        <View>
          <View style={[appStyle.mt_10, appStyle.ph_6Percent]}>
            <Text style={[MyProductStyle.modelListText]}>Product Summary</Text>
            <View style={[appStyle.flex, appStyle.mt_20]}>
              <View style={appStyle.w_10}>
                <View style={appStyle.alignItemsCenter}>
                  <Image
                    source={washingMachine}
                    style={[ProductDetailStyle.productDetailIcon]}
                  />
                  <View style={{
                    borderStyle: 'dotted',
                    height: 50,
                    borderLeftWidth: 2
                  }} />

                  <MaterialIcons
                    name="location-on"
                    size={28}
                    color={Colors.BLACK}
                  />

                  <View style={{
                    borderStyle: 'dotted',
                    height: 50,
                    borderLeftWidth: 2
                  }} />
                </View>
              </View>
              <View style={[appStyle.w_80, appStyle.ml_20]}>
                <View
                  style={[
                    appStyle.flex,
                    appStyle.alignItemsCenter,
                  ]}>
                  <View style={appStyle.w_50}>
                    <Text style={[RaiseRequestStyle.productTextDisable]}>
                      Product
                    </Text>
                    <Text style={[RaiseRequestStyle.productTextUnDisable]}>
                      {productItem.product}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    appStyle.flex,
                    appStyle.alignItemsCenter,
                    appStyle.mt_10,
                  ]}>
                  <View style={appStyle.w_50}>
                    <Text style={[RaiseRequestStyle.productTextDisable]}>
                      Warranty Status
                    </Text>
                    <Text style={[RaiseRequestStyle.dopTextDisable]}>
                      {productItem.warrantyStatus}
                    </Text>
                  </View>
                  <View style={appStyle.w_50}>
                    <Text style={[RaiseRequestStyle.productTextDisable]}>
                      Date of Purchase
                    </Text>
                    <Text style={[RaiseRequestStyle.dopTextDisable]}>
                      {productItem.purchaseDate ? moment(new Date(productItem.purchaseDate)).format('MMM DD, YYYY')
                        : ''}
                    </Text>
                  </View>
                </View>
                <View style={[appStyle.mt_30]}>
                  <Text style={[MyProductStyle.modelListText]}>Address</Text>
                  <Text style={[appStyle.mt_10, appStyle.ml_10, RaiseRequestStyle.issueText]}>
                    {selectedAddress}
                  </Text>
                </View>
              </View>
            </View>
            <View style={[appStyle.mt_10]}>
              <View style={[appStyle.flex, RaiseRequestStyle.slotBtnBox, { width: 260, paddingVertical: 6, }]}>
                <FontAwesome5
                  name="calendar-alt"
                  size={16}
                  color={Colors.WHITE}
                />
                <View>
                  <Text style={[ProductDetailStyle.attachmentTitle, appStyle.ml_10, { color: Colors.WHITE, textAlign: 'center' }]}>{timeSlot?.date + " " + timeSlot?.time}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[MyProductStyle.bottomLine, appStyle.mt_15]} />
          <View style={[appStyle.flex, appStyle.ph_6Percent, appStyle.alignItemsCenter]}>
            <View style={[appStyle.w_50]}>
              <View style={[appStyle.flex, appStyle.alignItemsCenter]}>

                <Image
                  source={require('../../assets/images/coupon.gif')}
                  style={{ width: 40, height: 50 }}
                />
                <Text style={[MyProductStyle.modelListText, appStyle.ml_15]}>Apply coupon</Text>
              </View>
            </View>
            <View style={[appStyle.w_50, appStyle.alignItemsEnd]}>
              <Text style={[MyProductStyle.productSummaryEdit]}>View Offers</Text>
            </View>
          </View>
          <View style={[MyProductStyle.bottomLine]} />
          <View style={appStyle.ph_6Percent}>
            <Text style={[MyProductStyle.modelListText, appStyle.mt_10]}>Payment details</Text>
            <View style={[appStyle.flex, appStyle.mt_10]}>
              <View style={appStyle.w_50}>
                <Text style={[ProductDetailStyle.attachmentTitle, { color: Colors.GRAY_800 }]}>Visiting charges</Text>
              </View>
              <View style={[appStyle.w_50, appStyle.alignItemsEnd]}>
                <Text style={[ProductDetailStyle.attachmentTitle]}><Text>{'\u20B9'}</Text> 500.00</Text>
              </View>
            </View>
            <View style={[appStyle.flex, appStyle.mt_10]}>
              <View style={appStyle.w_50}>
                <Text style={[ProductDetailStyle.attachmentTitle, { color: Colors.GRAY_800 }]}>Taxes</Text>
              </View>
              <View style={[appStyle.w_50, appStyle.alignItemsEnd]}>
                <Text style={[ProductDetailStyle.attachmentTitle]}><Text>{'\u20B9'}</Text> 80.00</Text>
              </View>
            </View>
            <View style={[MyProductStyle.bottomLine, appStyle.mb_10, appStyle.mt_10]} />
            <View style={[appStyle.flex]}>
              <View style={appStyle.w_50}>
                <Text style={[RaiseRequestStyle.productTextUnDisable]}>To Pay</Text>
              </View>
              <View style={[appStyle.w_50, appStyle.alignItemsEnd]}>
                <Text style={[RaiseRequestStyle.productTextUnDisable]}><Text>{'\u20B9'}</Text> 580.00</Text>
              </View>
            </View>
            <View style={[MyProductStyle.bottomLine, appStyle.mb_10, appStyle.mt_10]} />
          </View>
        </View>
      </ScrollView >
      <View style={[appStyle.mt_20, appStyle.mb_10, appStyle.ph_6Percent]}>
        <TouchableOpacity
          onPress={handleProceedBtn}
          disabled={timeSlot && selectedAddress ? false : true}
          style={
            timeSlot && selectedAddress
              ? MyProductStyle.appButtonContainer
              : MyProductStyle.appButtonDisableContainer
          }>
          <Text
            style={
              timeSlot && selectedAddress
                ? [MyProductStyle.appButtonText]
                : [MyProductStyle.appButtonDisableText]
            }>
            Proceed to Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

export default RaiseRequestConfirmation;
