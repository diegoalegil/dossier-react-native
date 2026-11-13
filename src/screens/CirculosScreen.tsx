import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BotonPersonalizado from '../components/BotonPersonalizado';

type Circulo = { id: number; color: string };

export default function CirculosScreen() {
  const [circulos, setCirculos] = useState<Circulo[]>([]);
  const [envoltura, setEnvoltura] = useState<'wrap' | 'nowrap'>('wrap');
  const [direccion, setDireccion] = useState<'row' | 'column'>('row');

  const agregarCirculo = () => {
    const numero = circulos.length + 1;
    const rojo = Math.min(255, 120 + numero * 12);
    const verde = Math.max(0, Math.min(255, 230 - numero * 8));
    const azul = Math.min(255, 140 + (numero % 5) * 25);
    setCirculos([...circulos, { id: numero, color: `rgb(${rojo}, ${verde}, ${azul})` }]);
  };

  return (
    <View style={styles.pantalla}>
      <View style={styles.controles}>
        <BotonPersonalizado titulo="AGREGAR CÍRCULO" color="dodgerblue" onPress={agregarCirculo} />
        <BotonPersonalizado
          titulo={`${envoltura}. Pulse para cambiar`}
          color="firebrick"
          onPress={() => setEnvoltura(envoltura === 'wrap' ? 'nowrap' : 'wrap')}
        />
        <BotonPersonalizado
          titulo={`${direccion}. Pulse para cambiar`}
          color="orange"
          onPress={() => setDireccion(direccion === 'row' ? 'column' : 'row')}
        />
      </View>
      <View style={[styles.escenario, { flexDirection: direccion, flexWrap: envoltura }]}>
        {circulos.map(circulo => (
          <View key={circulo.id} style={[styles.circulo, { backgroundColor: circulo.color }]}>
            <Text>C {circulo.id}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    backgroundColor: 'darkgray',
    flex: 1,
    padding: 15,
  },
  controles: {
    gap: 6,
    marginBottom: 10,
  },
  escenario: {
    backgroundColor: 'lightgray',
    flex: 1,
    gap: 8,
    overflow: 'hidden',
    padding: 8,
  },
  circulo: {
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 40,
    borderWidth: 2,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
});
