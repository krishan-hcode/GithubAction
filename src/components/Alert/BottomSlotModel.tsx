import moment from 'moment';
import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TIME_SLOT } from '../../constants/app.constants';
import { alertModelStyles } from '../../styles/alertModel.style';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import { RaiseRequestStyle } from '../../styles/RaiseRequest.style';
import { updateProfileStyle } from '../../styles/updateProfile.style';
import Colors from '../../utilites/Colors';
import { weeklyDateFormat } from '../../utilites/Utils';


const BottomSlotModel: React.FC<any> = ({
  actionProceedBtn,
  isOpen,
  onclose,
}) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(0);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<number>(-1);
  const [selectedDateTimeObject, setSelectedDateTimeObject] = useState<any>('');
  const handleUpdateDateObject = (dateObject: any, index: number) => {
    const payload = {
      date: moment(new Date(dateObject.date)).format("DD MMM YYYY")
    }
    setSelectedDateTimeObject({ ...selectedDateTimeObject, ...payload })
    setSelectedDateIndex(index)
  }

  const handleUpdateTimeObject = (timeObejct: any, index: number) => {
    const payload = {
      time: timeObejct.time
    }
    setSelectedDateTimeObject({ ...selectedDateTimeObject, ...payload })
    setSelectedTimeIndex(index)
  }


  return (
    <Modal visible={isOpen} transparent={true} animationType={'fade'}>
      <TouchableWithoutFeedback onPressOut={onclose}>
        <View style={[alertModelStyles.alertContainer]}>
          <View style={[alertModelStyles.alertBottomList]}>
            <View style={[alertModelStyles.alertAddressHeaderBox, appStyle.justifyContentCenter, { height: 60, }, appStyle.ph_8Percent]}>
              <View style={[appStyle.flex, appStyle.alignItemsCenter]}>
                <FontAwesome5 name="calendar-alt" size={18} color={Colors.WHITE} />
                <Text style={[alertModelStyles.alertDateTimeTitle, appStyle.ml_10]}>
                  Select Date & Time
                </Text>
              </View>
            </View>
            <View style={appStyle.ph_8Percent}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={weeklyDateFormat()}
                renderItem={({ item, index }) =>
                  <TouchableOpacity
                    onPress={() => (handleUpdateDateObject(item, index))}
                    key={index}>
                    <View style={[alertModelStyles.dateSlotBox, appStyle.mt_20, appStyle.alignItemsCenter]}>
                      <Text
                        style={[
                          RaiseRequestStyle.productTextUnDisable, (selectedDateIndex === index ? { color: Colors.GREEN_100 } : { color: Colors.BLACK }),
                          (index === 0 && { color: Colors.BLACK })
                        ]}>
                        {item.name.toUpperCase()}
                      </Text>
                      <Text
                        style={[
                          RaiseRequestStyle.productTextDisable, appStyle.mt_2, (selectedDateIndex === index ? { color: Colors.GREEN_100 } : { color: Colors.GRAY_700 }),
                          (index === 0 && { color: Colors.RED })
                        ]}>
                        {index == 0 ? 'No Slots Available' : `${index} Slots Available`}
                      </Text>
                      {selectedDateIndex === index && <View style={[alertModelStyles.alertBottomLine, appStyle.mt_5]} />}
                    </View>
                  </TouchableOpacity>}
              // keyExtractor={item => item.id}
              />
              <Text style={[MyProductStyle.modelListText, appStyle.mt_20, appStyle.mb_10]}>
                Select Time
              </Text>
              <FlatList
                showsVerticalScrollIndicator={true}
                numColumns={2}
                data={TIME_SLOT.slice(0, selectedDateIndex)}
                renderItem={({ item, index }) =>
                  <TouchableOpacity
                    onPress={() => handleUpdateTimeObject(item, index)}
                    key={index}>
                    <View style={[selectedTimeIndex === index ? alertModelStyles.selectedTimeSlotBox : alertModelStyles.unselectedTimeSlotBox]}>
                      <Text
                        style={[
                          RaiseRequestStyle.productTextUnDisable, (selectedTimeIndex === index ? { color: Colors.WHITE } : { color: Colors.GRAY_700 })
                        ]}>
                        {item.time}
                      </Text>
                    </View>
                  </TouchableOpacity>}
                keyExtractor={item => item.id}
              />
              <View style={[appStyle.mt_20, appStyle.mb_20]}>
                <TouchableOpacity
                  onPress={() => (actionProceedBtn(selectedDateTimeObject), onclose())}
                  disabled={selectedTimeIndex !== -1 ? false : true}
                  style={
                    selectedTimeIndex !== -1
                      ? updateProfileStyle.appButtonContainer
                      : updateProfileStyle.appButtonDisableContainer
                  }>
                  <Text
                    style={
                      selectedTimeIndex !== -1
                        ? [updateProfileStyle.appButtonText]
                        : [updateProfileStyle.appButtonDisableText]
                    }>
                    Proceed
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal >
  );
};

export default BottomSlotModel;
