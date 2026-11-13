import { StyleSheet, Text, View } from 'react-native';

import CajaPersonalizada from '../components/CajaPersonalizada';

export default function CajasPersonalizadasScreen() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Cajas con nombre y estilos</Text>
      <View style={styles.escenario}>
        <CajaPersonalizada nombre="Caja A" bg="rosybrown" />
        <CajaPersonalizada nombre="Caja B" bg="cornflowerblue" style={{ borderColor: 'navy', borderRadius: 20, borderWidth: 7 }} />
        <CajaPersonalizada nombre="Caja C" bg="green" style={{ borderColor: 'yellow', borderRadius: 40, borderStyle: 'dashed', borderWidth: 4 }} />
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
