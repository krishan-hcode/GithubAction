import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { apiRoutes } from '../../api/apiRoutes';
import config from '../../api/config';
import { washingMachine } from '../../assets/icons';
import { MyProductProps } from '../../interface/interface';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import Colors from '../../utilites/Colors';
import { replaceString } from '../../utilites/Utils';

const MyProductComponent: React.FC<MyProductProps> = ({
  handleOnClickItem,
  data,
  isForwardIcon,
  titleTextCss,
  descTextCss
}) => {
  const onButtonPress = (productItem: any) => {
    handleOnClickItem(productItem);
  };
  const [valid, setValid] = useState(true)


  return (
    <View>
      <TouchableOpacity
        style={MyProductStyle.productModelListItem}
        onPress={() => onButtonPress(data)}>
        <View style={[appStyle.flex, appStyle.alignItemsCenter]}>
          <View style={[appStyle.ml_20]}>
            {data.product && data.product.imageKey && data.product.imageKey !== 'dummyKey' ?
              <Image
                onError={() => setValid(false)}
                source={valid ? data.product ? data.product.imageKey ? { uri: config.BASE_URL_MASTER + apiRoutes.MASTER + apiRoutes.S3_FILES + apiRoutes.DOWNLOAD + replaceString(data.product.imageKey) } : washingMachine : washingMachine : washingMachine}
                style={[MyProductStyle.modelListIcon]}
              />
              :
              <Image
                source={washingMachine}
                style={[MyProductStyle.modelListIcon]}
              />
            }
          </View>
          <View style={appStyle.ml_30}>
            <Text style={titleTextCss}>{data.product?.name}</Text>
            <Text style={descTextCss}>{data.nickName}</Text>
          </View>
          {isForwardIcon && <View style={[appStyle.marginLeftAuto, appStyle.mr_10]}>
            <Octicons
              style={appStyle.ml_20}
              name="chevron-right"
              size={20}
              color={Colors.GRAY_500}
            />
          </View>
          }
        </View>

      </TouchableOpacity>
      <View style={[MyProductStyle.ModelBorderBottom]} />
    </View>
  );
};

export default MyProductComponent;
