import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCapitalize={'none'}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    height: 20,
    width: 100,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2 // proportion of space given to object
  },
  labelStyle:{
    fontSize: 18,
    paddingLeft: 20,
    flex: 1 // proportion of space given to object
  },
  containerStyle:{
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};


export { Input };
