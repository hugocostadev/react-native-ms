import React, { Component } from 'react'
import { Platform, StyleSheet, View, ScrollView, Text, ImageBackground, TouchableNativeFeedback } from 'react-native';


import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import IcoMoonConfig from '../../selection.json';
const IconTarget = createIconSetFromIcoMoon(IcoMoonConfig);

export default class Menu extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      headerMode: 'none'
    }
    /* No more header config here! */
  };
  render() {
    return (
      <ImageBackground source={require('../../assets/background_img.png')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.actionBar}>
          <IconTarget name="menu-icon" size={30} color="#ffffff" />
          <TouchableNativeFeedback>
            <IconTarget name="notificacao" size={30} color="#3d3d3d" />
          </TouchableNativeFeedback>

        </View>
        <ScrollView style={{ padding: 5 }}>

          <TouchableNativeFeedback>
            <View style={styles.minhaAgendaMenu}>
              <IconTarget style={styles.iconBg} name="menu-agenda" />
              <IconTarget name="menu-agenda" size={100} color="#fff" style={{ zIndex: 1 }} />
              <Text style={{ color: '#fff', fontSize: 25, textTransform: 'uppercase', fontWeight: 'bold', zIndex: 1 }}>Minha Agenda</Text>
            </View>
          </TouchableNativeFeedback>

          <View style={styles.menuContainer}>

            <TouchableNativeFeedback  onPress={() => this.props.navigation.navigate('Vendedores')}>
              <View style={styles.menuItem}>
                <IconTarget style={styles.iconBgItems} name="menu-vendedores" />
                <IconTarget name="menu-vendedores" size={70} color="#396AC0" />
                <Text style={{ color: '#3D3D3D', fontSize: 18, textTransform: 'uppercase', fontWeight: 'bold' }}>Vendedores</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback>
              <View style={styles.menuItem}>
                <IconTarget style={styles.iconBgItems} name="menu-clientes" />
                <IconTarget name="menu-clientes" size={70} color="#396AC0" />
                <Text style={{ color: '#3D3D3D', fontSize: 18, textTransform: 'uppercase', fontWeight: 'bold' }}>Clientes</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback>
              <View style={styles.menuItem}>
                <IconTarget style={styles.iconBgItems} name="menu-pesquisas" />
                <IconTarget name="menu-pesquisas" size={70} color="#396AC0" />
                <Text style={{ color: '#3D3D3D', fontSize: 18, textTransform: 'uppercase', fontWeight: 'bold' }}>Pesquisas</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback>
              <View style={styles.menuItem}>
                <IconTarget style={styles.iconBgItems} name="menu-justificativas" />
                <IconTarget name="menu-justificativas" size={70} color="#396AC0" />
                <Text style={{ color: '#3D3D3D', fontSize: 18, textTransform: 'uppercase', fontWeight: 'bold' }}>Vendedores</Text>
              </View>
            </TouchableNativeFeedback>


          </View>

        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },

  minhaAgendaMenu: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '97%',
    height: 200,
    marginVertical: 5,
    padding: 20,
    backgroundColor: '#4ABA58',
    borderRadius: 5,
    elevation: 5
  },

  iconBg: {
    position: 'absolute',
    zIndex: -2,
    color: 'rgb(255, 255, 255)',
    left: '25%',
    fontSize: 220,
    opacity: .05
  },

  iconBgItems: {
    position: 'absolute',
    zIndex: -2,
    color: '#396AC0',
    top: '05%',
    left: '15%',
    fontSize: 150,
    opacity: .05
  },

  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  menuItem: {
    width: '47%',
    height: 150,
    margin: 5,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'space-between'
  }
});
