import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import styles from '../../styles/default';

const Login = () => (
  <View style={styles.container}>
    <View style={styles.titleWrap}>
      <Text style={styles.title}>Log In</Text>
    </View>
  </View>
)

export default Login;