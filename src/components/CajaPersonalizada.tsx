import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

type Props = { nombre: string; bg?: string; style?: StyleProp<ViewStyle> };

export default function CajaPersonalizada({ nombre, bg = 'green', style }: Props) {
  const [valorFlex, setValorFlex] = useState(1);

  const aumentar = () => {
    Alert.alert('flex + 1', `${nombre} pasa a flex ${valorFlex + 1}`);
    setValorFlex(n => n + 1);
  };

  return (
    <View style={[styles.porDefecto, { backgroundColor: bg, flex: valorFlex }, style]}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.texto}>flex: {valorFlex}</Text>
      <View style={styles.botones}>
        <TouchableOpacity style={[styles.boton, styles.botonMenos]} onPress={() => setValorFlex(n => Math.max(0, n - 1))}>
          <Text style={styles.textoBoton}>flex - 1</Text>
        </TouchableOpacity>
        <TouchableHighlight style={[styles.boton, styles.botonMas]} underlayColor="gold" onPress={aumentar}>
          <Text style={styles.textoBoton}>flex + 1</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  porDefecto: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    gap: 6,
    justifyContent: 'center',
    padding: 8,
  },
  nombre: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  texto: {
    color: 'white',
    fontSize: 16,
  },
  botones: {
    flexDirection: 'row',
    gap: 10,
  },
  boton: {
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  botonMenos: {
    backgroundColor: 'crimson',
  },
  botonMas: {
    backgroundColor: 'darkorange',
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
});
