import React, { Component } from 'react';
import { View } from 'react-native';
// gets all the common components imported in one line via the index file and tweaks to the export of each of those components
import firebase from 'firebase';
import { Header, CardSection, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };
  // lifecycle method that is automatically called
  componentWillMount() {
    // inside of the initiaze copied form firebase web app code
    firebase.initializeApp({
      apiKey: "AIzaSyC3Kt2-mc7s1ZvqJhVLBwNjgCD3INkNw1M",
      authDomain: "react-native-authenticat-11467.firebaseapp.com",
      databaseURL: "https://react-native-authenticat-11467.firebaseio.com",
      projectId: "react-native-authenticat-11467",
      storageBucket: "react-native-authenticat-11467.appspot.com",
      messagingSenderId: "69199891115"
    });

    // handles both sign in and sign out
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn:  false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()}>logout</Button>
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <CardSection>
          {this.renderContent()}
        </CardSection>
      </View>
    );
  }
}

export default App;
