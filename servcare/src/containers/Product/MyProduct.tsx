import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import PlusIcon from 'react-native-vector-icons/Octicons';
import { ScrollView } from 'react-native-virtualized-view';
import { useSelector } from 'react-redux';
import { postApiRequest } from '../../api/apiHelpers';
import { apiRoutes } from '../../api/apiRoutes';
import config from '../../api/config';
import Loader from '../../components/Loader';
import MyProductComponent from '../../components/Product/MyProductComponent';
import SearchComponent from '../../components/SearchComponent';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import Colors from '../../utilites/Colors';
import { toastMessage } from '../../utilites/Utils';


type Navigation = {
  navigate: (value: string) => void;
};

const MyProduct: React.FC<any> = () => {
  const loginUserInfo: any = useSelector<any>(state => state.app)
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation<Navigation>();
  const [product, setProduct] = useState<any>([]);
  const handleOnChange = (text: string) => {
    console.log('OnChange', text);
  };

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
    navigation.navigate('product-detail', { productId: productItem.id })
  };

  return (
    isLoading ? <Loader /> :
      <ScrollView style={appStyle.container}>
        <View style={[appStyle.bgColorWhite, appStyle.w_100]}>
          <View style={MyProductStyle.headerBox}>
            <Text
              style={[
                MyProductStyle.headerNameText,
                appStyle.alignSelfCenter,
                appStyle.mt9Percent,
              ]}>
              My Product
            </Text>
            <SearchComponent placeholder="Search Product" handleOnChange={handleOnChange} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('add-product')}>
            <View style={MyProductStyle.addProductBox}>
              <PlusIcon
                name="plus-circle"
                size={20}
                color={Colors.DARK_GREEN_200}
              />
              <Text style={MyProductStyle.addProductText}> Add Product</Text>
            </View>
          </TouchableOpacity>
          <View style={[MyProductStyle.bottomLine, appStyle.mt_15]} />

          <FlatList
            style={appStyle.mt_5}
            data={product}
            renderItem={({ item }) => (
              <MyProductComponent
                titleTextCss={MyProductStyle.productListTitle}
                descTextCss={MyProductStyle.productListDesc}
                isForwardIcon={true}
                data={item}
                handleOnClickItem={handleOnClickItem}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
  );
};

export default MyProduct;
