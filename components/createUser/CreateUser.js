import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';

import styles from '../../styles/default';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      salary: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { firstName, lastName, salary } = this.state;
    if (!firstName || !lastName || !salary) { return Alert.alert('Error', 'Please complete all fields') }
    Alert.alert(
      'Create New User?',
      `First Name: ${firstName}\n Last Name: ${lastName}\n Salary: ${salary}`
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
        />

        <TextInput
          style={styles.input}
          value={this.state.lastName}
          onChangeText={(lastName) => this.setState({ lastName })}
          placeholder="Last Name"
        />

        <TextInput
          style={styles.input}
          value={this.state.salary}
          onChangeText={(salary) => this.setState({ salary })}
          placeholder="Salary"
        />
        <Button
          title="Create User"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}