import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import ActionBar from '../../components/ActionBar'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import IcoMoonConfig from '../../selection.json';
const IconTarget = createIconSetFromIcoMoon(IcoMoonConfig);

export default class Vendedor extends Component {
  render() {
    const { navigation } = this.props;
    const nome = navigation.getParam('nome', 'NO-ID');

    let porcentagem = '90%';
    return (
      <View style={{ backgroundColor: '#396AC0', alignItems: 'center', height: '100%', width: '100%' }} >
        <ActionBar pageName={nome} goBack={() => this.props.navigation.goBack()} />

        <ScrollView style={{ width: '100%' }}>
          <View style={styles.Card} elevation={10}>
            <View style={styles.CardHeader}>
              <Text style={styles.CardHeader__NomeVendedor}>Visitas do Roteiro</Text>
              <TouchableOpacity style={{ borderRadius: 100, backgroundColor: '#4ABA58', paddingHorizontal: 10, paddingVertical: 8 }}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Roteiro do Dia</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.CardBody}>
              <Text>
                Visitas no Roteiro: <Text style={{ color: '#3d3d3d', fontWeight: 'bold' }}>12/12</Text>
              </Text>

              <Text>
                Fora da Rota: <Text style={{ color: '#3d3d3d', fontWeight: 'bold' }}>0</Text>
              </Text>

              <View style={{ width: '100%', marginVertical: 20, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text style={{ color: '#3d3d3d', fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{porcentagem}</Text>
                <View style={{ width: '90%', height: 8, borderRadius: 5, borderWidth: 1, borderColor: '#3d3d3d', backgroundColor: '#eee' }}>
                  <View style={{ width: `${porcentagem}`, height: 6, borderRadius: 3, backgroundColor: '#396AC0' }} />
                </View>
              </View>

              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 12 }}>PRIMEIRA / ÚLTIMA VISITA</Text>
                <Text style={{ fontSize: 14, color: '#3d3d3d', fontWeight: 'bold' }}>08:00 / 14:00</Text>
              </View>

              <View style={{ alignItems: 'flex-start' }}>
                <Text style={{ fontSize: 12 }}>DISTÂNCIA PERCORRIDA</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                  <IconTarget name="consumo" color="#3d3d3d" size={30} />
                  <View>
                    <Text style={{ fontSize: 14, color: '#3d3d3d', fontWeight: 'bold', marginLeft: 5 }}>12.24KM</Text>
                    <Text style={{ fontSize: 14, color: '#3d3d3d', fontWeight: 'bold', marginLeft: 5 }}>TOTAL</Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <IconTarget name="consumo-j" color="#3d3d3d" size={30} />
                  <View>
                    <Text style={{ fontSize: 14, color: '#3d3d3d', fontWeight: 'bold', marginLeft: 5 }}>12.24KM</Text>
                    <Text style={{ fontSize: 14, color: '#3d3d3d', fontWeight: 'bold', marginLeft: 5 }}>JORNADA</Text>
                  </View>
                </View>
              </View>

            </View>
          </View>

          <View style={styles.Card} elevation={10}>
            <View style={styles.CardHeader}>
              <Text style={styles.CardHeader__NomeVendedor}>Pedidos Realizados</Text>
            </View>

            <View style={styles.CardBodyPedidos}>

              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3d3d3d' }}> 7</Text>
                <Image
                  resizeMode="contain"
                  style={{ height: 35 }}
                  source={require('../../assets/noroteiro.png')}
                />
                <Text style={{ fontSize: 12, color: '#3d3d3d' }}> NO ROTEIRO</Text>
              </View>

              <Text style={{ fontSize: 30, color: '#3d3d3d' }}>+</Text>

              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3d3d3d' }}> 7</Text>
                <Image
                  resizeMode="contain"
                  style={{ height: 35 }}
                  source={require('../../assets/forarota.png')}
                />
                <Text style={{ fontSize: 12, color: '#3d3d3d' }}> NO ROTEIRO</Text>
              </View>

              <Text style={{ fontSize: 30, color: '#3d3d3d' }}>=</Text>

              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3d3d3d' }}> 7</Text>
                <Image
                  resizeMode="contain"
                  style={{ height: 35 }}
                  source={require('../../assets/total.png')}
                />
                <Text style={{ fontSize: 12, color: '#3d3d3d' }}> NO ROTEIRO</Text>
              </View>

              <Text style={{ width: '100%', textAlign: 'center', marginTop: 15 }}>Efetividade em visistas do Roteiro</Text>

              <View style={{ width: '100%', marginVertical: 20, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text style={{ color: '#3d3d3d', fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{porcentagem}</Text>
                <View style={{ width: '90%', height: 8, borderRadius: 5, borderWidth: 1, borderColor: '#3d3d3d', backgroundColor: '#eee' }}>
                  <View style={{ width: `${porcentagem}`, height: 6, borderRadius: 3, backgroundColor: '#396AC0' }} />
                </View>
              </View>

              <Text style={{ fontSize: 14, color: '#3d3d3d' }}>
                <Text style={{ fontSize: 16, color: '#396AC0', fontWeight: 'bold', paddingHorizontal: 100 }}>11{" "}</Text>
                Vendas realizada(s) em
                <Text style={{ fontSize: 16, color: '#396AC0', fontWeight: 'bold' }}>{" "}22{" "}</Text>
                clientes do roteiro(s)
              </Text>

            </View>
          </View>

        </ScrollView>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  Card: {
    // flex: 1,
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

  CardHeader__NomeVendedor: {
    fontSize: 16,
    color: '#3d3d3d'
  },

  CardBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    paddingVertical: 10
  },

  CardBodyPedidos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 10
  },

  CardItemStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },

  CardItemStats__Icon: {
    fontSize: 30,
    color: '#3d3d3d'
  },

  CardItemStats__Value: {
    fontSize: 16,
    color: '#3d3d3d'
  },

  CardItemStats__Text: {
    fontSize: 14
  }
});
