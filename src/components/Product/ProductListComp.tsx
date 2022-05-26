/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ProductListItemProps} from '../../interface/interface';
import {appStyle} from '../../styles/app.style';
import {MyProductStyle} from '../../styles/MyProduct.style';

const ProductListComp: React.FC<ProductListItemProps> = ({
  handleOnClickItem,
  data,
  type,
}) => {
  const onButtonPress = (data: any) => {
    handleOnClickItem(data);
  };

  return (
    <View>
      <TouchableOpacity
        style={MyProductStyle.productModelListItem}
        onPress={() => onButtonPress(data)}>
        <View style={[appStyle.flex]}>
          {data.icon ? (
            <Image
              source={data.icon}
              style={[
                MyProductStyle.modelListIcon,
                appStyle.ml_20,
                type === 'Brand' && {width: 68},
              ]}
            />
          ) : null}
          <Text
            style={[
              MyProductStyle.modelListText,
              data.icon ? appStyle.ml_30 : appStyle.ml_10,
            ]}>
            {data.title}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={[MyProductStyle.ModelBorderBottom]} />
    </View>
  );
};

export default ProductListComp;
