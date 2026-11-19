import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

import { useTareas } from '../../../context/TareasContext';

export default function EditarTarea() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { tareas, setTareas } = useTareas();
  const tarea = tareas.find(actual => actual.id === Number(id));
  const [texto, setTexto] = useState(tarea ? tarea.texto : '');

  const guardar = () => {
    if (tarea) {
      setTareas(tareas.map(actual => (actual.id === tarea.id ? { ...actual, texto: texto } : actual)));
    } else {
      setTareas([...tareas, { id: Date.now(), texto: texto, completada: false }]);
    }
    router.back();
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput style={{ borderWidth: 1, padding: 5 }} placeholder="Tarea" value={texto} onChangeText={setTexto} />
      <Button title="Guardar" onPress={guardar} />
    </View>
  );
}
