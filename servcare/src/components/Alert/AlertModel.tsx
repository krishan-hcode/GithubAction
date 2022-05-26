import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {alertModelStyles} from '../../styles/alertModel.style';

const AlertModel: React.FC<any> = ({
  handleLaunchCamera,
  handleLaunchImageLibrary,
  handleClose,
  isOpen,
}) => {
  return (
    <Modal visible={isOpen} transparent={true} animationType={'fade'}>
      <TouchableWithoutFeedback onPressOut={handleClose}>
        <View style={alertModelStyles.alertContainer}>
          <View style={alertModelStyles.alertView}>
            <TouchableOpacity onPress={handleLaunchCamera}>
              <Text style={alertModelStyles.alertTitle}>Take Photo</Text>
            </TouchableOpacity>
            <View style={alertModelStyles.alertDivider} />
            <TouchableOpacity onPress={handleLaunchImageLibrary}>
              <Text style={alertModelStyles.alertTitle}>Choose a Document</Text>
            </TouchableOpacity>
            <View style={alertModelStyles.alertDivider} />
            <TouchableOpacity onPress={handleClose}>
              <Text style={alertModelStyles.alertTitle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AlertModel;
