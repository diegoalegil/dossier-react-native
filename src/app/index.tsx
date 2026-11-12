import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.pantalla}>
      <View style={styles.caja}>
        <Text style={styles.texto}>Contador: {contador}</Text>
        <View style={styles.botones}>
          <Button title="Decrementar" color="crimson" onPress={() => setContador(n => n - 1)} />
          <Button title="Incrementar" color="seagreen" onPress={() => setContador(n => n + 1)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    alignItems: 'center',
    backgroundColor: 'lightpink',
    flex: 1,
    justifyContent: 'center',
  },
  caja: {
    alignItems: 'center',
    backgroundColor: 'lavender',
    borderColor: 'mediumpurple',
    borderRadius: 20,
    borderWidth: 3,
    gap: 15,
    padding: 20,
  },
  texto: {
    fontSize: 22,
  },
  botones: {
    flexDirection: 'row',
    gap: 10,
  },
});
