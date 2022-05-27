import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {appStyle} from '../styles/app.style';
import {homeAppliancesStyles} from '../styles/homeAppliances.style';

const HomeAppliances: React.FC<{data: any}> = ({data}) => {
  return (
    <View
      style={[
        homeAppliancesStyles.parentBox,
        homeAppliancesStyles.parentBoxShadow,
      ]}>
      <View style={appStyle.flex}>
        <View style={appStyle.w_50}>
          <Text style={homeAppliancesStyles.textHeading}>{data.title}</Text>
          <Text style={homeAppliancesStyles.textDesc}>{data.desc}</Text>

          <TouchableOpacity style={homeAppliancesStyles.appButtonContainer}>
            <Text style={homeAppliancesStyles.appButtonText}>
              View Services
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[appStyle.w_50]}>
          <View style={[homeAppliancesStyles.imgBox]}>
            <Image source={data.icon} style={homeAppliancesStyles.imgIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeAppliances;
