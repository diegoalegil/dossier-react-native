import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type Props = { nombre: string; bg?: string };

export default function CajaFlex({ nombre, bg = 'green' }: Props) {
  const [valorFlex, setValorFlex] = useState(1);

  return (
    <View style={[styles.caja, { backgroundColor: bg, flex: valorFlex }]}>
      <Text style={styles.texto}>Caja {nombre} · flex: {valorFlex}</Text>
      <View style={styles.botones}>
        <Button title="flex - 1" onPress={() => setValorFlex(n => Math.max(0, n - 1))} />
        <Button title="flex + 1" onPress={() => setValorFlex(n => n + 1)} />
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
});
