import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { BackHandler, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Octicons from 'react-native-vector-icons/Octicons';
import SearchComponent from '../../components/SearchComponent';
import { ProductModelProps } from '../../interface/interface';
import { appStyle } from '../../styles/app.style';
import { MyProductStyle } from '../../styles/MyProduct.style';
import { RaiseRequestStyle } from '../../styles/RaiseRequest.style';
import Colors from '../../utilites/Colors';
import { isEmpty, searchData } from '../../utilites/Utils';


const IssueModel: React.FC<ProductModelProps> = ({
  handleCloseModel,
  handleOnClickItem,
  inputValue,
  data,
  type,
}) => {

  const [selectedIssueList, setSelectedIssueList] = useState<any>(data.filter((item: any) => item.isChecked));
  const [issueList, setIssueList] = React.useState<any>(data);
  const [searchIssueList, setSearchIssueList] = React.useState<any>(data);
  const [other, setOther] = useState(inputValue);


  const handleOnChange = (text: string) => {
    if (!isEmpty(text)) {
      setIssueList(searchData(issueList, text))
    } else {
      setIssueList(searchIssueList);
    }
  };

  const handleMultipleItemSelected = (data: any, index: number) => {
    let newIssueList = issueList.map((item: any) => {
      if (data.id === item.id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    let newSearchIssueList = searchIssueList.map((item: any) => {
      if (data.id === item.id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setSearchIssueList(newSearchIssueList)
    setIssueList(newIssueList);
    setSelectedIssueList(newSearchIssueList.filter((item: any) => item.isChecked))
  };

  const handleConfirmBtn = () => {
    if (other) {
      let newIssueList = selectedIssueList.map((item: any) => {
        if ('Other' === item.title && item.isChecked === true) {
          return { ...item, title: other };
        }
        return item;
      });
      setSelectedIssueList(newIssueList)
      handleOnClickItem(newIssueList, other)
    } else {
      handleOnClickItem(selectedIssueList, other)
    }

  }

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        handleCloseModel()
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );
  return (

    <View style={appStyle.container}>
      <View style={MyProductStyle.headerBox}>
        <View style={[appStyle.flex, appStyle.mt_30]}>
          <TouchableOpacity onPress={handleCloseModel}>
            <Octicons
              style={appStyle.ml_20}
              name="chevron-left"
              size={28}
              color={Colors.BLACK}
            />
          </TouchableOpacity>
          <Text
            style={[
              MyProductStyle.headerNameText,
              appStyle.alignSelfCenter,
              appStyle.ml_40,
            ]}>
            Select {type}
          </Text>
        </View>
        <SearchComponent placeholder="Search Issues" handleOnChange={handleOnChange} />
      </View>
      <View style={[MyProductStyle.ModelBorderBottom]} />
      <ScrollView style={[appStyle.container]}>
        <View>

          {issueList.map((item: any, index: number) => (
            <View key={index}>
              <TouchableOpacity
                style={MyProductStyle.productModelListItem}
                onPress={() => handleMultipleItemSelected(item, index)}>
                <View style={[appStyle.flex, appStyle.alignItemsCenter]}>
                  <Checkbox
                    color={Colors.GREEN_100}
                    status={item.isChecked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      handleMultipleItemSelected(item, index)
                    }}
                  />
                  <Text
                    style={item.isChecked ? [MyProductStyle.modelListText, { color: Colors.GREEN_100 }] :
                      MyProductStyle.modelListText
                    }>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={[MyProductStyle.ModelBorderBottom]} />

              {item.title === 'Other' && item.isChecked &&
                <View style={appStyle.ph_8Percent}
                >
                  <TextInput
                    textAlignVertical='top'
                    numberOfLines={3}
                    multiline={true}
                    placeholderTextColor={Colors.GRAY_100}
                    value={other}
                    style={
                      other
                        ? RaiseRequestStyle.inputStyle
                        : RaiseRequestStyle.inputPlaceholderStyle
                    }
                    onChangeText={value => setOther(value)}
                    placeholder="Write Issue"
                  />
                </View>
              }
            </View>
          ))
          }
        </View>
      </ScrollView >

      <View style={[appStyle.mt_30, appStyle.padding_36]}>
        <TouchableOpacity
          onPress={handleConfirmBtn}
          disabled={selectedIssueList.length > 0 ? false : true}
          style={
            selectedIssueList.length > 0
              ? MyProductStyle.appButtonContainer
              : MyProductStyle.appButtonDisableContainer
          }>
          <Text
            style={
              selectedIssueList.length > 0
                ? [MyProductStyle.appButtonText]
                : [MyProductStyle.appButtonDisableText]
            }>
            Confirm Issue
          </Text>
        </TouchableOpacity>
      </View>
    </View >

  );
};

export default IssueModel;