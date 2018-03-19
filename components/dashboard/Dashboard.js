import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from '../../styles/default';

const Dashboard = () => (
  <View style={styles.container}>
    <View style={styles.titleWrap}>
      <Text style={styles.title}>Dashboard</Text>
    </View>
  </View>
)

export default Dashboard;