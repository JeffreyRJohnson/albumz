// Import libraries for making a component
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles: any = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15
  },
  textStyle: {
    fontSize: 20
  }
});

// Make the component avaliable to other parts of the app
export default Header;