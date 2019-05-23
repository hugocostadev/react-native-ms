import React, { Component } from 'react';

import Vendedor from './src/pages/Vendedor/Vendedor'
import Vendedores from './src/pages/Vendedores/Vendedores'
import Menu from './src/pages/Menu/Menu'

import { createStackNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: Menu,
    Vendedores: Vendedores,
    Vendedor: Vendedor
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

