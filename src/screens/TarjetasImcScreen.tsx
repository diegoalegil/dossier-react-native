import { useState } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';

import CardPersona from '../components/CardPersona';

export default function TarjetasImcScreen() {
  const [ids, setIds] = useState<number[]>([1]);
  const [siguiente, setSiguiente] = useState(2);

  const anadir = () => {
    setIds([...ids, siguiente]);
    setSiguiente(siguiente + 1);
  };

  const eliminar = (id: number) => {
    setIds(ids.filter(actual => actual !== id));
  };

  return (
    <ScrollView style={styles.pantalla}>
      <Button title="+" onPress={anadir} />
      {ids.map(id => (
        <CardPersona key={id} id={id} onEliminar={eliminar} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    padding: 10,
  },
});
