import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { television } from '../../assets/icons';
import { MyProductProps } from '../../interface/interface';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import Colors from '../../utilites/Colors';

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

  return (
    <View>
      <TouchableOpacity
        style={MyProductStyle.productModelListItem}
        onPress={() => onButtonPress(data)}>
        <View style={[appStyle.flex, appStyle.alignItemsCenter]}>
          <View>
            {/* {data.icon ? ( */}
            <Image
              // source={data.icon}
              source={television}
              style={[MyProductStyle.modelListIcon, appStyle.ml_20]}
            />
            {/* ) : null} */}
          </View>
          <View style={appStyle.ml_30}>
            <Text style={titleTextCss}>{data.product}</Text>
            <Text style={descTextCss}>{data.productNickname}</Text>
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
