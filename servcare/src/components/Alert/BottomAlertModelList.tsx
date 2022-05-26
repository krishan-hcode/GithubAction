import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {alertModelStyles} from '../../styles/alertModel.style';
import {appStyle} from '../../styles/app.style';
import {MyProductStyle} from '../../styles/MyProduct.style';
import Colors from '../../utilites/Colors';

const BottomAlertModelList: React.FC<any> = ({
  actionDeleteProduct,
  actionEditProduct,
  isOpen,
  onclose,
}) => {
  return (
    <Modal visible={isOpen} transparent={true} animationType={'fade'}>
      <TouchableWithoutFeedback onPressOut={onclose}>
        <View style={alertModelStyles.alertContainer}>
          <View style={alertModelStyles.alertBottomList}>
            <TouchableOpacity onPress={actionEditProduct}>
              <View
                style={[
                  appStyle.flex,
                  appStyle.mt_20,
                  appStyle.h_60,
                  appStyle.ph_8Percent,
                ]}>
                <Icon name="edit" size={16} color={Colors.BLACK} />
                <Text style={[MyProductStyle.modelListText, appStyle.ml_10]}>
                  Edit
                </Text>
              </View>
            </TouchableOpacity>
            <View style={[MyProductStyle.ModelBorderBottom]} />
            <TouchableOpacity onPress={actionDeleteProduct}>
              <View
                style={[
                  appStyle.flex,
                  appStyle.mt_20,
                  appStyle.h_60,
                  appStyle.ph_8Percent,
                ]}>
                <Icon name="delete" size={16} color={Colors.RED} />
                <Text
                  style={[
                    MyProductStyle.addProductText,
                    appStyle.ml_10,
                    {color: Colors.RED},
                  ]}>
                  Remove Product
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BottomAlertModelList;
