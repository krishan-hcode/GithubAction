import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {homeStyles} from '../styles/homeScreen.style';

const HomeServices: React.FC<{data: any}> = ({data}) => {
  return (
    <View style={[homeStyles.listBox]}>
      <TouchableOpacity style={[homeStyles.listItem, homeStyles.shadow]}>
        <View>
          <Image source={data.icon} style={homeStyles.listIcon} />
        </View>
      </TouchableOpacity>
      <Text style={homeStyles.listText}>{data.title}</Text>
    </View>
  );
};

export default HomeServices;
