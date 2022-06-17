import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { getApiRequest } from '../../api/apiHelpers';
import { apiRoutes } from '../../api/apiRoutes';
import config from '../../api/config';
import { washingMachine } from '../../assets/icons';
import Indicator from '../../components/Indicator';
import Loader from '../../components/Loader';
import { INDICATOR_LABELS } from '../../constants/app.constants';
import { appStyle } from '../../styles/app.style';
import { loginStyle } from '../../styles/loginScreen.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import { ProductDetailStyle } from '../../styles/ProductDetail.style';
import { RaiseRequestStyle } from '../../styles/RaiseRequest.style';
import Colors from '../../utilites/Colors';
import { toastMessage } from '../../utilites/Utils';
import IssueModel from '../Product/IssueModel';

type Navigation = {
  navigate: (value: string) => void;
};

const RaiseRequestSummary: React.FC<any> = () => {
  const route = useRoute<any>();
  const [productItem, setProductItem] = useState<any>('');
  const [isChooseIssue, setChooseIssue] = useState(false);
  const [issueList, setIssueList] = React.useState<any>([]);
  const [newIssueList, setNewIssueList] = React.useState<any>([]);

  const [otherInputText, setOtherInputText] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [productItemId, setProductItemId] = useState<any>('');
  const navigation = useNavigation<Navigation>();

  useFocusEffect(
    React.useCallback(() => {
      if (route.params) {
        callIssueListApi()
        setProductItemId(route.params.productId)
        getProductDetails(route.params.productId)
      }
    }, [route.params]),
  );

  const getProductDetails = async (id: string) => {
    setLoading(true)
    try {
      const response = await getApiRequest(config.BASE_URL_USER_MANAGEMENT + apiRoutes.ADD_PRODUCT + id)
      if (response) {
        setProductItem(response);
        setLoading(false)
      }
    } catch (error: any) {
      toastMessage(error?.message);
      setLoading(false)
    }
  };

  const callIssueListApi = async () => {
    try {
      const response = await getApiRequest(config.BASE_URL_MASTER + apiRoutes.MASTER + apiRoutes.ISSUE)
      if (response) {
        const otherPayload = {
          description: "Other",
          isChecked: false
        }
        const updateResponse = response.map((item: any) => {
          return { ...item, isChecked: false };
        });
        updateResponse.push(otherPayload)
        setNewIssueList(updateResponse);
      }
    } catch (error: any) {
      toastMessage(error?.message);
    }
  };

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
    const mergeIssueList = newIssueList.map((obj: any) => issueList.find((item: any) => item.id === obj.id) || obj)
    return mergeIssueList.map((item: any) => {
      if (otherInputText === item.description && item.isChecked === true) {
        return { ...item, description: "Other" };
      }
      return item;
    });
  }

  const handleProceedBtn = () => {
    navigation.navigate('raise-request-summary-detail', { productItem, issueList, otherInputText })
  };

  return (
    isLoading ? <Loader /> :
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
              <TouchableOpacity onPress={() => navigation.navigate('add-product', { productId: productItemId })}>
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
                    {productItem.product?.name}
                  </Text>
                </View>
                <View style={appStyle.w_50}>
                  <Text style={[RaiseRequestStyle.productTextDisable]}>
                    Nickname
                  </Text>
                  <Text style={[RaiseRequestStyle.productTextUnDisable]}>
                    {productItem.nickName}
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
                    {productItem.warrantyStatus ? 'Yes' : 'No'}
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
                {item.description}
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
