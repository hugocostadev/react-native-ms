import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, FlatList } from 'react-native'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import IcoMoonConfig from '../selection.json';
const IconTarget = createIconSetFromIcoMoon(IcoMoonConfig);

export default class RotaItem extends Component {
    render() {
        if (this.props.roteiro.classe == 'RoteiroNaoVisita') {
            return (
                <View style={{ flexDirection: 'row', }}>
                    <IconTarget name="local-roteiro" size={50} style={{
                        zIndex: 1000,
                        color: '#C90707'
                    }} />
                    {this.props.index + 1 > 9 &&
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, marginLeft: 13, marginTop: 5, zIndex: 1000, position: 'absolute' }}>{this.props.index + 1}</Text>
                    }
                    {this.props.index + 1 <= 9 &&
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, marginLeft: 18, marginTop: 5, zIndex: 1000, position: 'absolute' }}>{this.props.index + 1}</Text>
                    }
                    <View style={{ paddingLeft: 20, marginTop: 30, marginLeft: -28, borderLeftWidth: 3, borderLeftColor: '#3d3d3d' }} />

                    <View style={{ marginTop: 5, width: '85%' }}>
                        <Text style={{ color: '#3d3d3d', fontSize: 18, fontWeight: 'bold' }}>{this.props.nomeFantasia}</Text>
                        <Text>1111 - SUP OLIVEIRA</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>08:30</Text>
                                <Text>Hora Agendada</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>--:--</Text>
                                <Text>Hora Visitada</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>--:--</Text>
                                <Text>Permanência</Text>
                            </View>
                        </View>

                        <View style={{
                            borderRadius: 5,
                            marginVertical: 5,
                            paddingVertical: 10,
                            paddingHorizontal: 5,
                            backgroundColor: '#FFEAEA',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text>Não Visitado </Text>
                            <Text style={{ color: '#3d3d3d' }}>TEL. INDISPONÍVEL</Text>
                        </View>


                    </View>


                </View>

            );
        } else if (this.props.roteiro.classe == 'RoteiroNaoVenda') {
            return (
                <View style={{ flexDirection: 'row', }}>
                    <IconTarget name="local-roteiro" size={50} style={{
                        zIndex: 1000,
                        color: '#EE9B00'
                    }} />
                    {this.props.index + 1 > 9 &&
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, marginLeft: 13, marginTop: 5, zIndex: 1000, position: 'absolute' }}>{this.props.index + 1}</Text>
                    }
                    {this.props.index + 1 <= 9 &&
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, marginLeft: 18, marginTop: 5, zIndex: 1000, position: 'absolute' }}>{this.props.index + 1}</Text>
                    }
                    <View style={{ paddingLeft: 20, marginTop: 30, marginLeft: -28, borderLeftWidth: 3, borderLeftColor: '#3d3d3d' }} />

                    <View style={{ marginTop: 5, width: '85%' }}>
                        <Text style={{ color: '#3d3d3d', fontSize: 18, fontWeight: 'bold' }}>{this.props.nomeFantasia}</Text>
                        <Text>1111 - SUP OLIVEIRA</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>08:30</Text>
                                <Text>Hora Agendada</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>08:30</Text>
                                <Text>Hora Visitada</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>08:30</Text>
                                <Text>Permanência</Text>
                            </View>
                        </View>


                        <View style={{
                            borderRadius: 5,
                            marginVertical: 5,
                            paddingVertical: 10,
                            paddingHorizontal: 5,
                            backgroundColor: '#FFEDCC',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text>Visita sem Venda: </Text>
                            <Text style={{ color: '#3d3d3d' }}>CLIENTE COM ESTOQUE</Text>
                        </View>

                    </View>
                </View>

            );
        } else if (this.props.roteiro.classe == 'RoteiroVenda') {
            return (
                <View style={{ flexDirection: 'row', }}>
                    <IconTarget name="local-roteiro" size={50} style={{
                        zIndex: 1000,
                        color: '#09B12A'
                    }} />
                    {this.props.index + 1 > 9 &&
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, marginLeft: 13, marginTop: 5, zIndex: 1000, position: 'absolute' }}>{this.props.index + 1}</Text>
                    }
                    {this.props.index + 1 <= 9 &&
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, marginLeft: 18, marginTop: 5, zIndex: 1000, position: 'absolute' }}>{this.props.index + 1}</Text>
                    }
                    <View style={{ paddingLeft: 20, marginTop: 30, marginLeft: -28, borderLeftWidth: 3, borderLeftColor: '#3d3d3d' }} />

                    <View style={{ marginTop: 5, width: '85%' }}>
                        <Text style={{ color: '#3d3d3d', fontSize: 18, fontWeight: 'bold' }}>{this.props.nomeFantasia}</Text>
                        <Text>1111 - SUP OLIVEIRA</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>08:30</Text>
                                <Text>Hora Agendada</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>08:30</Text>
                                <Text>Hora Visitada</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>08:30</Text>
                                <Text>Permanência</Text>
                            </View>
                        </View>


                        <View style={{
                            borderRadius: 5,
                            marginVertical: 5,
                            paddingVertical: 10,
                            paddingHorizontal: 5,
                            backgroundColor: '#E7FFEC'
                        }}>
                            <Text style={{ width: '100%', textAlign: 'center', fontWeight: 'bold', color: '#3d3d3d', fontSize: 16, marginBottom: 10 }}>Vendas Com Visita</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#3d3d3d', fontSize: 16 }}>R$1100,00</Text>
                                    <Text style={{ fontSize: 14 }}>Hora Agendada</Text>
                                </View>

                                <View>
                                    <Text style={{ color: '#3d3d3d', fontSize: 16 }}>20</Text>
                                    <Text style={{ fontSize: 14 }}>Hora Visitada</Text>
                                </View>

                                <View>
                                    <Text style={{ color: '#3d3d3d', fontSize: 16 }}>10</Text>
                                    <Text style={{ fontSize: 14 }}>Permanência</Text>
                                </View>
                            </View>

                        </View>

                    </View>
                </View>

            );
        } else if (this.props.roteiro.classe == 'RoteiroVendaSemVisita') {
            return (
                <View style={{ flexDirection: 'row', }}>
                    <IconTarget name="local-roteiro" size={50} style={{
                        zIndex: 1000,
                        color: '#186DD4'
                    }} />
                    {this.props.index + 1 > 9 &&
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, marginLeft: 13, marginTop: 5, zIndex: 1000, position: 'absolute' }}>{this.props.index + 1}</Text>
                    }
                    {this.props.index + 1 <= 9 &&
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, marginLeft: 18, marginTop: 5, zIndex: 1000, position: 'absolute' }}>{this.props.index + 1}</Text>
                    }
                    <View style={{ paddingLeft: 20, marginTop: 30, marginLeft: -28, borderLeftWidth: 3, borderLeftColor: '#3d3d3d' }} />

                    <View style={{ marginTop: 5, width: '85%' }}>
                        <Text style={{ color: '#3d3d3d', fontSize: 18, fontWeight: 'bold' }}>{this.props.nomeFantasia}</Text>
                        <Text>1111 - SUP OLIVEIRA</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>08:30</Text>
                                <Text>Hora Agendada</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>--:--</Text>
                                <Text>Hora Visitada</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>--:--</Text>
                                <Text>Permanência</Text>
                            </View>
                        </View>


                        <View style={{
                            borderRadius: 5,
                            marginVertical: 5,
                            paddingVertical: 10,
                            paddingHorizontal: 5,
                            backgroundColor: '#E3F0FF'
                        }}>
                            <Text style={{ width: '100%', textAlign: 'center', fontWeight: 'bold', color: '#3d3d3d', fontSize: 16, marginBottom: 10 }}>Vendas sem Visita</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#3d3d3d', fontSize: 16 }}>R$1100,00</Text>
                                    <Text style={{ fontSize: 14 }}>Hora Agendada</Text>
                                </View>

                                <View>
                                    <Text style={{ color: '#3d3d3d', fontSize: 16 }}>20</Text>
                                    <Text style={{ fontSize: 14 }}>Hora Visitada</Text>
                                </View>

                                <View>
                                    <Text style={{ color: '#3d3d3d', fontSize: 16 }}>10</Text>
                                    <Text style={{ fontSize: 14 }}>Permanência</Text>
                                </View>
                            </View>

                        </View>

                    </View>
                </View>

            );
        } else {
            return (
                <View style={{ flexDirection: 'row', }}>
                    <IconTarget name="local-roteiro" size={50} style={{
                        zIndex: 1000,
                        color: '#3D3D3D'
                    }} />
                    {this.props.index + 1 > 9 &&
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, marginLeft: 13, marginTop: 5, zIndex: 1000, position: 'absolute' }}>{this.props.index + 1}</Text>
                    }
                    {this.props.index + 1 <= 9 &&
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, marginLeft: 18, marginTop: 5, zIndex: 1000, position: 'absolute' }}>{this.props.index + 1}</Text>
                    }
                    <View style={{ paddingLeft: 20, marginTop: 30, marginLeft: -28, borderLeftWidth: 3, borderLeftColor: '#3d3d3d' }} />

                    <View style={{ marginTop: 5, width: '85%' }}>
                        <Text style={{ color: '#3d3d3d', fontSize: 18, fontWeight: 'bold' }}>{this.props.nomeFantasia}</Text>
                        <Text>1111 - SUP OLIVEIRA</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>08:30</Text>
                                <Text>Hora Agendada</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>--:--</Text>
                                <Text>Hora Visitada</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#3d3d3d', fontSize: 18 }}>--:--</Text>
                                <Text>Permanência</Text>
                            </View>
                        </View>

                    </View>
                </View>

            )

        }
    }
}
