import React, { Component } from 'react';
import { View, Text } from 'react-native';
// gets all the common components imported in one line via the index file and tweaks to the export of each of those components
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
