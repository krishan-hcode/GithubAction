import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import { useSelector } from 'react-redux';
import { washingMachine } from '../../assets/icons';
import BottomAddressModel from '../../components/Alert/BottomAddressModel';
import BottomSlotModel from '../../components/Alert/BottomSlotModel';
import Indicator from '../../components/Indicator';
import { INDICATOR_LABELS, INSTRUCTION, ISSUE } from '../../constants/app.constants';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import { ProductDetailStyle } from '../../styles/ProductDetail.style';
import { RaiseRequestStyle } from '../../styles/RaiseRequest.style';
import Colors from '../../utilites/Colors';
import IssueModel from '../Product/IssueModel';
import AddAddress from './AddAddress';

type Navigation = {
  navigate: (value: string) => void;
};

const RaiseRequestSummaryDetail: React.FC<any> = () => {
  const loginUserInfo = useSelector<any>(state => state.app)
  const route = useRoute<any>();
  const [productItem, setProductItem] = useState<any>('');
  const [isChooseIssue, setChooseIssue] = useState(false);
  const [isAddressOpen, setAddressOpen] = useState(false);
  const [isAddressOption, setAddressOption] = useState(false);
  const [isDateSlot, setDateSlot] = useState(false);
  const [issueList, setIssueList] = React.useState<any>([]);
  const [otherInputText, setOtherInputText] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [timeSlot, setTimeSlot] = useState<any>('');
  const navigation = useNavigation<Navigation>();

  useEffect(() => {
    if (loginUserInfo && loginUserInfo.address.length > 0) {
      const defaultAddress = loginUserInfo.address[0];
      const address = defaultAddress.addressLine1 + ", " + defaultAddress.landmark + ", " + defaultAddress.city + "-" + defaultAddress.pincode + ", " + defaultAddress.state
      setSelectedAddress(address)
    }
  }, [loginUserInfo]);

  useEffect(() => {
    if (route.params) {
      setProductItem(route.params && route.params.productItem);
      setIssueList(route.params && route.params.issueList);
      setOtherInputText(route.params && route.params.otherInputText)
    }
  }, [route.params]);

  const handleOnClick = () => {
    setChooseIssue(true)
  }

  const handleCloseModel = () => {
    setChooseIssue(false)
  };

  const handleIssueOnClickItem = (selectedIssueList: any, otherInputText: string) => {
    setIssueList(selectedIssueList)
    setOtherInputText(otherInputText)
    setChooseIssue(false)
  };

  const handleAddressCloseModel = () => {
    setAddressOpen(false)
  };

  const handleAddressOnClick = (data: any) => {
    const address = data.addressLine1 + ", " + data.landmark + ", " + data.city + "-" + data.pincode + ", " + data.state
    setSelectedAddress(address)
    setAddressOpen(false)
  };

  const handleSlotOnClick = (dateTimeObject: any) => {
    setTimeSlot(dateTimeObject)
    setDateSlot(false)
  };

  const getIssueList = () => {
    const mergeIssueList = ISSUE.map(obj => issueList.find((item: any) => item.id === obj.id) || obj)

    return mergeIssueList.map((item: any) => {
      if (otherInputText === item.title && item.isChecked === true) {
        return { ...item, title: "Other" };
      }
      return item;
    });
  }
  const handleProceedBtn = () => {
    navigation.navigate('raise-request-confirmation', { productItem, timeSlot, address: selectedAddress })
  };

  return (
    <View style={appStyle.container}>
      <View style={MyProductStyle.raiseReqestHeaderBox}>
        <View style={[appStyle.flex, appStyle.mt9Percent]}>
          <TouchableOpacity onPress={() => navigation.navigate('raise-request-summary')}>
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
          <Indicator currentPosition={1} labels={INDICATOR_LABELS} />
        </View>
      </View>
      <View style={[MyProductStyle.bottomLine]} />

      {isAddressOpen &&
        <View style={[MyProductStyle.modelVisible]}>
          <AddAddress
            handleCloseModel={handleAddressCloseModel}
            handleOnClickItem={handleAddressOnClick}
          />
        </View>
      }


      {isChooseIssue &&
        <View style={[MyProductStyle.modelVisible]}>
          <IssueModel
            type='Issue'
            data={getIssueList()}
            inputValue={otherInputText}
            handleCloseModel={handleCloseModel}
            handleOnClickItem={handleIssueOnClickItem}
          />
        </View>
      }

      {isAddressOption && (
        <BottomAddressModel
          actionProceedBtn={handleAddressOnClick}
          actionAddAddressBtn={() => {
            setAddressOption(false)
            setAddressOpen(true)
          }}
          onclose={() => setAddressOption(false)}
          isOpen={isAddressOption}
        />
      )}

      {isDateSlot && (
        <BottomSlotModel
          actionProceedBtn={handleSlotOnClick}
          onclose={() => setDateSlot(false)}
          isOpen={isDateSlot}
        />
      )}
      <ScrollView>
        <View>
          <View style={[appStyle.mt_20, appStyle.ph_6Percent]}>
            <View style={[appStyle.flex]}>
              <View style={appStyle.w_50}>
                <Text style={[MyProductStyle.modelListText]}>Product Summary</Text>
              </View>
              <View style={[appStyle.w_50, appStyle.alignItemsEnd]}>
                <TouchableOpacity onPress={() => navigation.navigate('raise-request')}>
                  <Text style={[MyProductStyle.productSummaryEdit]}>Change Product</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={[appStyle.flex, appStyle.mt_15]}>
              <View style={[appStyle.w_10, appStyle.mt_10]}>
                <Image
                  source={washingMachine}
                  style={[ProductDetailStyle.productDetailIcon]}
                />
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
              </View>
            </View>
          </View>

          <View style={[MyProductStyle.bottomLine, appStyle.mt_15]} />
          <View style={[appStyle.mt_20, appStyle.mb_10, appStyle.flex, appStyle.ph_6Percent]}>
            <View style={appStyle.w_50}>
              <Text style={[MyProductStyle.modelListText]}>Facing Issue</Text>
            </View>
            <View style={[appStyle.w_50, appStyle.alignItemsEnd]}>
              <TouchableOpacity onPress={() => handleOnClick()}>
                <Text style={[MyProductStyle.productSummaryEdit]}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          {issueList.map((item: any, index: number) => (
            <View key={index}>
              <View style={[appStyle.flex, appStyle.ph_8Percent]}>
                <Text>{'\u2B24'}</Text>
                <Text
                  style={[
                    RaiseRequestStyle.issueText, appStyle.ml_10, appStyle.alignSelfCenter
                  ]}>
                  {item.title}
                </Text>
              </View>
            </View>
          ))}
          <View style={[MyProductStyle.bottomLine, appStyle.mt_15]} />
          <View style={[appStyle.mt_20, appStyle.mb_10, appStyle.ph_6Percent]}>
            <View style={appStyle.flex}>
              <View style={appStyle.w_50}>
                <Text style={[MyProductStyle.modelListText]}>Address</Text>
              </View>
              <View style={[appStyle.w_50, appStyle.alignItemsEnd]}>
                <TouchableOpacity
                  onPress={() => selectedAddress ? setAddressOption(true) : setAddressOpen(true)}
                >
                  <Text style={[MyProductStyle.productSummaryEdit]}>{selectedAddress ? 'Change' : 'Add Address'}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={[appStyle.mt_10, appStyle.ph_6Percent,
            (selectedAddress ? RaiseRequestStyle.issueText : [RaiseRequestStyle.productTextDisable, appStyle.alignSelfCenter])

            ]}>
              {selectedAddress ? selectedAddress : 'No Address Selected'}
            </Text>
          </View>

          <View style={[RaiseRequestStyle.slotBox, appStyle.mt_20, appStyle.mb_10, appStyle.ph_6Percent]}>
            <View style={appStyle.flex}>

              <View style={[appStyle.w_50, appStyle.alignSelfCenter]}>
                <TouchableOpacity onPress={() => setDateSlot(true)}>
                  <View style={[appStyle.flex, (timeSlot ? RaiseRequestStyle.selectedSlotBtnBox : RaiseRequestStyle.slotBtnBox)]}>
                    <FontAwesome5
                      name="calendar-alt"
                      size={timeSlot ? 20 : 16}
                      color={Colors.WHITE}
                    />
                    {timeSlot ?
                      <View>
                        <Text style={[ProductDetailStyle.attachmentTitle, appStyle.ml_10, { color: Colors.WHITE, textAlign: 'center' }, (timeSlot ? { fontFamily: 'Montserrat-SemiBold' } : {})]}>{timeSlot?.date}</Text>
                        <Text style={[ProductDetailStyle.attachmentTitle, appStyle.ml_10, { color: Colors.WHITE, textAlign: 'center' }]}>{timeSlot?.time}</Text>
                      </View>
                      :
                      <Text style={[ProductDetailStyle.attachmentTitle, appStyle.ml_10, { color: Colors.WHITE, textAlign: 'center' }]}>Book a slot</Text>
                    }
                  </View>
                </TouchableOpacity>
              </View>

              <View style={[appStyle.w_50, appStyle.alignItemsEnd]}>
                <TouchableOpacity onPress={() => handleOnClick()}>
                  <Text style={[ProductDetailStyle.attachmentTitle]}>Service charges</Text>
                  <Text style={[ProductDetailStyle.productSummary, appStyle.mt_5]}>
                    <Text>{'\u20B9'}</Text> 500.00</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[appStyle.mt_10, appStyle.mb_10, appStyle.flex, appStyle.ph_6Percent]}>
            <Text style={[MyProductStyle.modelListText]}>Instruction</Text>
          </View>
          {INSTRUCTION.map((item: any, index: number) => (
            <View key={index}>
              <View style={[appStyle.flex, appStyle.ph_8Percent]}>
                <Text>{'\u2B24'}</Text>
                <Text
                  style={[
                    RaiseRequestStyle.issueText, appStyle.ml_10, appStyle.alignSelfCenter
                  ]}>
                  {item.name}
                </Text>
              </View>
            </View>
          ))}
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
            Confirm Details
          </Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

export default RaiseRequestSummaryDetail;
