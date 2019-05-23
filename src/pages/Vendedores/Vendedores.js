import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList} from 'react-native'

import ActionBar from '../../components/ActionBar'

import CardVendedor from '../../components/CardVendedor'


export default class Vendedores extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#396AC0', alignItems: 'center', height: '100%', width: '100%' }} >
        <ActionBar pageName="Vendedores" goBack={() => this.props.navigation.goBack()} />
        <CardVendedoresList navFunc={this.props.navigation}/>
      </View>
    )
  }
}


class CardVendedoresList extends Component {
  constructor() {
    super();
    this.state = {
      vendedores: []
    }
  }

  componentDidMount() {
    this._get('https://jsonplaceholder.typicode.com/users').then(
      data => {
        this.setState({ vendedores: data })

      }
    )
  }

  _get = async (endpoint) => {
    const res = await fetch(endpoint);
    const data = await res.json()
    return data;
  }

  _renderItem = ({ item }) => (
    <CardVendedor nome={item.name} navFunc={this.props.navFunc} />
  );

  render() {
    if (this.state.vendedores.length === 0) {
      return (
        <View style={styles.Loader}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      )
    }
    return (
      <FlatList
        style={{}}
        data={this.state.vendedores}
        keyExtractor={(vendedor, index) => index.toString()}
        renderItem={this._renderItem}
      />
    )
  }
}


const styles = StyleSheet.create({
  Loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
