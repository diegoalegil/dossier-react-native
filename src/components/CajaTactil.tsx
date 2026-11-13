import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

type Props = { nombre: string; bg?: string };

export default function CajaTactil({ nombre, bg = 'green' }: Props) {
  const [valorFlex, setValorFlex] = useState(1);

  const aumentar = () => {
    Alert.alert('flex + 1', `La caja ${nombre} pasa a flex ${valorFlex + 1}`);
    setValorFlex(n => n + 1);
  };

  return (
    <View style={[styles.caja, { backgroundColor: bg, flex: valorFlex }]}>
      <Text style={styles.texto}>Caja {nombre} · flex: {valorFlex}</Text>
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
  caja: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    gap: 8,
    justifyContent: 'center',
    padding: 8,
  },
  texto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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
