import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

type Entrada = { id: number; texto: string; fecha: string };

function IconoEmocion({ texto }: { texto: string }) {
  if (texto.includes(':-)')) {
    return <FontAwesome5 name="smile" size={30} color="green" />;
  }
  if (texto.includes(':-(')) {
    return <FontAwesome5 name="frown" size={30} color="blue" />;
  }
  if (texto.includes(':-D')) {
    return <FontAwesome5 name="laugh-beam" size={30} color="orange" />;
  }
  if (texto.includes(';-)')) {
    return <FontAwesome5 name="smile-wink" size={30} color="purple" />;
  }
  if (texto.includes(':-O')) {
    return <FontAwesome5 name="surprise" size={30} color="red" />;
  }
  return <FontAwesome5 name="meh" size={30} color="gray" />;
}

export default function DiarioEmocionesScreen() {
  const [texto, setTexto] = useState('');
  const [entradas, setEntradas] = useState<Entrada[]>([]);

  const anadir = () => {
    const nueva = { id: Date.now(), texto: texto, fecha: new Date().toLocaleString('es-ES') };
    setEntradas([nueva, ...entradas]);
    setTexto('');
  };

  return (
    <View style={styles.pantalla}>
      <TextInput style={styles.campo} placeholder="¿Cómo estás hoy?" value={texto} onChangeText={setTexto} />
      <Button title="Añadir" onPress={anadir} />
      <FlatList
        data={entradas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.entrada}>
            <IconoEmocion texto={item.texto} />
            <Text>{item.fecha}</Text>
            <Text>{item.texto}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  campo: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  entrada: {
    borderBottomWidth: 1,
    padding: 10,
  },
  pantalla: {
    flex: 1,
    padding: 10,
  },
});
