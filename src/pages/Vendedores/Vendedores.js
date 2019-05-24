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
    // this._get('https://jsonplaceholder.typicode.com/users').then(
    //   data => {
    //     this.setState({ vendedores: data })

    //   }
    // )

    let data = [
      {name: "Nome 1"},
      {name: "Nome 2"},
      {name: "Nome 3"},
      {name: "Nome 4"},
      {name: "Nome 5"},
      {name: "Nome 6"},
      {name: "Nome 7"},
      {name: "Nome 8"},
      {name: "Nome 9"},
      {name: "Nome 10"},
      {name: "Nome 11"},
      {name: "Nome 12"},
      {name: "Nome 13"},
      {name: "Nome 14"},
      {name: "Nome 15"},
      {name: "Nome 16"},
      {name: "Nome 17"},
      {name: "Nome 18"},
      {name: "Nome 19"},
      {name: "Nome 20"},
      {name: "Nome 21"},
      {name: "Nome 22"},
    ] 
    setTimeout(() => {
      this.setState({ vendedores: data })
    }, 1);
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
