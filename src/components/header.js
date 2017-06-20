import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title} >{ title }</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 5
  },
  title: {
    fontSize: 24,
    color: '#2ecc71'
  }
});

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;