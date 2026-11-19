import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'HomeScreen' }} />
      <Stack.Screen name="detalle" options={{ title: 'Segunda pantalla' }} />
    </Stack>
  );
}
