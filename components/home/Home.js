import React from 'react'
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';

import { startLogin } from '../../@@redux/actions/auth';

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

const Home = ({ navigation, startLogin }) => {
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

      <Button
        title="Log In"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(null, mapDispatchToProps)(Home);