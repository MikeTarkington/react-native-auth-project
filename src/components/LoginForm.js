import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false};

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  // helper
  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  // helper
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '' // might be overkill since error message removal is handled elsewhere for login
    })
  }

  // helper
  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        login
      </Button>
    );
  }

  render() {
    return(
      <Card>
        <CardSection>
          {/* by default TextInputs are height and width 0 */}
          <Input
            placeholder="user@domain.com"
            label="Email:"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            />
        </CardSection>

        <CardSection>
          <Input
            // just listin a boolean prop will set it to the default of true
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
