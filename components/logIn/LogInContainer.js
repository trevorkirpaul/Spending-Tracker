import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, TextInput } from 'react-native';

import styles from '../../styles/default';
import { startLogin } from '../../@@redux/actions/auth';
import Login from './Login';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    // console.log(this.state)
    this.props.startLogin(this.state)
  }
  handle
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>Log In</Text>
        </View>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize={'none'}
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder="Password"
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize={'none'}
        />
        <Button
          title="Log In"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: user => dispatch(startLogin(user))
})

export default connect(null, mapDispatchToProps)(LoginContainer);