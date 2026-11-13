import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

import BotonPersonalizado from '../components/BotonPersonalizado';

const valoresJustify = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] as const;
const valoresAlign = ['flex-start', 'center', 'flex-end'] as const;

type Justify = (typeof valoresJustify)[number];
type Align = (typeof valoresAlign)[number];

const esJustify = (texto: string): texto is Justify => valoresJustify.some(valor => valor === texto);

export default function AlineacionScreen() {
  const [texto, setTexto] = useState('center');
  const [justify, setJustify] = useState<Justify>('center');
  const [align, setAlign] = useState<Align>('center');

  const cambiarTexto = (nuevo: string) => {
    setTexto(nuevo);
    const limpio = nuevo.trim().toLowerCase();
    if (esJustify(limpio)) {
      setJustify(limpio);
    }
  };

  return (
    <View style={styles.pantalla}>
      <TextInput
        style={styles.campo}
        placeholder="center, space-around..."
        value={texto}
        onChangeText={cambiarTexto}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {!esJustify(texto.trim().toLowerCase()) && (
        <Text style={styles.aviso}>Valor no válido. Prueba: {valoresJustify.join(', ')}</Text>
      )}
      <View style={styles.botones}>
        {valoresAlign.map(valor => (
          <View key={valor} style={styles.boton}>
            <BotonPersonalizado
              titulo={valor}
              color={valor === align ? 'darkblue' : 'steelblue'}
              onPress={() => setAlign(valor)}
            />
          </View>
        ))}
      </View>
      <Text style={styles.activa}>
        justifyContent: {justify} · alignItems: {align}
      </Text>
      <View style={[styles.escenario, { alignItems: align, justifyContent: justify }]}>
        <Image source={require('../../assets/images/react-logo.png')} style={styles.imagen} />
        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.imagen} />
        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/12504344?s=200' }} style={styles.imagen} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    gap: 8,
    padding: 15,
  },
  campo: {
    backgroundColor: 'white',
    borderColor: 'steelblue',
    borderRadius: 6,
    borderWidth: 2,
    fontSize: 16,
    padding: 10,
  },
  aviso: {
    color: 'crimson',
  },
  botones: {
    flexDirection: 'row',
    gap: 6,
  },
  boton: {
    flex: 1,
  },
  activa: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  escenario: {
    backgroundColor: 'lightsteelblue',
    borderColor: 'steelblue',
    borderWidth: 2,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  imagen: {
    height: 90,
    width: 90,
  },
});
