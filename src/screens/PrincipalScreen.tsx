import { StyleSheet, Text, View } from 'react-native';

import Caja from '../components/Caja';

export default function PrincipalScreen() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Contenedor Principal</Text>
      <View style={styles.escenario}>
        <Caja nombre="1" bg="rosybrown" />
        <Caja nombre="2" bg="cornflowerblue" />
        <Caja nombre="3" bg="green" />
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
    fontSize: 26,
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
