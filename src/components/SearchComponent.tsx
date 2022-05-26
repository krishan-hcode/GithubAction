import React from 'react';
import { View } from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import { homeStyles } from '../styles/homeScreen.style';
import Colors from '../utilites/Colors';

const SearchComponent: React.FC<any> = ({
  handleOnChange,
  placeholder
}) => {

  return (
    <View>
      <SearchBar
        // spinnerVisibility={isSpinner}
        placeholder={placeholder}
        placeholderTextColor={Colors.GRAY_100}
        style={[homeStyles.searchBarShadowStyle]}
        textInputStyle={homeStyles.textInputStyle}
        onChangeText={(text: any) => handleOnChange(text)}
        onSearchPress={() => console.log('Search Icon is pressed')}
        searchIconComponent={
          <Icon name="md-search-sharp" size={19} color={Colors.GRAY_100} />
        }
        clearIconComponent={
          <Icon name="close" size={19} color={Colors.GRAY_100} />
        }
        onClearPress={() => handleOnChange()}
      />
    </View>
  );
}

export default SearchComponent;
