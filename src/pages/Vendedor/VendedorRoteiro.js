import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, FlatList } from 'react-native'
import ActionBar from '../../components/ActionBar'
import RotaItem from '../../components/RotaItem'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import IcoMoonConfig from '../../selection.json';
const IconTarget = createIconSetFromIcoMoon(IcoMoonConfig);

export default class VendedorRoteiro extends Component {


  render() {
    const { navigation } = this.props;
    const nome = navigation.getParam('nome', 'Roteiro');

    let porcentagem = '90%';
    return (
      <View style={{ backgroundColor: '#fff', height: '100%', width: '100%' }} >
        <ActionBar pageName={nome} goBack={() => this.props.navigation.goBack()} />
        <RoteiroList />
      </View>
    )
  }
}


class RoteiroList extends Component {
  constructor() {
    super();
    this.state = {
      roteiros: []
    }
  }

  roteiros = [
    {
      bairro: 'PARQUE ENSEADA',
      cep: 11443290,
      codigoCliente: 32250,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: null,
      documento: undefined,
      endereco: 'RUA MARIA ALZIRA DA CONCEIÇÃO, 8 - LOJA 01 TERREO',
      estado: 'SP',
      municipio: 'GUARUJÁ',
      nomeFantasia: 'AP ANDRE MARQUES',
      razaoSocial: 'ANDRE MARQUES - CONVENIENCIAS',
      ultimaVisita: '2019-04-09T00:00:00.000Z',
      proximaVisita: '2019-04-17T00:00:00.000Z',
      horaVisita: '15:30',
      horaRealizada: '11:30',
      frequencia: '2 SEMANAS',
      ultimaVenda: 'R$ 1500,00',
      statusVisita: 1,
      statusVisitaLabel: 'Venda Com Visita',
      classe: 'RoteiroVenda',
      tag: 'tag--vencidos',
      tagName: 'Títulos vencidos'
    },
    {
      bairro: 'CENTRO',
      cep: 7901000,
      codigoCliente: 36129,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 792,
      documento: undefined,
      endereco: 'RUA GERÔNIMO CAETANO GARCIA, 176 - 0',
      estado: 'SP',
      municipio: 'FRANCISCO MORATO',
      nomeFantasia: 'SM ITALIANOS',
      razaoSocial: 'SUPERMERCADO DOS ITALIANOS LTDA',
      ultimaVisita: '2019-04-10T00:00:00.000Z',
      proximaVisita: '2019-04-15T00:00:00.000Z',
      horaVisita: '14:30',
      horaRealizada: '15:00',
      frequencia: '2 SEMANAS',
      ultimaVenda: 'R$ 5000,00',
      statusVisita: 2,
      statusVisitaLabel: '',
      classe: 'RoteiroNaoVenda',
      tag: 'tag--vencidos'

    },
    {
      bairro: 'VILA NOVA CONCEIÇÃO',
      cep: 4512001,
      codigoCliente: 111044,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 921,
      documento: undefined,
      endereco: 'RUA DIOGO JÁCOME, 616',
      estado: 'SP',
      municipio: 'SÃO PAULO',
      nomeFantasia: 'NAT TENDA ORGÂNICA',
      razaoSocial: 'EMPORIO TENDA ORGÂNICA EIRELI EPP',
      ultimaVisita: '2019-04-09T00:00:00.000Z',
      proximaVisita: '2019-04-17T00:00:00.000Z',
      horaVisita: '10:45',
      horaRealizada: '10:50',
      frequencia: 'SEMANAL',
      ultimaVenda: 'R$ 3500,00',
      statusVisita: 3,
      statusVisitaLabel: 'TEL. INDISPONÍVEL',
      classe: 'RoteiroNaoVisita',
      tag: 'tag--avencer',
      tagName: 'Títulos a vencer'
    },
    {
      bairro: 'CENTRO',
      cep: 13465280,
      codigoCliente: 110889,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 785,
      documento: undefined,
      endereco: 'RUA RUI BARBOSA, 201',
      estado: 'SP',
      municipio: 'AMERICANA',
      nomeFantasia: 'ATAC ESPERANÇA LJ15',
      razaoSocial: 'ATACADO E AUTO SERVIÇO ESPERANÇA LTDA',
      ultimaVisita: '2019-04-09T00:00:00.000Z',
      proximaVisita: '2019-04-17T00:00:00.000Z',
      horaVisita: '11:30',
      horaRealizada: '09:00',
      frequencia: 'MENSAL',
      ultimaVenda: 'R$ 1200,00',
      statusVisita: 4,
      statusVisitaLabel: 'Venda Sem Visita',
      classe: 'RoteiroVendaSemVisita',
      tag: 'tag--vencidos'
    },
    {
      bairro: 'JARDIM ALVINÓPOLIS',
      cep: 12943400,
      codigoCliente: 110797,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 1358,
      documento: undefined,
      endereco: 'RUA SARGENTO LAÉRCIO LOURENÇO, 700 - SALA 01',
      estado: 'SP',
      municipio: 'ATIBAIA',
      nomeFantasia: 'DIST PIRES ARANTES',
      razaoSocial: 'PIRES E ARANTES DIST PROD ALIM LTDA - ME',
      ultimaVisita: '2019-04-08T00:00:00.000Z',
      proximaVisita: '2019-04-18T00:00:00.000Z',
      horaVisita: '10:30',
      horaRealizada: '10:30',
      frequencia: '2 SEMANAS',
      ultimaVenda: 'R$ 2500,00',
      statusVisita: 5,
      statusVisitaLabel: '',
      classe: 'RoteiroSemVisita',
      tag: 'tag--vencidos'
    },
    {
      bairro: 'VILA ROSINA',
      cep: 7749505,
      codigoCliente: 110892,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 949,
      documento: undefined,
      endereco: 'AVENIDA DAVID KASITZKY, 540',
      estado: 'SP',
      municipio: 'CAIEIRAS',
      nomeFantasia: 'SM SAITO CD',
      razaoSocial: 'CENTRO DE DISTRIBUIÇAO SAITO LTDA',
      ultimaVisita: '2019-04-08T00:00:00.000Z',
      proximaVisita: '2019-04-18T00:00:00.000Z',
      horaVisita: '09:30',
      horaRealizada: '10:00',
      frequencia: 'SEMANAL',
      ultimaVenda: 'R$ 1500,00',
      statusVisita: 3,
      statusVisitaLabel: 'TEL. INDISPONÍVEL',
      classe: 'RoteiroNaoVisita',
      tag: 'tag--avencer'
    },
    {
      bairro: 'JARDIM GUAIRACA',
      cep: 11443290,
      codigoCliente: 17797,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: null,
      documento: undefined,
      endereco: 'AVENIDA DO ORATÓRIO, 4500',
      estado: 'SP',
      municipio: 'SÃO PAULO',
      nomeFantasia: 'SM DAVO JDGUAIRACA',
      razaoSocial: 'D AVO SUPERMERCADOS LTDA',
      ultimaVisita: '2019-04-09T00:00:00.000Z',
      proximaVisita: '2019-04-17T00:00:00.000Z',
      horaVisita: '08:30',
      horaRealizada: '09:50',
      frequencia: '2 SEMANAS',
      ultimaVenda: 'R$ 2500,00',
      statusVisita: 1,
      statusVisitaLabel: 'Venda Com Visita',
      classe: 'RoteiroVenda',
      tag: 'tag--vencidos'
    },
    {
      bairro: 'PARQUE CONTINENTAL',
      cep: 7901000,
      codigoCliente: 18516,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 792,
      documento: undefined,
      endereco: 'RUA PAULO CASTALDELLI, 254',
      estado: 'SP',
      municipio: 'GUARULHOS ',
      nomeFantasia: 'SUPER CONTINENTAL',
      razaoSocial: 'SUPER CONTINENTAL MINI MERCADO LTDA ME ',
      ultimaVisita: '2019-04-10T00:00:00.000Z',
      proximaVisita: '2019-04-15T00:00:00.000Z',
      horaVisita: '12:30',
      horaRealizada: '15:10',
      frequencia: '2 SEMANAS',
      ultimaVenda: 'R$ 5000,00',
      statusVisita: 2,
      statusVisitaLabel: '',
      classe: 'RoteiroNaoVenda',
      tag: 'tag--vencidos'
    },
    {
      bairro: 'BELENZINHO ',
      cep: 4512001,
      codigoCliente: 21995,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 921,
      documento: undefined,
      endereco: 'RUA TOLEDO BARBOSA, 166',
      estado: 'SP',
      municipio: 'SÃO PAULO',
      nomeFantasia: 'MERCADINHO METRO',
      razaoSocial: 'MERCADINHO METRO BELEM LTDA ME',
      ultimaVisita: '2019-04-09T00:00:00.000Z',
      proximaVisita: '2019-04-17T00:00:00.000Z',
      horaVisita: '13:30',
      horaRealizada: '10:10',
      frequencia: 'SEMANAL',
      ultimaVenda: 'R$ 3500,00',
      statusVisita: 3,
      statusVisitaLabel: 'TEL. INDISPONÍVEL',
      classe: 'RoteiroNaoVisita',
      tag: 'tag--avencer'
    },
    {
      bairro: 'VILA ORATÓRIO',
      cep: 13465280,
      codigoCliente: 22139,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 785,
      documento: undefined,
      endereco: 'AVENIDA SALIM FARAH MALUF, 4310',
      estado: 'SP',
      municipio: 'SÃO PAULO',
      nomeFantasia: 'POSTO DE SERVICOS EL',
      razaoSocial: 'POSTO DE SERVICOS EL AMAN LTDA ',
      ultimaVisita: '2019-04-09T00:00:00.000Z',
      proximaVisita: '2019-04-17T00:00:00.000Z',
      horaVisita: '11:45',
      horaRealizada: '11:15',
      frequencia: 'MENSAL',
      ultimaVenda: 'R$ 1200,00',
      statusVisita: 4,
      statusVisitaLabel: 'Venda Sem Visita',
      classe: 'RoteiroVendaSemVisita',
      tag: 'tag--vencidos'
    },
    {
      bairro: 'CONJUNTO RESIDENCIAL JOSÉ BONIFÁCIO',
      cep: 12943400,
      codigoCliente: 22603,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 1358,
      documento: undefined,
      endereco: 'AVENIDA NAGIB FARAH MALUF, 100',
      estado: 'SP',
      municipio: 'SÃO PAULO',
      nomeFantasia: 'CASA NEGREIROS',
      razaoSocial: 'CASA NEGREIROS LTDA',
      ultimaVisita: '2019-04-08T00:00:00.000Z',
      proximaVisita: '2019-04-18T00:00:00.000Z',
      horaVisita: '09:40',
      horaRealizada: '10:45',
      frequencia: '2 SEMANAS',
      ultimaVenda: 'R$ 2500,00',
      statusVisita: 5,
      statusVisitaLabel: '',
      classe: 'RoteiroSemVisita',
      tag: 'tag--vencidos'
    },
    {
      bairro: 'TATUAPÉ ',
      cep: 7749505,
      codigoCliente: 31254,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 949,
      documento: undefined,
      endereco: 'RUA VILELA, 782',
      estado: 'SP',
      municipio: 'SÃO PAULO',
      nomeFantasia: 'MM HAPPY FAMILI',
      razaoSocial: 'MERCADO HAPPY FAMILIA LTDA',
      ultimaVisita: '2019-04-08T00:00:00.000Z',
      proximaVisita: '2019-04-18T00:00:00.000Z',
      horaVisita: '14:10',
      horaRealizada: '15:55',
      frequencia: 'SEMANAL',
      ultimaVenda: 'R$ 1500,00',
      statusVisita: 3,
      statusVisitaLabel: 'TEL. INDISPONÍVEL',
      classe: 'RoteiroNaoVisita',
      tag: 'tag--avencer'
    },
    {
      bairro: 'PARQUE ENSEADA',
      cep: 11443290,
      codigoCliente: 32250,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: null,
      documento: undefined,
      endereco: 'RUA MARIA ALZIRA DA CONCEIÇÃO, 8 - LOJA 01 TERREO',
      estado: 'SP',
      municipio: 'GUARUJÁ',
      nomeFantasia: 'AP ANDRE MARQUES',
      razaoSocial: 'ANDRE MARQUES - CONVENIENCIAS',
      ultimaVisita: '2019-04-09T00:00:00.000Z',
      proximaVisita: '2019-04-17T00:00:00.000Z',
      horaVisita: '15:30',
      horaRealizada: '11:30',
      frequencia: '2 SEMANAS',
      ultimaVenda: 'R$ 1500,00',
      statusVisita: 1,
      statusVisitaLabel: 'Venda Com Visita',
      classe: 'RoteiroVenda',
      tag: 'tag--vencidos',
      tagName: 'Títulos vencidos'
    },
    {
      bairro: 'CENTRO',
      cep: 7901000,
      codigoCliente: 36129,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 792,
      documento: undefined,
      endereco: 'RUA GERÔNIMO CAETANO GARCIA, 176 - 0',
      estado: 'SP',
      municipio: 'FRANCISCO MORATO',
      nomeFantasia: 'SM ITALIANOS',
      razaoSocial: 'SUPERMERCADO DOS ITALIANOS LTDA',
      ultimaVisita: '2019-04-10T00:00:00.000Z',
      proximaVisita: '2019-04-15T00:00:00.000Z',
      horaVisita: '14:30',
      horaRealizada: '15:00',
      frequencia: '2 SEMANAS',
      ultimaVenda: 'R$ 5000,00',
      statusVisita: 2,
      statusVisitaLabel: '',
      classe: 'RoteiroNaoVenda',
      tag: 'tag--vencidos'

    },
    {
      bairro: 'VILA NOVA CONCEIÇÃO',
      cep: 4512001,
      codigoCliente: 111044,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 921,
      documento: undefined,
      endereco: 'RUA DIOGO JÁCOME, 616',
      estado: 'SP',
      municipio: 'SÃO PAULO',
      nomeFantasia: 'NAT TENDA ORGÂNICA',
      razaoSocial: 'EMPORIO TENDA ORGÂNICA EIRELI EPP',
      ultimaVisita: '2019-04-09T00:00:00.000Z',
      proximaVisita: '2019-04-17T00:00:00.000Z',
      horaVisita: '10:45',
      horaRealizada: '10:50',
      frequencia: 'SEMANAL',
      ultimaVenda: 'R$ 3500,00',
      statusVisita: 3,
      statusVisitaLabel: 'TEL. INDISPONÍVEL',
      classe: 'RoteiroNaoVisita',
      tag: 'tag--avencer',
      tagName: 'Títulos a vencer'
    },
    {
      bairro: 'CENTRO',
      cep: 13465280,
      codigoCliente: 110889,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 785,
      documento: undefined,
      endereco: 'RUA RUI BARBOSA, 201',
      estado: 'SP',
      municipio: 'AMERICANA',
      nomeFantasia: 'ATAC ESPERANÇA LJ15',
      razaoSocial: 'ATACADO E AUTO SERVIÇO ESPERANÇA LTDA',
      ultimaVisita: '2019-04-09T00:00:00.000Z',
      proximaVisita: '2019-04-17T00:00:00.000Z',
      horaVisita: '11:30',
      horaRealizada: '09:00',
      frequencia: 'MENSAL',
      ultimaVenda: 'R$ 1200,00',
      statusVisita: 4,
      statusVisitaLabel: 'Venda Sem Visita',
      classe: 'RoteiroVendaSemVisita',
      tag: 'tag--vencidos'
    },
    {
      bairro: 'JARDIM ALVINÓPOLIS',
      cep: 12943400,
      codigoCliente: 110797,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 1358,
      documento: undefined,
      endereco: 'RUA SARGENTO LAÉRCIO LOURENÇO, 700 - SALA 01',
      estado: 'SP',
      municipio: 'ATIBAIA',
      nomeFantasia: 'DIST PIRES ARANTES',
      razaoSocial: 'PIRES E ARANTES DIST PROD ALIM LTDA - ME',
      ultimaVisita: '2019-04-08T00:00:00.000Z',
      proximaVisita: '2019-04-18T00:00:00.000Z',
      horaVisita: '10:30',
      horaRealizada: '10:30',
      frequencia: '2 SEMANAS',
      ultimaVenda: 'R$ 2500,00',
      statusVisita: 5,
      statusVisitaLabel: '',
      classe: 'RoteiroSemVisita',
      tag: 'tag--vencidos'
    },
    {
      bairro: 'VILA ROSINA',
      cep: 7749505,
      codigoCliente: 110892,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 949,
      documento: undefined,
      endereco: 'AVENIDA DAVID KASITZKY, 540',
      estado: 'SP',
      municipio: 'CAIEIRAS',
      nomeFantasia: 'SM SAITO CD',
      razaoSocial: 'CENTRO DE DISTRIBUIÇAO SAITO LTDA',
      ultimaVisita: '2019-04-08T00:00:00.000Z',
      proximaVisita: '2019-04-18T00:00:00.000Z',
      horaVisita: '09:30',
      horaRealizada: '10:00',
      frequencia: 'SEMANAL',
      ultimaVenda: 'R$ 1500,00',
      statusVisita: 3,
      statusVisitaLabel: 'TEL. INDISPONÍVEL',
      classe: 'RoteiroNaoVisita',
      tag: 'tag--avencer'
    },
    {
      bairro: 'JARDIM GUAIRACA',
      cep: 11443290,
      codigoCliente: 17797,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: null,
      documento: undefined,
      endereco: 'AVENIDA DO ORATÓRIO, 4500',
      estado: 'SP',
      municipio: 'SÃO PAULO',
      nomeFantasia: 'SM DAVO JDGUAIRACA',
      razaoSocial: 'D AVO SUPERMERCADOS LTDA',
      ultimaVisita: '2019-04-09T00:00:00.000Z',
      proximaVisita: '2019-04-17T00:00:00.000Z',
      horaVisita: '08:30',
      horaRealizada: '09:50',
      frequencia: '2 SEMANAS',
      ultimaVenda: 'R$ 2500,00',
      statusVisita: 1,
      statusVisitaLabel: 'Venda Com Visita',
      classe: 'RoteiroVenda',
      tag: 'tag--vencidos'
    },
    {
      bairro: 'PARQUE CONTINENTAL',
      cep: 7901000,
      codigoCliente: 18516,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 792,
      documento: undefined,
      endereco: 'RUA PAULO CASTALDELLI, 254',
      estado: 'SP',
      municipio: 'GUARULHOS ',
      nomeFantasia: 'SUPER CONTINENTAL',
      razaoSocial: 'SUPER CONTINENTAL MINI MERCADO LTDA ME ',
      ultimaVisita: '2019-04-10T00:00:00.000Z',
      proximaVisita: '2019-04-15T00:00:00.000Z',
      horaVisita: '12:30',
      horaRealizada: '15:10',
      frequencia: '2 SEMANAS',
      ultimaVenda: 'R$ 5000,00',
      statusVisita: 2,
      statusVisitaLabel: '',
      classe: 'RoteiroNaoVenda',
      tag: 'tag--vencidos'
    },
    {
      bairro: 'BELENZINHO ',
      cep: 4512001,
      codigoCliente: 21995,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 921,
      documento: undefined,
      endereco: 'RUA TOLEDO BARBOSA, 166',
      estado: 'SP',
      municipio: 'SÃO PAULO',
      nomeFantasia: 'MERCADINHO METRO',
      razaoSocial: 'MERCADINHO METRO BELEM LTDA ME',
      ultimaVisita: '2019-04-09T00:00:00.000Z',
      proximaVisita: '2019-04-17T00:00:00.000Z',
      horaVisita: '13:30',
      horaRealizada: '10:10',
      frequencia: 'SEMANAL',
      ultimaVenda: 'R$ 3500,00',
      statusVisita: 3,
      statusVisitaLabel: 'TEL. INDISPONÍVEL',
      classe: 'RoteiroNaoVisita',
      tag: 'tag--avencer'
    },
    {
      bairro: 'VILA ORATÓRIO',
      cep: 13465280,
      codigoCliente: 22139,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 785,
      documento: undefined,
      endereco: 'AVENIDA SALIM FARAH MALUF, 4310',
      estado: 'SP',
      municipio: 'SÃO PAULO',
      nomeFantasia: 'POSTO DE SERVICOS EL',
      razaoSocial: 'POSTO DE SERVICOS EL AMAN LTDA ',
      ultimaVisita: '2019-04-09T00:00:00.000Z',
      proximaVisita: '2019-04-17T00:00:00.000Z',
      horaVisita: '11:45',
      horaRealizada: '11:15',
      frequencia: 'MENSAL',
      ultimaVenda: 'R$ 1200,00',
      statusVisita: 4,
      statusVisitaLabel: 'Venda Sem Visita',
      classe: 'RoteiroVendaSemVisita',
      tag: 'tag--vencidos'
    },
    {
      bairro: 'CONJUNTO RESIDENCIAL JOSÉ BONIFÁCIO',
      cep: 12943400,
      codigoCliente: 22603,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 1358,
      documento: undefined,
      endereco: 'AVENIDA NAGIB FARAH MALUF, 100',
      estado: 'SP',
      municipio: 'SÃO PAULO',
      nomeFantasia: 'CASA NEGREIROS',
      razaoSocial: 'CASA NEGREIROS LTDA',
      ultimaVisita: '2019-04-08T00:00:00.000Z',
      proximaVisita: '2019-04-18T00:00:00.000Z',
      horaVisita: '09:40',
      horaRealizada: '10:45',
      frequencia: '2 SEMANAS',
      ultimaVenda: 'R$ 2500,00',
      statusVisita: 5,
      statusVisitaLabel: '',
      classe: 'RoteiroSemVisita',
      tag: 'tag--vencidos'
    },
    {
      bairro: 'TATUAPÉ ',
      cep: 7749505,
      codigoCliente: 31254,
      codigoVendedor: '9004',
      vendedor: 'BRUNO',
      diasUltimaVenda: 949,
      documento: undefined,
      endereco: 'RUA VILELA, 782',
      estado: 'SP',
      municipio: 'SÃO PAULO',
      nomeFantasia: 'MM HAPPY FAMILI',
      razaoSocial: 'MERCADO HAPPY FAMILIA LTDA',
      ultimaVisita: '2019-04-08T00:00:00.000Z',
      proximaVisita: '2019-04-18T00:00:00.000Z',
      horaVisita: '14:10',
      horaRealizada: '15:55',
      frequencia: 'SEMANAL',
      ultimaVenda: 'R$ 1500,00',
      statusVisita: 3,
      statusVisitaLabel: 'TEL. INDISPONÍVEL',
      classe: 'RoteiroNaoVisita',
      tag: 'tag--avencer'
    },
  ];


