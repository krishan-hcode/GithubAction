import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { useSelector } from 'react-redux';
import { washingMachine } from '../../assets/icons';
import Indicator from '../../components/Indicator';
import { INDICATOR_LABELS, ISSUE } from '../../constants/app.constants';
import { appStyle } from '../../styles/app.style';
import { loginStyle } from '../../styles/loginScreen.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import { ProductDetailStyle } from '../../styles/ProductDetail.style';
import { RaiseRequestStyle } from '../../styles/RaiseRequest.style';
import Colors from '../../utilites/Colors';
import IssueModel from '../Product/IssueModel';

type Navigation = {
  navigate: (value: string) => void;
};

const RaiseRequestSummary: React.FC<any> = () => {
  const ProductList: any = useSelector<any>(state => state.product.data);
  const route = useRoute<any>();
  const [productItem, setProductItem] = useState<any>('');
  const [isChooseIssue, setChooseIssue] = useState(false);
  const [issueList, setIssueList] = React.useState<any>([]);
  const [otherInputText, setOtherInputText] = useState('');

  const navigation = useNavigation<Navigation>();

  useEffect(() => {
    if (route.params) {
      const data = ProductList.find((item: any) => {
        return item.id == route.params.productId
      })
      setProductItem(data);
    }
  }, [route.params, ...ProductList]);

  const selectField = (
    title: string,
    placeholderValue: string,
    handleOnClick: any,
    isRightSide: boolean
  ) => {
    return (
      <View style={[MyProductStyle.FieldBox, appStyle.alignItemsCenter]}>
        <View style={appStyle.w_50}>
          <Text style={[MyProductStyle.inputLableStyle]}>
            {title}
            <Text style={appStyle.text_red}> *</Text>
          </Text>
        </View>
        <View style={[appStyle.w_50]}>
          <TouchableOpacity
            style={isRightSide && appStyle.alignItemsEnd}
            onPress={() => handleOnClick()}
          >
            <View style={MyProductStyle.selectBox}>
              <Text style={MyProductStyle.unSelectText}>
                {placeholderValue}
              </Text>
              <Octicons
                style={appStyle.ml_10}
                name="chevron-right"
                size={24}
                color={Colors.DARK_GREEN_200}
              />
            </View>
          </TouchableOpacity>

        </View>
      </View>
    );
  };

  const handleOnClick = () => {
    console.log("onClick")
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
    navigation.navigate('raise-request-summary-detail', { productItem, issueList, otherInputText })
  };

  return (
    <View style={appStyle.container}>
      <View style={MyProductStyle.raiseReqestHeaderBox}>
        <View style={[appStyle.flex, appStyle.mt9Percent]}>
          <TouchableOpacity onPress={() => navigation.navigate('raise-request')}>
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
          <Indicator currentPosition={0} labels={INDICATOR_LABELS} />
        </View>
      </View>
      <View style={[MyProductStyle.bottomLine]} />
      <View style={[appStyle.mt_20, appStyle.ph_6Percent]}>
        <View style={[appStyle.flex]}>
          <View style={appStyle.w_50}>
            <Text style={[MyProductStyle.modelListText]}>Product Summary</Text>
          </View>
          <View style={[appStyle.w_50, appStyle.alignItemsEnd]}>
            <TouchableOpacity onPress={() => navigation.navigate('add-product', { productId: productItem.id })}>
              <Text style={[MyProductStyle.productSummaryEdit]}>Edit</Text>
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
              <View style={appStyle.w_50}>
                <Text style={[RaiseRequestStyle.productTextDisable]}>
                  Nickname
                </Text>
                <Text style={[RaiseRequestStyle.productTextUnDisable]}>
                  {productItem.productNickname}
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
            <View
              style={[
                appStyle.flex,
                appStyle.alignItemsCenter,
                appStyle.mt_10,
              ]}>
              <View style={appStyle.w_50}>
                <Text style={[RaiseRequestStyle.productTextDisable]}>
                  Serial No
                </Text>
                <Text style={[ProductDetailStyle.productStatusText]}>
                  {productItem.serialNo}
                </Text>
              </View>
              <View style={appStyle.w_50}>
                <Text style={[RaiseRequestStyle.productTextDisable]}>
                  Model No
                </Text>
                <Text style={[ProductDetailStyle.productStatusText]}>
                  {productItem.modelNo}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={[MyProductStyle.bottomLine, appStyle.mt_15]} />
      {selectField('Select Issue', issueList.length > 0 ? 'Add More' : 'Select', handleOnClick, issueList.length > 0 ? true : false)}
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

      <View style={[loginStyle.bottomBox]}>
        <TouchableOpacity
          onPress={handleProceedBtn}
          disabled={issueList.length > 0 ? false : true}
          style={
            issueList.length > 0
              ? MyProductStyle.appButtonContainer
              : MyProductStyle.appButtonDisableContainer
          }>
          <Text
            style={
              issueList.length > 0
                ? [MyProductStyle.appButtonText]
                : [MyProductStyle.appButtonDisableText]
            }>
            Proceed
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default RaiseRequestSummary;
