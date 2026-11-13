import { StyleSheet, Text, View } from 'react-native';

import CajaTactil from '../components/CajaTactil';

export default function TactilScreen() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Botones con Touchable</Text>
      <View style={styles.escenario}>
        <CajaTactil nombre="1" bg="rosybrown" />
        <CajaTactil nombre="2" bg="cornflowerblue" />
        <CajaTactil nombre="3" bg="green" />
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
