import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';

//if you wanna pass an extra style next to the default style or override the existing style, you must defined style prop and add it to the component style={[styles.wrapper, style]}
const Container = ({style, children}) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;
