import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from 'components/home/Home'
import Dashboard from 'components/dashboard/Dashboard'
import CreateUser from 'components/createUser/CreateUser'

const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Dashboard: {
    screen: Dashboard,
  },
  CreateUser: {
    screen: CreateUser,
  }
});

export default class RootNavigator extends React.Component {
  render() {
    return <RootStack />;
  }
}
