import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useTareas } from '../../../../context/TareasContext';

export default function ListaTareas() {
  const { tareas, setTareas } = useTareas();

  const cambiarCompletada = (id: number) => {
    setTareas(tareas.map(tarea => (tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea)));
  };

  const eliminar = (id: number) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <View style={styles.pantalla}>
      <Button title="Nueva tarea" onPress={() => router.push('/drawer/p24/tareas/editar')} />
      <FlatList
        data={tareas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.tarea}>
            <TouchableOpacity onPress={() => cambiarCompletada(item.id)}>
              <MaterialCommunityIcons
                name={item.completada ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'}
                size={30}
                color="green"
              />
            </TouchableOpacity>
            <Text style={item.completada ? styles.completada : styles.texto}>{item.texto}</Text>
            <TouchableOpacity
              onPress={() => router.push({ pathname: '/drawer/p24/tareas/editar', params: { id: item.id.toString() } })}
            >
              <MaterialCommunityIcons name="pencil" size={30} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => eliminar(item.id)}>
              <MaterialCommunityIcons name="delete" size={30} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  completada: {
    flex: 1,
    textDecorationLine: 'line-through',
  },
  pantalla: {
    flex: 1,
    padding: 10,
  },
  tarea: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 10,
  },
  texto: {
    flex: 1,
  },
});
