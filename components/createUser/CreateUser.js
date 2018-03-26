import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';

import { createUser } from '../../@@redux/actions/userActions';
import styles from '../../styles/default';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCreateUser() {
    return this.props.createUser({...this.state})
  }
  handleSubmit() {
    const { email, password, confirm_password } = this.state;
    if (!email || !password || !confirm_password) { return Alert.alert('Error', 'Please complete all fields') }
    if (password !== confirm_password) { return Alert.alert('Error', 'Passwords do not match') }
    Alert.alert(
      'Create New User?',
      `Email: ${email}`,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.handleCreateUser()}
      ],
      { cancelable: false }
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>Create A New User</Text>
        </View>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize='none'
        />

        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize='none'
        />

        <TextInput
          style={styles.input}
          value={this.state.confirm_password}
          onChangeText={(confirm_password) => this.setState({ confirm_password })}
          placeholder="Enter Password Again"
          autoCorrect={false}
          autoCapitalize='none'
        />
        <Button
          title="Create User"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user))
})
export default connect(null, mapDispatchToProps)(CreateUser)