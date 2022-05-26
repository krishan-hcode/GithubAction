/* eslint-disable @typescript-eslint/no-shadow */
import moment from 'moment';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { deleteIcon, pdf } from '../../assets/icons';
import { appStyle } from '../../styles/app.style';
import { ProductDetailStyle } from '../../styles/ProductDetail.style';
import { bytesToSize } from '../../utilites/Utils';

const ProductAttachmentComponent: React.FC<any> = ({
  handleOnClickItem,
  data,
  openDeletePopUp,
  index,
}) => {
  const onButtonPress = (data: any) => {
    handleOnClickItem(data);
  };

  return (
    <View>
      <TouchableOpacity
        style={[appStyle.justifyContentCenter, appStyle.mt_20]}
        onPress={() => onButtonPress(data)}>
        <View style={[appStyle.flex, appStyle.alignItemsCenter]}>
          <View style={appStyle.w_10}>
            {data.uri && data.type !== 'application/pdf' ? (
              <Image
                source={{
                  uri: data.uri,
                }}
                style={[ProductDetailStyle.attachmentIcon]}
              />
            ) : (
              <Image source={pdf} style={[ProductDetailStyle.attachmentIcon]} />
            )}
          </View>
          <View style={[ProductDetailStyle.margin_, appStyle.w_80]}>
            <Text style={[ProductDetailStyle.attachmentTitle]}>
              {data.fileName ? data.fileName : data.name}
            </Text>
            <Text style={[ProductDetailStyle.attachmentSize]}>
              {bytesToSize(data.fileSize ? data.fileSize : data.size)} &nbsp;
              <Text>{moment(new Date()).format('MMM DD, YYYY hh:mm A')}</Text>
            </Text>
          </View>
          <View style={[appStyle.w_10, appStyle.alignItemsEnd]}>
            <TouchableOpacity onPress={() => openDeletePopUp(index)}>
              <Image
                source={deleteIcon}
                style={[ProductDetailStyle.uploadIcon]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductAttachmentComponent;