  componentDidMount() {
    // this._get('https://jsonplaceholder.typicode.com/users').then(
    //   data => {
    //     this.setState({ vendedores: data })

    //   }
    // )

    setTimeout(() => {

      this.setState({ roteiros: this.roteiros })
    }, 2);
  }

  // _get = async (endpoint) => {
  //   const res = await fetch(endpoint);
  //   const data = await res.json()
  //   return data;
  // }

  _renderItem = ({ item, index }) => (
    <RotaItem nomeFantasia={item.nomeFantasia} roteiro={item} index={index} />
  );

  render() {
    if (this.state.roteiros.length === 0) {
      return (
        <View style={styles.Loader}>
          <ActivityIndicator size="large" color="#396AC0" />
        </View>
      )
    }
    return (
      <FlatList
        style={{paddingTop: 15, paddingBottom: 20, height: '100%'}}
        data={this.state.roteiros}
        keyExtractor={(roteiros, index) => index.toString()}
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
  },

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

  CardAlertas: {
    backgroundColor: '#ffcece',
    width: '95%',
    borderRadius: 5,
    margin: 10
  },

  CardAlertasHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ff6d6d'
  },

  CardAlertasBody: {
    // flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
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
  },

  RoteiroVenda: {
    color: '#09B12A'
  },

  RoteiroVendaBG: {
    backgroundColor: '#E7FFEC',
  },

  RoteiroNaoVenda: {
    color: '#EE9B00'
  },

  RoteiroNaoVendaBG: {
    backgroundColor: '#FFEDCC'
  },

  RoteiroVendaSemVisita: {
    color: '#186DD4'
  },

  RoteiroVendaSemVisitaBG: {
    backgroundColor: '#E3F0FF'
  },

  RoteiroSemVisita: {
    color: '#3D3D3D'
  },

  RoteiroSemVisitaBG: {
    backgroundColor: '#EEEEEE'
  },

  RoteiroNaoVisita: {
    color: '#C90707'
  },

  RoteiroNaoVisitaBG: {
    color: '#FFEAEA'
  }


});
