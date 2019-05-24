import React, { Component } from 'react';

import Menu from './src/pages/Menu/Menu'
import Vendedores from './src/pages/Vendedores/Vendedores'
import Vendedor from './src/pages/Vendedor/Vendedor'
import VendedorRoteiro from './src/pages/Vendedor/VendedorRoteiro'

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
    Vendedor: Vendedor,
    RoteiroVendedor: VendedorRoteiro,
    
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

