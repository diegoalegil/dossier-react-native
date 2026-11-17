import { StyleSheet, Text, View } from 'react-native';

import TeclaCalculadora from '../components/TeclaCalculadora';
import useCalculadora from '../hooks/useCalculadora';

const GRIS = '#a5a5a5';
const NARANJA = '#ff9f0a';

export default function CalculadoraScreen() {
  const {
    cambiarSigno,
    limpiar,
    operacionPendiente,
    pantalla,
    porcentaje,
    pulsarIgual,
    pulsarNumero,
    pulsarOperacion,
  } = useCalculadora();

  return (
    <View style={styles.pantalla}>
      <Text style={styles.operacion}>{operacionPendiente}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {pantalla}
      </Text>
      <View style={styles.fila}>
        <TeclaCalculadora texto="AC" color={GRIS} colorTexto="black" onPress={limpiar} />
        <TeclaCalculadora texto="±" color={GRIS} colorTexto="black" onPress={cambiarSigno} />
        <TeclaCalculadora texto="%" color={GRIS} colorTexto="black" onPress={porcentaje} />
        <TeclaCalculadora texto="/" color={NARANJA} onPress={() => pulsarOperacion('/')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora texto="7" onPress={() => pulsarNumero('7')} />
        <TeclaCalculadora texto="8" onPress={() => pulsarNumero('8')} />
        <TeclaCalculadora texto="9" onPress={() => pulsarNumero('9')} />
        <TeclaCalculadora texto="x" color={NARANJA} onPress={() => pulsarOperacion('x')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora texto="4" onPress={() => pulsarNumero('4')} />
        <TeclaCalculadora texto="5" onPress={() => pulsarNumero('5')} />
        <TeclaCalculadora texto="6" onPress={() => pulsarNumero('6')} />
        <TeclaCalculadora texto="-" color={NARANJA} onPress={() => pulsarOperacion('-')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora texto="1" onPress={() => pulsarNumero('1')} />
        <TeclaCalculadora texto="2" onPress={() => pulsarNumero('2')} />
        <TeclaCalculadora texto="3" onPress={() => pulsarNumero('3')} />
        <TeclaCalculadora texto="+" color={NARANJA} onPress={() => pulsarOperacion('+')} />
      </View>
      <View style={styles.fila}>
        <TeclaCalculadora texto="0" ancha onPress={() => pulsarNumero('0')} />
        <TeclaCalculadora texto="." onPress={() => pulsarNumero('.')} />
        <TeclaCalculadora texto="=" color={NARANJA} onPress={pulsarIgual} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    backgroundColor: 'black',
    flex: 1,
    gap: 12,
    justifyContent: 'flex-end',
    padding: 15,
  },
  operacion: {
    color: GRIS,
    fontSize: 24,
    textAlign: 'right',
  },
  resultado: {
    color: 'white',
    fontSize: 80,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    gap: 12,
  },
});
