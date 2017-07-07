// import libraries for making a component
import React from 'react';
// add a View tag from the library which is basically like a div
import { Text, View } from 'react-native';

// make a component
  // name the component the same name as the file... use one file per component
  // header will be a child component of the "App" component we made in index.ios.js
  // only the root component we made in app makes
  // setting props in the parens is what enables me to set the custom headerText property
const Header = (props) => {
  // applies the styles constant setup below
  const { textStyle, viewStyle } = styles;

  // apply the style to the text tag using a prop (property)
  return (
    // view tag is like a div
    <View style={viewStyle}>
      {/* make the text be provided by the parent component rather than hard coding it*/}
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};


// make component available to other parts of the app
export { Header };
