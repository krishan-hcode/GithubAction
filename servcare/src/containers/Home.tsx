import React from 'react';
import { FlatList, Text, View } from 'react-native';
// @ts-ignore
import Dots from 'react-native-dots-pagination';
import FontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-virtualized-view';
import { useSelector } from 'react-redux';
import { apiGetHook } from '../api/apiGetHook';
import { apiRoutes } from '../api/apiRoutes';
import config from '../api/config';
import HomeAppliances from '../components/HomeAppliances';
import HomeServices from '../components/HomeServices';
import SearchComponent from '../components/SearchComponent';
import { HOME_APPLIANCES } from '../constants/app.constants';
import { appStyle } from '../styles/app.style';
import { homeStyles } from '../styles/homeScreen.style';
import Colors from '../utilites/Colors';

const Home: React.FC<any> = () => {
  const loginUserInfo: any = useSelector<any>(state => state.app)
  const [serviceList, serviceListLoading] = apiGetHook(config.BASE_URL_MASTER + apiRoutes.MASTER + apiRoutes.SERVICE);
  const handleOnChange = (text: string) => {
    console.log('OnChange', text);
  };
  return (
    <ScrollView style={appStyle.container}>
      <View style={[appStyle.bgColorWhite, appStyle.w_100]}>
        <View style={homeStyles.headerBox}>
          <View style={homeStyles.headerTitleIconBox}>
            <View style={appStyle.w_50}>
              <Text style={homeStyles.headerHelloText}>
                Hello
                <Text style={homeStyles.headerNameText}> {loginUserInfo?.userInfo?.firstName} ,</Text>
              </Text>
            </View>
            <View style={[appStyle.w_50, appStyle.alignItemsEnd]}>
              <FontAwesome5 name="bell" size={19} color={Colors.WHITE} />
              <View style={homeStyles.notificationBox}>
                <Text style={homeStyles.notificationText}>2</Text>
              </View>
            </View>
          </View>
          <SearchComponent placeholder="Search Product" handleOnChange={handleOnChange} />
        </View>

        <FlatList
          style={[appStyle.mtNeg60, appStyle.ml_10]}
          horizontal
          data={HOME_APPLIANCES}
          renderItem={({ item }) => <HomeAppliances data={item} />}
          keyExtractor={item => item.id}
        />

        <Dots
          length={5}
          active={1}
          passiveColor={Colors.LIGHT_GREEN_200}
          activeColor={Colors.GREEN_100}
        // marginHorizontal={5}
        />

        <Text
          style={[homeStyles.listTextHeading, appStyle.mt_20, appStyle.mb_20]}>
          Explore our services
        </Text>
        <View style={[homeStyles.servicesBox]}>
          <FlatList
            showsVerticalScrollIndicator={true}
            numColumns={3}
            // data={SERVICES}
            data={serviceList}
            renderItem={({ item, index }) => <HomeServices data={item} index={index} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
