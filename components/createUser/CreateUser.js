import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';

import { createUser } from '../../@@redux/actions/userActions';
import styles from '../../styles/default';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      salary: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCreateUser() {
    return this.props.createUser({...this.state})
  }
  handleSubmit() {
    const { firstName, lastName, salary } = this.state;
    if (!firstName || !lastName || !salary) { return Alert.alert('Error', 'Please complete all fields') }
    Alert.alert(
      'Create New User?',
      `First Name: ${firstName}\n Last Name: ${lastName}\n Salary: ${salary}`,
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
          value={this.state.firstName}
          onChangeText={(firstName) => this.setState({ firstName })}
          placeholder="First Name"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          value={this.state.lastName}
          onChangeText={(lastName) => this.setState({ lastName })}
          placeholder="Last Name"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          value={this.state.salary}
          onChangeText={(salary) => this.setState({ salary })}
          placeholder="Salary"
          autoCorrect={false}
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