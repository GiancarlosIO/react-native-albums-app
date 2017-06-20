import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

const Button = ({ onPress, children }) => {

  return  (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.text}>
        { children }
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3498db'
  },
  text: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '600'
  }
})

export default Button;