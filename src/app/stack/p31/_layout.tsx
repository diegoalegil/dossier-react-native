import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Noticias' }} />
      <Stack.Screen name="web" options={{ title: 'Página web' }} />
    </Stack>
  );
}
