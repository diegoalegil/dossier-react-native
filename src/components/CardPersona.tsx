import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

type Props = { id: number; onEliminar: (id: number) => void };

export default function CardPersona({ id, onEliminar }: Props) {
  const [nombre, setNombre] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const metros = Number(altura);
  const kilos = Number(peso);
  let resultado = 'Escribe una altura y un peso mayores que 0';
  if (metros > 0 && kilos > 0) {
    const imc = kilos / (metros * metros);
    resultado = 'IMC: ' + imc.toFixed(1);
  }

  return (
    <View style={styles.tarjeta}>
      <Text style={styles.titulo}>Persona {id}</Text>
      <TextInput style={styles.campo} placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput style={styles.campo} placeholder="Altura en metros" value={altura} onChangeText={setAltura} />
      <TextInput style={styles.campo} placeholder="Peso en kg" value={peso} onChangeText={setPeso} />
      <Text>{resultado}</Text>
      <Button title="Eliminar" color="red" onPress={() => onEliminar(id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  campo: {
    borderWidth: 1,
    marginBottom: 5,
    padding: 5,
  },
  tarjeta: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  titulo: {
    fontWeight: 'bold',
  },
});
