import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import configStore from './@@redux/store/configStore'
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'
import CreateUser from './components/createUser/CreateUser'

const store = configStore();

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

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />  
      </Provider>
    );
  }
}
