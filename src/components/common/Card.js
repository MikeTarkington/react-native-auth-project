import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    // applies the styles const to the view tag
    <View style={styles.containerStyle}>
      {/* gets the album details to appear within card which is rendred on index */}
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2, // round out the shadow edges to match the radius overall
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
