import { StyleSheet, Text, View } from 'react-native';

import CajaFlex from '../components/CajaFlex';

export default function FlexScreen() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Reparto del espacio con flex</Text>
      <View style={styles.escenario}>
        <CajaFlex nombre="1" bg="rosybrown" />
        <CajaFlex nombre="2" bg="cornflowerblue" />
        <CajaFlex nombre="3" bg="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    backgroundColor: 'gray',
    flex: 1,
    padding: 20,
  },
  titulo: {
    color: 'yellow',
    fontSize: 24,
    marginBottom: 15,
    textAlign: 'center',
  },
  escenario: {
    backgroundColor: 'lightgray',
    flex: 1,
    gap: 5,
    padding: 10,
  },
});
