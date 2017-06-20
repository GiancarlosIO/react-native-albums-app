import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Card = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 2,
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    position: 'relative'
  }
});

export default Card;
