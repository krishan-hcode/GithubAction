/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { apiRoutes } from '../../api/apiRoutes';
import config from '../../api/config';
import { washingMachine } from '../../assets/icons';
import { ProductListItemProps } from '../../interface/interface';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import { replaceString } from '../../utilites/Utils';

const ProductListComp: React.FC<ProductListItemProps> = ({
  handleOnClickItem,
  data,
  type,
}) => {
  const onButtonPress = (data: any) => {
    handleOnClickItem(data);
  };
  const [valid, setValid] = useState(true)

  return (
    <View>
      <TouchableOpacity
        style={MyProductStyle.productModelListItem}
        onPress={() => onButtonPress(data)}>
        <View style={[appStyle.flex]}>

          {data.imageKey && data.imageKey !== 'dummyKey' ?
            <Image
              onError={() => setValid(false)}
              source={valid ? data.imageKey ? { uri: config.BASE_URL_MASTER + apiRoutes.MASTER + apiRoutes.S3_FILES + apiRoutes.DOWNLOAD + replaceString(data.imageKey) } : washingMachine : washingMachine}
              style={[
                MyProductStyle.modelListIcon,
                appStyle.ml_20,
                type === 'Brand' && { width: 68 },
              ]}
            />
            :
            <Image
              source={washingMachine}
              style={[
                MyProductStyle.modelListIcon,
                appStyle.ml_20,
                type === 'Brand' && { width: 68 },
              ]}
            />
          }
          <Text
            style={[
              MyProductStyle.modelListText,
              data.icon ? appStyle.ml_30 : appStyle.ml_10,
            ]}>
            {data.name}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={[MyProductStyle.ModelBorderBottom]} />
    </View>
  );
};

export default ProductListComp;
