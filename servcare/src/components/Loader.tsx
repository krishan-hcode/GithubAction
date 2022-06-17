import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { appStyle } from '../styles/app.style';
import Colors from '../utilites/Colors';

const Loader: React.FC<any> = () => {
    return (
        <View
            style={[
                appStyle.container, appStyle.justifyContentCenter,
                appStyle.horizontal,
            ]}>
            <ActivityIndicator size="large" color={Colors.GREEN_100} />
        </View>
    );
};

export default Loader;
