import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { useSelector } from 'react-redux';
import Indicator from '../../components/Indicator';
import MyProductComponent from '../../components/Product/MyProductComponent';
import { INDICATOR_LABELS } from '../../constants/app.constants';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import Colors from '../../utilites/Colors';

type Navigation = {
  navigate: (value: string) => void;
};

const RaiseRepairRequest: React.FC<any> = () => {
  const ProductList = useSelector<any>(state => state.product.data);
  const navigation = useNavigation<Navigation>();
  const [product, setProduct] = useState(ProductList);

  useEffect(() => {
    setProduct(ProductList);
  }, [ProductList]);

  const handleOnClickItem = (productItem: any) => {
    navigation.navigate('raise-request-summary', { productId: productItem.id })
  };

  return (
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
        <TouchableOpacity style={[appStyle.w_50, appStyle.alignSelfCenter, appStyle.alignItemsCenter]}>
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
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default RaiseRepairRequest;
