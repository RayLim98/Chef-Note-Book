import { View, Text } from 'react-native';
import React from 'react';

const CenterView = ({children}) => {
  return (
    <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        {children}
    </View>
  );
};

export default CenterView;