import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { ScrollView } from 'react-native-virtualized-view';
import { useDispatch } from 'react-redux';
import BottomAlertModel from '../components/Alert/BottomAlertModel';
import SearchComponent from '../components/SearchComponent';
import { userLogout } from '../redux/actions/appAction';
import { appStyle } from '../styles/app.style';
import { MyProductStyle } from '../styles/MyProduct.style';
import Colors from '../utilites/Colors';


type Navigation = {
  navigate: (value: string) => void;
};

const Profile: React.FC<any> = () => {
  const [isLogout, setLogout] = useState(false);


  const dispatch = useDispatch();
  const navigation = useNavigation<Navigation>();
  const handleOnChange = (text: string) => {
    console.log('OnChange', text);
  };


  const handleLogoutBtn = () => {
    setLogout(false)
    dispatch(userLogout())
    navigation.navigate('login')
  };

  return (
    <ScrollView style={appStyle.container}>
      <View style={[appStyle.bgColorWhite, appStyle.w_100]}>
        <View style={MyProductStyle.headerBox}>
          <Text
            style={[
              MyProductStyle.headerNameText,
              appStyle.alignSelfCenter,
              appStyle.mt9Percent,
            ]}>
            My Profile
          </Text>
          <SearchComponent placeholder='Search Product' handleOnChange={handleOnChange} />
        </View>

        {isLogout && (
          <BottomAlertModel
            title={`Are you sure you want to logout ?`}
            noBtnText={'No'}
            yesBtnText={'Yes, Logout'}
            handleYesBtnClick={handleLogoutBtn}
            handleNoBtnClick={() => setLogout(false)}
            isOpen={isLogout}
          />
        )}
        {/* <View style={[MyProductStyle.bottomLine]} /> */}

        <TouchableOpacity
          style={MyProductStyle.productModelListItem}
          onPress={() => setLogout(!isLogout)}
        >
          <View style={[appStyle.flex, appStyle.alignItemsCenter]}>
            <View style={appStyle.ml_30}>
              <Text style={[MyProductStyle.productListTitle]}>Logout</Text>
            </View>
            <View style={[appStyle.marginLeftAuto, appStyle.mr_10]}>
              <Octicons
                style={appStyle.ml_20}
                name="chevron-right"
                size={20}
                color={Colors.GRAY_500}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={[MyProductStyle.ModelBorderBottom]} />
      </View>
    </ScrollView>
  );
};

export default Profile;
