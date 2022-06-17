import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { useSelector } from 'react-redux';
import { postApiRequest } from '../../api/apiHelpers';
import { apiRoutes } from '../../api/apiRoutes';
import config from '../../api/config';
import Indicator from '../../components/Indicator';
import Loader from '../../components/Loader';
import MyProductComponent from '../../components/Product/MyProductComponent';
import { INDICATOR_LABELS } from '../../constants/app.constants';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import Colors from '../../utilites/Colors';
import { toastMessage } from '../../utilites/Utils';


type Navigation = {
  navigate: (value: string) => void;
};

const RaiseRepairRequest: React.FC<any> = () => {
  const loginUserInfo: any = useSelector<any>(state => state.app)
  const navigation = useNavigation<Navigation>();
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      getProductList()
    }, []),
  );

  const getProductList = async () => {
    const payload =
    {
      "pageSize": 100,
      "pageNumber": 1,
      "filters": [
        {
          "operator": "equal",
          "property": "status",
          "value": "Active"
        },
        {
          "operator": "equal",
          "property": "userId",
          "value": loginUserInfo.userId
        }
      ]
    }
    setLoading(true)
    try {
      const response = await postApiRequest(config.BASE_URL_USER_MANAGEMENT + apiRoutes.ADD_PRODUCT + apiRoutes.GET_BY_PAGINATION_FILTER, payload)
      if (response) {
        setProduct(response.records);
        setLoading(false)
      }
    } catch (error: any) {
      toastMessage(error?.message);
      setLoading(false)
    }
  };

  const handleOnClickItem = (productItem: any) => {
    navigation.navigate('raise-request-summary', { productId: productItem.id })
  };

  return (
    isLoading ? <Loader /> :
      <View style={[appStyle.container, appStyle.w_100]}>
        <View style={MyProductStyle.raiseReqestHeaderBox}>
          <View style={[appStyle.flex, appStyle.mt9Percent]}>
            <TouchableOpacity onPress={() => navigation.navigate('My Product')}>
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

        <View style={MyProductStyle.myAddProductBox}>
          <View style={[appStyle.w_50, MyProductStyle.myAddProductBox1, appStyle.alignSelfCenter, appStyle.alignItemsCenter, { backgroundColor: Colors.DARK_GREEN_100 }]}>
            <Text style={MyProductStyle.myAddProductBox3}> My Products</Text>
          </View>
          <TouchableOpacity
            style={[appStyle.w_50, appStyle.alignSelfCenter, appStyle.alignItemsCenter]}>
            <Text style={[MyProductStyle.myAddProductBox3, { color: Colors.DARK_GREEN_100 }]}> Add Products</Text>
          </TouchableOpacity>
        </View>
        <View style={[MyProductStyle.bottomLine, appStyle.mt_15]} />

        <FlatList
          style={appStyle.mt_5}
          data={product}
          renderItem={({ item }) => (
            <MyProductComponent
              titleTextCss={MyProductStyle.productListTitle}
              descTextCss={MyProductStyle.productListDesc}
              isForwardIcon={false}
              data={item}
              handleOnClickItem={handleOnClickItem}
            />
          )}
          keyExtractor={(item: any) => item.id}
        />
      </View>
  );
};

export default RaiseRepairRequest;
