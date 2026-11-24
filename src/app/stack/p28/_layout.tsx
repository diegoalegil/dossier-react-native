import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Pokémon' }} />
      <Stack.Screen name="[nombre]" options={{ title: 'Detalle' }} />
    </Stack>
  );
}
