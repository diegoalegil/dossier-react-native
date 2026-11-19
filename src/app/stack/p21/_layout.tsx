import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Primera pantalla' }} />
      <Stack.Screen name="segunda" options={{ title: 'Segunda pantalla' }} />
      <Stack.Screen name="tercera" options={{ title: 'Tercera pantalla' }} />
    </Stack>
  );
}
