import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import BotonPersonalizado from '../components/BotonPersonalizado';

const colores = ['lightblue', 'lightgreen', 'gold', 'orange', 'pink', 'plum', 'salmon', 'turquoise'];

export default function ColorAleatorioScreen() {
  const [fondo, setFondo] = useState('white');

  const cambiarColor = () => {
    const otros = colores.filter(color => color !== fondo);
    const propuesto = otros[Math.floor(Math.random() * otros.length)];
    Alert.alert('Cambiar de color', `¿Quieres poner el fondo de color ${propuesto}?`, [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Aceptar', onPress: () => setFondo(propuesto) },
    ]);
  };

  return (
    <View style={[styles.pantalla, { backgroundColor: fondo }]}>
      <Text style={styles.texto}>Color del fondo: {fondo}</Text>
      <BotonPersonalizado titulo="Cambiar de color" color="slateblue" onPress={cambiarColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
