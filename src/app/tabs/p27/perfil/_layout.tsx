import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Perfil' }} />
      <Stack.Screen name="detalle" options={{ title: 'Detalle del perfil' }} />
    </Stack>
  );
}
