import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import PlusIcon from 'react-native-vector-icons/Octicons';
import { ScrollView } from 'react-native-virtualized-view';
import { useSelector } from 'react-redux';
import MyProductComponent from '../../components/Product/MyProductComponent';
import SearchComponent from '../../components/SearchComponent';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import Colors from '../../utilites/Colors';

type Navigation = {
  navigate: (value: string) => void;
};

const MyProduct: React.FC<any> = () => {
  const ProductList: any = useSelector<any>(state => state.product.data);
  const navigation = useNavigation<Navigation>();
  const [product, setProduct] = useState(ProductList);
  const handleOnChange = (text: string) => {
    console.log('OnChange', text);
  };

  useEffect(() => {
    setProduct(ProductList);
  }, [ProductList]);

  const handleOnClickItem = (productItem: any) => {
    navigation.navigate('product-detail', { productId: productItem.id })
  };

  return (
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
