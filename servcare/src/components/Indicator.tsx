import React from 'react';
import { View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Octicons from 'react-native-vector-icons/Octicons';
import Colors from '../utilites/Colors';
const customStyles = {
  stepIndicatorSize: 23,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: Colors.GREEN_100,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: Colors.GREEN_100,
  stepStrokeUnFinishedColor: Colors.GRAY,
  separatorFinishedColor: Colors.GREEN_100,
  separatorUnFinishedColor: Colors.GRAY,
  stepIndicatorFinishedColor: Colors.GREEN_100,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 11,
  currentStepIndicatorLabelFontSize: 11,
  stepIndicatorLabelCurrentColor: Colors.GREEN_100,
  stepIndicatorLabelFinishedColor: Colors.GREEN_100,
  stepIndicatorLabelUnFinishedColor: Colors.GREEN_100,
  labelColor: Colors.BLACK,
  labelSize: 13,
  currentStepLabelColor: Colors.GREEN_100,
  labelFontFamily: 'Montserrat-SemiBold'
}

const Indicator: React.FC<any> = ({
  currentPosition,
  labels
}) => {
  return (
    <View>
      <StepIndicator
        stepCount={labels.length}
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        renderStepIndicator={({ position }) => (<Octicons
          name="dot-fill"
          size={17}
          color={Colors.GRAY}
        />)}
      />
    </View>
  );
};

export default Indicator;
