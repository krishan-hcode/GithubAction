import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { ScrollView } from 'react-native-virtualized-view';
import ProductListComp from '../../components/Product/ProductListComp';
import SearchComponent from '../../components/SearchComponent';
import { ProductModelProps } from '../../interface/interface';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import Colors from '../../utilites/Colors';

const ProductModel: React.FC<ProductModelProps> = ({
  handleCloseModel,
  handleOnClickItem,
  data,
  type,
}) => {
  const handleOnChange = (text: string) => {
    console.log('OnChange', text);
  };
  return (
    <ScrollView style={appStyle.container}>
      <View style={[appStyle.bgColorWhite, appStyle.w_100]}>
        <View style={MyProductStyle.headerBox}>
          <View style={[appStyle.flex, appStyle.mt_30]}>
            <TouchableOpacity onPress={handleCloseModel}>
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
              Select {type}
            </Text>
          </View>
          <SearchComponent placeholder="Search Product" handleOnChange={handleOnChange} />
        </View>
        <View style={[MyProductStyle.ModelBorderBottom]} />
        <FlatList
          style={appStyle.mt_5}
          data={data}
          renderItem={({ item }) => (
            <ProductListComp
              type={type}
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

export default ProductModel;
