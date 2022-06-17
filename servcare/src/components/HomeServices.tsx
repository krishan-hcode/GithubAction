import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { homeStyles } from '../styles/homeScreen.style';
import { SERVICES } from '../constants/app.constants';


const HomeServices: React.FC<{ data: any, index: number }> = ({ data, index }) => {
  return (
    <View style={[homeStyles.listBox]}>
      <TouchableOpacity style={[homeStyles.listItem, homeStyles.shadow]}>
        <View>
          <Image source={SERVICES[index].icon} style={homeStyles.listIcon} />
        </View>
      </TouchableOpacity>
      <Text style={homeStyles.listText}>{data.type}</Text>
    </View>
  );
};

export default HomeServices;
