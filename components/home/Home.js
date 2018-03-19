import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleWrap: {
    margin: 25,
    padding: 15,
    borderColor: '#383838',
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#383838',
  }
})

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>Home</Text>
      </View>
      <Button
        title="View Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />

       <Button
        title="Create User"
        onPress={() => navigation.navigate('CreateUser')}
      />
    </View>
  )
}

export default Home;