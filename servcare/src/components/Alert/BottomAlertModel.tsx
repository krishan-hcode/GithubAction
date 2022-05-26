import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal,
} from 'react-native';
import {alertModelStyles} from '../../styles/alertModel.style';
import {appStyle} from '../../styles/app.style';

const BottomAlertModel: React.FC<any> = ({
  handleNoBtnClick,
  isOpen,
  handleYesBtnClick,
  title,
  yesBtnText,
  noBtnText,
}) => {
  return (
    <Modal visible={isOpen} transparent={true} animationType={'fade'}>
      <TouchableWithoutFeedback onPressOut={handleNoBtnClick}>
        <View style={alertModelStyles.alertContainer}>
          <View style={alertModelStyles.alertBottom}>
            <Text style={[alertModelStyles.alertBottomTitle, appStyle.mt_25]}>
              {title}
            </Text>
            <View style={[appStyle.flex, appStyle.mt_30]}>
              <TouchableOpacity
                style={[appStyle.w_50]}
                onPress={handleNoBtnClick}>
                <View style={[alertModelStyles.btnNoContainer]}>
                  <Text style={[alertModelStyles.btnNoText]}>{noBtnText}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={appStyle.w_50}
                onPress={handleYesBtnClick}>
                <View style={[alertModelStyles.btnYesContainer]}>
                  <Text style={alertModelStyles.btnYesText}>{yesBtnText}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BottomAlertModel;
