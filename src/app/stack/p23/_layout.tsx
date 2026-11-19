import { Stack } from 'expo-router';

import { TareasProvider } from '../../../context/TareasContext';

export default function Layout() {
  return (
    <TareasProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Mis tareas' }} />
        <Stack.Screen name="editar" options={{ title: 'Tarea' }} />
      </Stack>
    </TareasProvider>
  );
}
