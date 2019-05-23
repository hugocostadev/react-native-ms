import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import IcoMoonConfig from '../selection.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const IconTarget = createIconSetFromIcoMoon(IcoMoonConfig);


const ActionBar = props => {
  return (

    <View style={styles.ActionBar}>
      <Text style={styles.Titulo}>{props.pageName}</Text>
      <TouchableNativeFeedback onPress={props.goBack}>
          <Icon name="arrow-left" style={styles.Voltar} />
      </TouchableNativeFeedback>

    </View>
  )
}

const styles = StyleSheet.create({
  ActionBar: {
    backgroundColor: '#396AC0',
    height: 60,
    padding: 15,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'space-between'
  },

  Titulo: {
    color: '#fff',
    fontSize: 18,
    position: 'absolute',
    fontWeight: 'bold',
    width: '110%',
    textAlign: 'center'
  },

  Voltar: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'normal',
  }
});

export default ActionBar;