import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import IcoMoonConfig from '../selection.json';
const IconTarget = createIconSetFromIcoMoon(IcoMoonConfig);

export default class CardVendedor extends Component {

  navigate = (params) => {
    return this.props.navFunc.navigate('Vendedor', params);
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={() => this.navigate({ nome: this.props.nome })}>

        <View style={styles.Card} elevation={10}>
          <View style={styles.CardHeader}>
            <IconTarget name="vendedor" style={styles.CardHeader__Icon}></IconTarget>
            <Text style={styles.CardHeader__NomeVendedor}>{this.props.nome}</Text>
            <IconTarget name="notificacao" style={styles.CardHeader__Notificacao}></IconTarget>
          </View>

          <View style={styles.CardBody}>

            <View style={styles.CardItemStats}>
              <IconTarget style={styles.CardItemStats__Icon} name="estrada"></IconTarget>
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.CardItemStats__Value}>50%</Text>
                <Text style={styles.CardItemStats__Text}>Realizado</Text>
              </View>
            </View>

            <View style={styles.CardItemStats}>
              <IconTarget style={styles.CardItemStats__Icon} name="local-question"></IconTarget>
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.CardItemStats__Value}>2</Text>
                <Text style={styles.CardItemStats__Text}>Visita Fora</Text>
              </View>
            </View>

            <View style={styles.CardItemStats}>
              <IconTarget style={styles.CardItemStats__Icon} name="local-money"></IconTarget>
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.CardItemStats__Value}>80%</Text>
                <Text style={styles.CardItemStats__Text}>Efetividade</Text>
              </View>
            </View>

            <View style={styles.CardItemStats}>
              <IconTarget style={styles.CardItemStats__Icon} name="carro"></IconTarget>
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.CardItemStats__Value}>180/210 km</Text>
                <Text style={styles.CardItemStats__Text}>Deslocamento</Text>
              </View>
            </View>

            <View style={styles.CardItemStats}>
              <IconTarget style={styles.CardItemStats__Icon} name="venda"></IconTarget>
              <View style={{ marginLeft: 5 }}>
                <Text style={styles.CardItemStats__Value}>R$100.000,00</Text>
                <Text style={styles.CardItemStats__Text}>Vendas</Text>
              </View>
            </View>

          </View>

        </View>

      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    backgroundColor: 'white',
    width: '95%',
    borderRadius: 5,
    margin: 10
  },

  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },

  CardHeader__Icon: {
    fontSize: 25,
    color: '#000',
  },

  CardHeader__NomeVendedor: {
    fontSize: 16,
    color: '#000',
    width: '85%'
  },

  CardHeader__Notificacao: {
    fontSize: 25,
    color: '#000',
  },

  CardBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 5
  },

  CardItemStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },

  CardItemStats__Icon: {
    fontSize: 30,
    color: '#000'
  },

  CardItemStats__Value: {
    fontSize: 16,
    color: '#000'
  },

  CardItemStats__Text: {
    fontSize: 14
  }
});
